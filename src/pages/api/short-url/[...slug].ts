import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

async function createShortUrl(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.url.create({
      data: {
        ...req.body,
      },
    });
    if (result) {
      return res
        .status(201)
        .json(
          createResponse(200, 'The short url created successfully', result)
        );
    }
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientUnknownRequestError ||
      e instanceof Prisma.PrismaClientInitializationError ||
      e instanceof Prisma.PrismaClientRustPanicError ||
      e instanceof Prisma.PrismaClientValidationError
    ) {
      return res.status(500).json(createResponse(500, e.message, null));
    }
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return res
          .status(400)
          .json(createResponse(400, 'The short link already in use', null));
      }
      return res.status(400).json(createResponse(400, e.message, null));
    }
  }
}

async function deleteShortUrl(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.url.delete({
      where: {
        ...req.body,
      },
    });
    if (result) {
      return res
        .status(200)
        .json(
          createResponse(200, 'The short link deleted successfully', result)
        );
    }
    return res.status(404).json(result);
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError ||
      e instanceof Prisma.PrismaClientUnknownRequestError ||
      e instanceof Prisma.PrismaClientInitializationError ||
      e instanceof Prisma.PrismaClientRustPanicError ||
      e instanceof Prisma.PrismaClientValidationError
    )
      return res.status(500).json(createResponse(500, e.message, null));
  }
}

// POST /api/short-url/create
// creates a new shortened URL given an original URL in the request body (url, short_url)

// DELETE /api/short-url/delete
// deletes a shortened URL given the shortened URL in the request body (short_url)
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug;
  if (slug) {
    switch (slug[0]) {
      case 'create':
        await createShortUrl(req, res);
        break;
      case 'delete':
        await deleteShortUrl(req, res);
        break;
      default:
        return res
          .status(404)
          .json(
            createResponse(404, 'The requested resource could not be found', [])
          );
    }
    return;
  }
  return res
    .status(404)
    .json(createResponse(404, 'The requested resource could not be found', []));
}
