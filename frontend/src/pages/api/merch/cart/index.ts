import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/merch/cart
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'POST':
      await createOrUpdateCart(req, res);
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

async function createOrUpdateCart(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);
    const user = await prisma.user.findUnique({
      where: {
        email: body.userEmail,
      },
    });

    if (!user) {
      return res.status(404).json(createResponse(404, 'User not found', null));
    }

    const cart = await prisma.merchCart.findFirst({
      where: {
        userId: user.id,
        merchId: body.merchId,
      },
    });
    if (cart) {
      const updatedCart = await prisma.merchCart.update({
        where: {
          id: cart.id,
        },
        data: {
          quantity: body.quantity,
        },
      });
      return res
        .status(200)
        .json(createResponse(200, 'Cart updated successfully', updatedCart));
    }
    const newCart = await prisma.merchCart.create({
      data: {
        userId: body.userId,
        merchId: body.merchId,
        quantity: 1,
      },
    });
    return res
      .status(200)
      .json(createResponse(200, 'Cart updated successfully', newCart));
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
