import { IsArray, IsDate, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  image: string[];

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

  @IsDate()
  updatedAt: Date;
}
