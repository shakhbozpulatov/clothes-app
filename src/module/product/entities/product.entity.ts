import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class Product {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  image: string[];

  @IsNumber()
  price: number;

  @IsEnum(['INACTIVE', 'ACTIVE'])
  status: 'INACTIVE' | 'ACTIVE';

  @IsEnum(['MALE', 'FEMALE'])
  gender: 'MALE' | 'FEMALE';

  @IsString()
  brand: string;

  @IsString()
  @IsOptional()
  size: string;

  @IsDate()
  createdAt: Date;
}
