import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/booking/booking-detail/[id]
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'GET':
      await getBookingDetailById(req, res);
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

async function getBookingDetailById(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  try {
    const result = await prisma.bookingDetail.findUnique({
      where: {
        id: id?.toString(),
      },
      include: {
        ticket: {
          select: {
            name: true,
            type: true,
            price: true,
          },
        },
      },
    });

    if (result) {
      return res
        .status(200)
        .json(
          createResponse(200, 'Booking detail fetched successfully', result)
        );
    }

    return res
      .status(404)
      .json(createResponse(404, 'Booking detail not found', null));
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
