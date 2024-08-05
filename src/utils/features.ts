import { PrismaClient } from '@prisma/client';
import { STATUSES_PRODUCT } from '../constants';

const prisma = new PrismaClient();

export class Features {
  constructor(
    public queryString: any,
    public collectionName: string,
  ) {}

  async filter() {
    try {
      if (
        this.queryString.status &&
        STATUSES_PRODUCT.includes(this.queryString.status.toUpperCase())
      ) {
        return await prisma[this.collectionName].findMany({
          where: {
            status: this.queryString.status.toUpperCase(),
          },
        });
      } else {
        return await prisma.product.findMany({});
      }
    } catch (error) {
      console.log(error);
    }
  }

  // sorting() {
  //   if (this.queryString.sort) {
  //     const sortBy = this.queryString.sort.split(',').join(' ');
  //     this.prismaQuery = this.prismaQuery.sort(sortBy);
  //   } else {
  //     this.prismaQuery = this.prismaQuery.sort('-created');
  //   }
  //
  //   return this;
  // }

  // pagination() {
  //   // get the page and convert it to a number. If no page set default to 1
  //   const page = this.queryString.page || 1;
  //
  //   // get limit and if no limit, set limit to 50
  //   const limit = this.queryString.limit || 50;
  //
  //   // calculate skip value
  //   const skip = (page - 1) * limit;
  //
  //   // chain it to the mongoose query.
  //   this.prismaQuery = this.prismaQuery({
  //     skip: skip,
  //     take: limit,
  //   });
  //
  //   // return the object
  //   return this;
  // }
  //
  //

  //
  // limit() {
  //   if (this.queryString.fields) {
  //     const fields = this.queryString.fields.split(',').join(' ');
  //
  //     this.prismaQuery = this.prismaQuery.select(fields);
  //   } else {
  //     this.prismaQuery = this.prismaQuery.select('-__v');
  //   }
  //
  //   return this;
  // }
}
