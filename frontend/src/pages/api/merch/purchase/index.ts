import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/merch/purchase/user/:id
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'POST':
      await createPurchase(req, res);
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

async function createPurchase(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return res.status(404).json(createResponse(404, 'User not found', null));
    }

    const purchase = await prisma.merchPurchase.create({
      data: {
        userId: user.id,
        name: body.name,
        email: body.email,
        address: body.address,
        phoneNumber: body.phoneNumber,
        totalPrice: body.totalPrice,
        MerchPurchaseDetail: {
          create: body.MerchPurchaseDetail,
        },
      },
    });
    if (purchase) {
      return res
        .status(200)
        .json(createResponse(200, 'Purchase created successfully', purchase));
    }
    return res
      .status(404)
      .json(createResponse(404, 'Purchase not created', null));
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
