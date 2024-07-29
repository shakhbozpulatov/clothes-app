import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

class PriceFilterInput {
  @IsNumber()
  @IsOptional()
  gt?: number;

  @IsNumber()
  @IsOptional()
  gte?: number;

  @IsNumber()
  @IsOptional()
  lt?: number;

  @IsNumber()
  @IsOptional()
  lte?: number;
}

export class FilterProductInput {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsObject()
  @IsOptional()
  price?: PriceFilterInput;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  made_in?: string;

  @IsString()
  @IsOptional()
  size?: string;

  @IsString()
  @IsOptional()
  expire?: string;

  @IsString()
  shopId?: string;
}
