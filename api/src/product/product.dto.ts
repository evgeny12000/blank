// @ts-ignore
import { Type } from 'class-transformer';
// @ts-ignore
import {
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
  IsArray,
  Max,
  Min,
  IsIn,
} from 'class-validator';

export class TestDto {
  @IsString() param1: string;

  @IsOptional() @IsString() param2: string;

  @IsString() param3: string = 'default';

  @IsIn(['value1', 'value2', 'value3']) param4: string;
}

export class CreateProductDto {
  @IsString() image: string;

  @IsString() title: string;
  // @IsString() link: string;
  // @Max(5)	@Min(1) @IsNumber()	initialRating: number;
  // @IsNumber() price: number;
  // @IsOptional() @IsNumber() oldPrice?: number;
  // @IsNumber() credit: number;
  // @IsString() description: string;
  // @IsString()	advantages: string;
  // @IsOptional() @IsString() disAdvantages?: string;
}

export class UpdateProductDto {
  @IsString() image: string;

  @IsString() title: string;

  @IsString() link: string;

  @Max(5) @Min(1) @IsNumber() initialRating: number;

  @IsNumber() price: number;

  @IsOptional() @IsNumber() oldPrice?: number;

  @IsNumber() credit: number;

  @IsString() description: string;

  @IsString() advantages: string;

  @IsOptional() @IsString() disAdvantages?: string;
}
