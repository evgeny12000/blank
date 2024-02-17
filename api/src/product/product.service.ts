import {Inject, Injectable, Logger} from '@nestjs/common';
import { CreateProductDto } from './product.dto';
import {getConnectionToken, InjectModel} from '@nestjs/sequelize';
import { Product } from './product.model';
import {Domain} from "./domain2.model";
import {Sequelize} from "sequelize-typescript";
import {RedisService} from "../redis/redis.service";
import Redis from "ioredis";

@Injectable()
export class ProductService {

    redis : Redis;

  constructor(
    // @InjectMongoModel(ProductMongo.name) private readonly productMongoModel: MongoModel<ProductDocument>,
    @InjectModel(Product) private productModel: typeof Product,
    @InjectModel(Domain) private domainModel: typeof Domain,
    @Inject(getConnectionToken()) private db: Sequelize,
    private redisService: RedisService
  ) {
      this.redis = redisService.redisClient;
  }

	async simpleQuery(query : any) {

		const data1 =  await this.db.query("SELECT * FROM products p LIMIT 10;");
        console.log('data1',data1);
        const data2 =  await this.productModel.findAll();
        console.log('data2',data2);
	}

    async redisExample(query : any) {
        await this.redis.set('key222', 'value333');
        const redisValue = await this.redis.get('key222');
        console.log('redisValue',redisValue);
    }

  async create(dto: CreateProductDto) {
    // return this.productMongoModel.create(dto);
  }

  async create2(dto: CreateProductDto) {
    console.log(dto);
    const res = this.productModel.findAll();
    console.log(res);
    return await this.productModel.create({ title: 'eeee', image: 'muuu' });
  }

  // async findById(id: string) {
  // 	return this.productModel.findById(id).exec();
  // }
  //
  // async deleteById(id: string) {
  // 	return this.productModel.findByIdAndDelete(id).exec();
  // }
  //
  // async updateById(id: string, dto: CreateProductDto) {
  // 	return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  // }

}
