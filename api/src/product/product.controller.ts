import {
  Request,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Logger,
  Req,
  Query,
  HostParam,
  Ip,
  ParseIntPipe,
  ParseArrayPipe,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto, TestDto } from './product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TestService } from './test.service';

import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @Get('redis')
  async redis(@Request() request: any) {
    return this.productService.redisExample(request);
  }

  @Get('simpleQuery')
  async simpleQuery(@Query() query: any) {
    return this.productService.simpleQuery(query);
  }

  @Get('sql')
  async sql(@Query() query: any) {
    // return this.productService.sql(query);
  }

  @Get('get-ip')
  getIp(@Req() request: Request,@Ip() ip:any): any {
    const xforwarded = request.headers['x-forwarded-for'];
    console.log(`remoteAddress:${ip}, xforwarded: ${xforwarded}`);
  }

  // /product/simpleValidate/?param1=eee&param2=muuu
  @UsePipes(new ValidationPipe())
  @Get('simpleValidate')
  async simpleValidate(@Query() dto: TestDto) {
    return dto;
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @Post('create2')
  async create2(@Body() dto: CreateProductDto) {
    return this.productService.create2(dto);
  }

  // }/product/params/myparam1/myparam2/?a=25
  @Get('params/:param1/:param2')
  async params(
    @Query() query: any,
    @Param() params: string,
    @Param('param2') param2: string,
  ) {
    console.log(
      `query ${query}`, // {a:25}
      `params ${params}`, // {param1:"myparam1",param2:"myparam2"}
      `param2 ${param2}`, // myparam2
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async get(@Param('id') id: string) {
    Logger.log('My log');
    return { name: 'jora' };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return { result: 'updated' };
  }

  // @HttpCode(200)
  // @Post()
  // async find(@Body() dto){
  //
  // }

  @Post()
  async save(
    @Body('password') password: string,
    @Body('username') username: string,
  ) {}

  // @Cron(CronExpression.EVERY_5_SECONDS)
  async myCron() {
    Logger.log('myCron');
  }
}
