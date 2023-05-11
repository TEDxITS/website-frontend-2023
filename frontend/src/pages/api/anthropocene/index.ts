import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

// GET /api/anthropocene
// POST /api/anthropocene
// DELETE /api/anthropocene

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'GET':
      await getItems(res);
      break;
    case 'POST':
      await createItem(req, res);
      break;
    case 'PATCH':
      await updateItem(req, res);
      break;
    case 'DELETE':
      await deleteItem(req, res);
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

async function getItems(res: NextApiResponse) {
  try {
    const result = await prisma.anthropocene.findMany();
    if (result) {
      return res
        .status(200)
        .json(createResponse(200, 'Items fetched successfully', result));
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

async function createItem(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.anthropocene.create({
      data: {
        ...req.body,
      },
    });
    if (result) {
      return res
        .status(200)
        .json(createResponse(200, 'Items created successfully', result));
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
          .json(createResponse(400, 'Item already existed', null));
      }
      return res.status(400).json(createResponse(400, e.message, null));
    }
  }
}

async function updateItem(req: NextApiRequest, res: NextApiResponse) {
  const { id, ...rest } = req.body;
  try {
    const result = await prisma.anthropocene.update({
      where: {
        id: id,
      },
      data: {
        ...rest,
      },
    });
    if (result) {
      return res

        .status(200)
        .json(createResponse(200, 'Items updated successfully', result));
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

async function deleteItem(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.anthropocene.delete({
      where: {
        id: req.body.id,
      },
    });
    if (result) {
      return res
        .status(200)
        .json(createResponse(200, 'Items deleted successfully', result));
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
