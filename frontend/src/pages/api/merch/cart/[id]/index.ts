import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/merch/cart/:id
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'DELETE':
      await deleteCart(req, res);
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

async function deleteCart(req: NextApiRequest, res: NextApiResponse) {
  try {
    const id = req.query.id as string;
    const cart = await prisma.merchCart.findUnique({
      where: {
        id: id,
      },
    });
    if (cart) {
      const deletedCart = await prisma.merchCart.delete({
        where: {
          id: cart.id,
        },
      });
      return res
        .status(200)
        .json(createResponse(200, 'Cart updated successfully', deletedCart));
    }
    return res.status(404).json(createResponse(404, 'Cart not found', null));
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
