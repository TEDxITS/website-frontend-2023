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
      await getVoyagersTestResults(res);
      break;
    case 'POST':
      await createVoyagersTestResult(req, res);
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

async function getVoyagersTestResults(res: NextApiResponse) {
  try {
    const result = await prisma.voyagersTest.groupBy({
      by: ['result'],
      _count: {
        result: true,
      },
    });
    if (result) {
      return res
        .status(200)
        .json(createResponse(200, 'Test results fetched successfully', result));
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

async function createVoyagersTestResult(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, result } = req.body;
  try {
    const data = await prisma.voyagersTest.create({
      data: {
        name,
        result,
      },
    });
    if (data) {
      return res
        .status(201)
        .json(createResponse(201, 'Test result created successfully', result));
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
