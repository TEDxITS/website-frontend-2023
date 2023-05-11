import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/merch
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'GET':
      await getMerchesByBundleId(req, res);
      break;
    default:
      return res
        .status(404)
        .json(
          createResponse(404, 'The requested resource could not be found', null)
        );
  }
  return;
}

async function getMerchesByBundleId(req: NextApiRequest, res: NextApiResponse) {
  try {
    const id = req.query.id as string;
    const result = await prisma.merchBundle.findUnique({
      where: {
        id: id,
      },
      include: {
        MerchBundleDetail: {
          include: {
            merch: true,
          },
        },
      },
    });

    if (result) {
      return res
        .status(200)
        .json(createResponse(200, 'Merches fetched successfully', result));
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
      return res.status(400).json(createResponse(400, e.message, null));
    }
  }
}
