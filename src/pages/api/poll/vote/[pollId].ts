import pollVoteController from '@backend/controller/pollVoteController';
import type { NextApiRequest, NextApiResponse } from 'next';
import { applyRateLimit } from '@src/utils/rateLimit';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'POST':
      await applyRateLimit(req, res);
      await pollVoteController.create(req, res);
      break;
    default:
      res.status(405).end();
      break;
  }
}
