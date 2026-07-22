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

// Mirrors the Mailjet HTTP API pattern already proven for voiceopd's
// password-reset emails (backend/controllers/auth.controller.js) — free tier,
// HTTPS-only, works fine from a Vercel serverless function.
async function sendContactEmail(body: Required<Pick<ContactBody, 'name' | 'email' | 'projectType' | 'message'>> & { phone: string }) {
  const mjApiKey = process.env['MAILJET_API_KEY'];
  const mjSecretKey = process.env['MAILJET_SECRET_KEY'];
  if (!mjApiKey || !mjSecretKey) {
    throw new Error('MAILJET_API_KEY / MAILJET_SECRET_KEY not set');
  }

  const fromEmail = process.env['EMAIL_FROM_ADDRESS'] || 'ssspawar25@gmail.com';
  const fromName = process.env['EMAIL_FROM_NAME'] || 'S3 Globe Web Solutions';
  const toEmail = process.env['CONTACT_TO_ADDRESS'] || fromEmail;

  const credentials = Buffer.from(`${mjApiKey}:${mjSecretKey}`).toString('base64');

  const res = await fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: fromEmail, Name: fromName },
          To: [{ Email: toEmail, Name: 'S3 Globe Web Solutions' }],
          ReplyTo: { Email: body.email, Name: body.name },
          Subject: `New project inquiry from ${body.name}`,
          TextPart: [
            `Name: ${body.name}`,
            `Email: ${body.email}`,
            `Phone: ${body.phone || 'Not provided'}`,
            `Project type: ${body.projectType}`,
            '',
            body.message,
          ].join('\n'),
        },
      ],
    }),
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}) as Record<string, unknown>);
    const msg =
      (errBody as any)?.Messages?.[0]?.Errors?.[0]?.ErrorMessage ||
      (errBody as any)?.ErrorMessage ||
      `Mailjet API error ${res.status}`;
    throw new Error(msg);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body as ContactBody;

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
    return res.status(502).json({ error: 'Could not send your message right now. Please try again shortly.' });
  }
}
