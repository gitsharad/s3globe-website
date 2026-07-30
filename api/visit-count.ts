import type { VercelRequest, VercelResponse } from '@vercel/node';

// Increments a counter in Upstash Redis (free tier REST API) and returns the
// new total. Falls back to a clear 503 if the store isn't configured yet,
// so the frontend can just hide the counter instead of showing a fake "0".
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const restUrl = process.env['UPSTASH_REDIS_REST_URL'];
  const restToken = process.env['UPSTASH_REDIS_REST_TOKEN'];

  if (!restUrl || !restToken) {
    return res.status(503).json({ error: 'Visit counter not configured' });
  }

  try {
    const upstashRes = await fetch(`${restUrl}/incr/site_visits`, {
      headers: { Authorization: `Bearer ${restToken}` },
    });

    if (!upstashRes.ok) {
      throw new Error(`Upstash API error ${upstashRes.status}`);
    }

    const data = (await upstashRes.json()) as { result: number };
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ count: data.result });
  } catch (err) {
    console.error('Visit counter failed:', err);
    return res.status(502).json({ error: 'Could not update visit counter' });
  }
}
