import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import to from 'await-to-js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  async create(createProductDto: CreateProductDto) {
    const [error, product] = await to(
      prisma.product.create({
        data: createProductDto,
      }),
    );

    console.log(error);
    if (error) throw error;

    return product;
  }

  async findAll() {
    const [error, products] = await to(prisma.product.findMany());
    if (error) throw error;

    return products;
  }

  async findOne(id: number) {
    const [error, product] = await to(
      prisma.product.findUnique({
        where: { id },
      }),
    );

    if (error) throw error;
    if (!product)
      return new NotFoundException({ message: 'Product not found' });

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const [error, product] = await to(
      prisma.product.update({
        where: { id },
        data: updateProductDto,
      }),
    );

    if (error) throw error;
    if (!product)
      return new NotFoundException({ message: 'Product not found' });

    return product;
  }

  async remove(id: number) {
    const [error, product] = await to(
      prisma.product.delete({
        where: { id },
      }),
    );
    if (error) throw error;
    if (!product)
      return new NotFoundException({ message: 'Product not found' });

    return product;
  }
}
