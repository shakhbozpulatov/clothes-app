import {
  IsArray,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateProductDto } from '../../product/dto/create-product.dto';

export class CreateOrderDto {
  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  quantity: number;

  @IsString()
  @IsOptional()
  fullname: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsNumber()
  productId: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsArray()
  products: CreateProductDto[];
}
