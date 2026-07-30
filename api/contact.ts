import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
  company?: string; // honeypot — must stay empty
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Web3Forms relays the notification from its own sending infrastructure —
// no sender/domain verification or account review needed on our side, unlike
// a traditional ESP (Mailjet) where sending "as" s3globe.in triggers fraud
// review for a brand-new domain with no sending reputation yet.
async function sendContactEmail(body: Required<Pick<ContactBody, 'name' | 'email' | 'projectType' | 'message'>> & { phone: string }) {
  const accessKey = process.env['WEB3FORMS_ACCESS_KEY'];
  if (!accessKey) {
    throw new Error('WEB3FORMS_ACCESS_KEY not set');
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New project inquiry from ${body.name}`,
      from_name: 'S3 Globe Web Solutions — Contact Form',
      replyto: body.email,
      Name: body.name,
      Email: body.email,
      Phone: body.phone || 'Not provided',
      'Project Type': body.projectType,
      Message: body.message,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

  if (!res.ok || !data.success) {
    throw new Error(data.message || `Web3Forms API error ${res.status}`);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = (req.body ?? {}) as ContactBody;

  // Honeypot: a real visitor never fills this hidden field in.
  if (body.company) {
    return res.status(200).json({ ok: true });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const projectType = (body.projectType || '').trim();
  const message = (body.message || '').trim();
  const phone = (body.phone || '').trim();

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (message.length < 10) {
    return res.status(400).json({ error: 'Please provide a bit more detail about your project.' });
  }

  try {
    await sendContactEmail({ name, email, projectType, message, phone });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form email failed:', err);
    // Cloudflare's free plan intercepts and replaces 502/504 responses with its
    // own generic error page, discarding whatever the origin actually returned —
    // so this must NOT be 502/504 or the JSON error message below never reaches
    // the frontend. 500 is passed through untouched.
    return res.status(500).json({ error: 'Could not send your message right now. Please try again shortly.' });
  }
}
