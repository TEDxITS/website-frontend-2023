import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/booking/booking-detail/redeem/[id]
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'GET':
      await redeemBookingDetailById(req, res);
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

async function redeemBookingDetailById(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

    if (!result) {
      return res
        .status(404)
        .json(createResponse(404, 'Ticket not found', null));
    }

    // if (!(result.ticket.name === 'Pre Event 3')) {
    //   return res
    //     .status(400)
    //     .json(
    //       createResponse(400, 'Main event ticket is not redeemable yet', null)
    //     );
    // }

    if (
      result.ticket.name === 'Pre Event 3' &&
      (new Date().getTime() < new Date(result.ticket.type).getTime() ||
        new Date().getTime() >
          new Date(result.ticket.type).getTime() + 86400000)
    ) {
      return res
        .status(400)
        .json(
          createResponse(
            400,
            'This ticket is for different Pre event 3 day',
            null
          )
        );
    }

    if (result.isRedeemed) {
      return res
        .status(400)
        .json(createResponse(400, 'Ticket already redeemed', null));
    }

    const updateResult = await prisma.bookingDetail.update({
      where: {
        id: id?.toString(),
      },
      data: {
        isRedeemed: true,
      },
    });

    if (updateResult) {
      return res
        .status(200)
        .json(createResponse(200, 'Ticket redeemed successfully', result));
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
