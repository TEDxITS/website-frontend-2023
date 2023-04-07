import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';
import { addRowToSheet } from '@/utils/spreadsheet';

// POST /api/call-for-local-speaker
// creates a new local speaker row given the request body

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'POST':
      await createLocalSpeaker(req, res);
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

async function createLocalSpeaker(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.localSpeaker.create({
      data: {
        ...req.body,
      },
    });
    if (result) {
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { id, created_at, ...resultForSpreadsheet } = result;
      try {
        await addRowToSheet(
          process.env.CALL_FOR_LOCAL_SPEAKER_SPREADSHEET_ID || '',
          resultForSpreadsheet
        );
        return res
          .status(201)
          .json(
            createResponse(201, 'Local speaker created successfully', result)
          );
      } catch (e) {
        return res
          .status(500)
          .json(
            createResponse(
              500,
              'Local speaker created successfully but failed to get saved on spreadsheet',
              result
            )
          );
      }
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
          .json(createResponse(400, 'Local speaker already existed', null));
      }
      return res.status(400).json(createResponse(400, e.message, null));
    }
  }
}
