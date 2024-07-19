import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';

export class Product {
  @IsString()
  name: string;

  @IsString()
  description: string;

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
