import { CreateProductDto } from './product.dto';

export interface IProductService {
  create(dto: CreateProductDto): Promise<any>;
  create2(dto: CreateProductDto): Promise<any>;
}
