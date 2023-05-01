import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// POST /api/ticket/transfer

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'POST':
      await transferPurchase(req, res);
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

async function transferPurchase(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  try {
    const orderingUser = await prisma.user.findUnique({
      where: {
        email: body.orderingUser,
      },
    });

    if (!orderingUser) {
      return res
        .status(404)
        .json(createResponse(404, 'User not found', orderingUser));
    }

    const result = await prisma.booking.update({
      where: {
        id: body.id,
      },
      data: {
        orderingUser: orderingUser.id,
      },
    });

    if (result) {
      return res
        .status(200)
        .json(createResponse(200, 'Purchase transferred successfully', result));
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
