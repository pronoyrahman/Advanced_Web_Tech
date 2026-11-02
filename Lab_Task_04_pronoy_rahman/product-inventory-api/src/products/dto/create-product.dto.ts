import { Type } from 'class-transformer';
import { IsBoolean,IsInt,IsNotEmpty,IsNumber,IsOptional,IsPositive,IsString,max,MaxLength,Min,} from 'class-validator';

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  description?: string;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  price: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  stock?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  category: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}