import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import to from 'await-to-js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CategoryService {
  async create(createCategoryDto: CreateCategoryDto) {
    const [error, category] = await to(
      prisma.category.create({
        data: createCategoryDto,
      }),
    );

    if (error) throw error;

    return category;
  }

  async findAll() {
    const [error, category] = await to(
      prisma.category.findMany({
        include: {
          Product: {
            where: {
              status: 'ACTIVE',
            },
          },
        },
      }),
    );
    if (error) throw error;

    return category;
  }

  async findOne(id: number) {
    const [error, category] = await to(
      prisma.category.findUnique({
        where: { id },
        include: {
          Product: {
            where: {
              status: 'ACTIVE',
            },
          },
        },
      }),
    );

    if (error) throw error;
    if (!category)
      return new NotFoundException({ message: 'Category not found' });

    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const [error, category] = await to(
      prisma.category.update({
        where: { id },
        data: updateCategoryDto,
      }),
    );

    if (error) throw error;
    if (!category)
      return new NotFoundException({ message: 'Category not found' });

    return category;
  }

  async remove(id: number) {
    const [error, category] = await to(
      prisma.category.delete({
        where: { id },
      }),
    );
    if (error) throw error;
    if (!category)
      return new NotFoundException({ message: 'Category not found' });

    return category;
  }
}
