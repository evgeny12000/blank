import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { User, UserSchema } from "./user.mongo-model";
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJWTConfig } from '../configs/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStratagy } from './strategies/jwt.stratagy';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
	controllers: [AuthController],
	imports: [
		MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig
		}),
		PassportModule
	],
	providers: [
		AuthService,
		JwtStratagy
	]
})
export class AuthModule { }
