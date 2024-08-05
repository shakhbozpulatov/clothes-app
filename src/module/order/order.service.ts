import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import to from 'await-to-js';
import { PrismaClient } from '@prisma/client';
import { getOnlyStatus, updateStatus } from './helper';
import { STATUSES_ORDER } from '../../constants';

const prisma = new PrismaClient();

@Injectable()
export class OrderService {
  async create(createOrderDto: CreateOrderDto) {
    const [error, order] = await to(
      prisma.order.create({
        data: {
          color: createOrderDto.color,
          fullname: createOrderDto.fullname,
          phone: createOrderDto.phone,
          location: createOrderDto.location,
          quantity: createOrderDto.quantity,
          products: {
            create: [
              {
                productId: createOrderDto.productId,
              },
            ],
          },
        },
      }),
    );

    if (error) throw error;

    return order;
  }

  async findAll(status: number | null) {
    const [error, orders] = await getOnlyStatus(status);
    if (error) throw error;

    return orders;
  }

  async findOne(id: number) {
    const [error, order] = await to(
      prisma.order.findUnique({
        where: {
          id,
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

    if (error) throw error;
    if (!order) return new NotFoundException({ message: 'Order not found' });

    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    // const [error, order] = await to(
    //   prisma.order.update({
    //     where: { id },
    //     data: updateOrderDto,
    //   }),
    // );
    //
    // if (error) throw error;
    // if (!order) return new NotFoundException({ message: 'Order not found' });
    //
    // return order;
  }

  async status(id: number, data: { status: number | string }) {
    // const [error, order] = await updateStatus(status);
    let status;
    switch (+data.status) {
      case 0:
        status = STATUSES_ORDER[+data.status];
        break;
      case 1:
        status = STATUSES_ORDER[+data.status];
        break;
      case 2:
        status = STATUSES_ORDER[+data.status];
        break;
      case 3:
        status = STATUSES_ORDER[+data.status];
        break;
    }
    const [error, order] = await to(
      prisma.order.update({
        where: { id },
        data: {
          status: status,
        },
      }),
    );

    if (error) throw error;
    if (!order) return new NotFoundException({ message: 'Order not found' });

    return order;
  }

  async remove(id: number) {
    const [error, order] = await to(
      prisma.order.update({
        where: {
          id,
        },
        data: {
          status: 'DELETED',
        },
      }),
    );

    if (error) throw error;
    if (!order) return new NotFoundException({ message: 'Order not found' });

    return order;
  }
}
