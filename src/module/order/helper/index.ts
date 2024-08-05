import to from 'await-to-js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOnlyStatus = async (statusId: number | null) => {
  let error;
  let order;
  switch (statusId) {
    case 0:
      console.log(0);
      [error, order] = await to(
        prisma.order.findMany({
          where: { status: 'DELETED' },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
      break;
    case 1:
      console.log(1);
      [error, order] = await to(
        prisma.order.findMany({
          where: { status: 'NEW' },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
      break;
    case 2:
      console.log(2);
      [error, order] = await to(
        prisma.order.findMany({
          where: { status: 'RETURNED' },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
      break;
    case 3:
      console.log(3);
      [error, order] = await to(
        prisma.order.findMany({
          where: { status: 'COMPLETED' },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
      break;
    default:
      console.log(4);
      [error, order] = await to(
        prisma.order.findMany({
          where: {
            NOT: {
              status: 'DELETED',
            },
          },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
  }

  return [error, order];
};

export const updateStatus = async (status) => {
  let error;
  let order;
  switch (status) {
    case 0:
      console.log(0);
      [error, order] = await to(
        prisma.order.findMany({
          where: { status: 'DELETED' },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
      break;
    case 1:
      console.log(1);
      [error, order] = await to(
        prisma.order.findMany({
          where: { status: 'NEW' },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
      break;
    case 2:
      console.log(2);
      [error, order] = await to(
        prisma.order.findMany({
          where: { status: 'RETURNED' },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
      break;
    case 3:
      console.log(3);
      [error, order] = await to(
        prisma.order.findMany({
          where: { status: 'COMPLETED' },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
      break;
    default:
      console.log(4);
      [error, order] = await to(
        prisma.order.findMany({
          where: {
            NOT: {
              status: 'DELETED',
            },
          },
          include: {
            products: {
              include: {
                product: true,
              },
            },
          },
        }),
      );
  }

  return [error, order];
};
