import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/merch/purchase/:id
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'GET':
      await getPurchasesById(req, res);
      break;
    case 'PUT':
      await updatePurchase(req, res);
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

async function getPurchasesById(req: NextApiRequest, res: NextApiResponse) {
  try {
    const id = req.query.id as string;
    const purchase = await prisma.merchPurchase.findUnique({
      where: {
        id: id,
      },
      include: {
        MerchPurchaseDetail: {
          include: {
            merch: true,
          },
        },
      },
    });
    if (purchase) {
      return res
        .status(200)
        .json(createResponse(200, 'Purchase found successfully', purchase));
    }
    return res
      .status(404)
      .json(createResponse(404, 'Purchase not found', null));
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

async function updatePurchase(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body);
    const id = req.query.id as string;
    const purchase = await prisma.merchPurchase.update({
      where: {
        id: id,
      },
      data: {
        paymentProof: body.paymentProof,
        status: 'SUDAH_DIBAYAR',
      },
    });
    if (purchase) {
      return res
        .status(200)
        .json(
          createResponse(200, 'Payment proof uploaded successfully', purchase)
        );
    }
    return res
      .status(404)
      .json(createResponse(404, 'Payment proof not uploaded', null));
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
