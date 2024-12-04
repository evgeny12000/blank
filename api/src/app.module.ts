import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleModule } from "@nestjs/schedule";
import {SequelizeModule} from "@nestjs/sequelize";
import * as fs from "fs";
import {RedisModule} from "./redis/redis.module";
import { ExamplesModule } from './examples/examples.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/local?authSource=admin`),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    AuthModule,
    ProductModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      logging: (msg) => fs.appendFileSync('./logs/sequelize.log', msg + '\n'),
      autoLoadModels: true,
      synchronize:false,
      // sync: { alter: true  }
    }),
    RedisModule,
    ExamplesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
