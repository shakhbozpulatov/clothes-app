import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { CreateProductDto } from '../../product/dto/create-product.dto';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsArray()
  products: CreateProductDto[];

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
