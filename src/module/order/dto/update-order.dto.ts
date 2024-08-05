import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateProductDto } from '../../product/dto/create-product.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsString()
  @IsOptional()
  color: string;

  @IsNumber()
  @IsOptional()
  quantity: number;

  @IsEnum(['NEW', 'RETURNED', 'DELETED', 'COMPLETED'])
  status: ['NEW', 'RETURNED', 'DELETED', 'COMPLETED'];

  @IsString()
  @IsOptional()
  fullname: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @IsArray()
  @IsOptional()
  products: CreateProductDto[];
}
