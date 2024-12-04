import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';
import { TestService } from './test.service';
import {Domain} from "./domain2.model";

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    // MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/local?authSource=admin`),
    // MongooseModule.forFeature([
    //   { name: ProductMongo.name, schema: ProductMongoSchema },
    // ]),
    SequelizeModule.forFeature([Product,Domain]),
  ],
})
export class ProductModule {}
