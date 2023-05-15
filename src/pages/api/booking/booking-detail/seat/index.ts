import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/booking/booking-detail/seat
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'GET':
      await getAllSeats(req, res);
      break;
    case 'POST':
      await selectBookingDetailSeat(req, res);
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

async function getAllSeats(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.seat.findMany({
      orderBy: {
        name: 'asc',
      },
      include: {
        BookingDetail: {
          select: {
            id: true,
          },
        },
      },
    });

    if (result) {
      return res
        .status(200)
        .json(createResponse(200, 'Seats retrieved successfully', result));
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

async function selectBookingDetailSeat(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { bookingDetailId, seatName } = req.body;
  try {
    const selectedSeat = await prisma.seat.findUnique({
      where: {
        name: seatName,
      },
    });

    if (!selectedSeat) {
      return res
        .status(400)
        .json(createResponse(400, 'Seat does not exist', null));
    }

    const bookingWithSeat = await prisma.bookingDetail.findFirst({
      where: {
        seatId: selectedSeat.id,
      },
    });

    if (bookingWithSeat) {
      return res
        .status(400)
        .json(createResponse(400, 'Seat is already taken', null));
    }

    const result = await prisma.bookingDetail.update({
      where: {
        id: bookingDetailId,
      },
      data: {
        seatId: selectedSeat.id,
      },
    });

    if (result) {
      return res
        .status(200)
        .json(createResponse(200, 'Seat selected successfully', result));
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
