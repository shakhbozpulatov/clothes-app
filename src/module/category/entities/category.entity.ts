import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { CreateProductDto } from '../../product/dto/create-product.dto';

export class Category {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsDate()
  createdAt: Date;

  @IsArray()
  products: CreateProductDto[];

  @IsDate()
  updatedAt: Date;
}
