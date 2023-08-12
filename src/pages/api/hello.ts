// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Shorts = {
  shorts_links: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Shorts>
) {
  // Convert the following links to an array
  // https://www.youtube.com/shorts/ibuyPg12GmM
  // https://www.youtube.com/shorts/FxJXVS8_0GA
  // https://www.youtube.com/shorts/IdwzFJuccak
  // https://www.youtube.com/shorts/YKZoMUWuI8g
  // https://www.youtube.com/shorts/nNRBsaVTTa8
  // https://www.youtube.com/shorts/U5gpmFsnoCc
  // https://www.youtube.com/shorts/gigSqjSZEJQ
  // https://www.youtube.com/shorts/_eECWDmYxeI
  // https://www.youtube.com/shorts/IolO9pr4C10
  // https://www.youtube.com/shorts/DEJMP1452Yo
  // https://www.youtube.com/shorts/qUuSD1vUl6k
  // https://www.youtube.com/shorts/n4lc7jfzaMY
  res.status(200).json({
    shorts_links: [
      'https://www.youtube.com/shorts/ibuyPg12GmM',
      'https://www.youtube.com/shorts/FxJXVS8_0GA',
      'https://www.youtube.com/shorts/IdwzFJuccak',
      'https://www.youtube.com/shorts/YKZoMUWuI8g',
      'https://www.youtube.com/shorts/nNRBsaVTTa8',
      'https://www.youtube.com/shorts/U5gpmFsnoCc',
      'https://www.youtube.com/shorts/gigSqjSZEJQ',
      'https://www.youtube.com/shorts/_eECWDmYxeI',
      'https://www.youtube.com/shorts/IolO9pr4C10',
      'https://www.youtube.com/shorts/DEJMP1452Yo',
      'https://www.youtube.com/shorts/qUuSD1vUl6k',
      'https://www.youtube.com/shorts/n4lc7jfzaMY',
    ],
  });
}
