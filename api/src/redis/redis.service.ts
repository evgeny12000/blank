import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
    public redisClient: Redis;
    private readonly requestLimit = 20;

    constructor() {
        this.redisClient = new Redis({
            host: process.env.REDIS_HOST,
            port: parseInt(process.env.REDIS_PORT)
        });

        this.redisClient.expire('requestCount', 1);
    }

    async get(key: string): Promise<string | null> {
        return this.redisClient.get(key);
    }

    async set(key: string, value: string, ttl?: number): Promise<void> {
        if (ttl) {
            await this.redisClient.set(key, value, 'EX', ttl);
        } else {
            await this.redisClient.set(key, value);
        }
    }

    async canMakeRequest(): Promise<boolean> {
        const currentCount = await this.redisClient.incr('requestCount');
        await this.redisClient.expire('requestCount', 1); // Сброс каждую секунду

        return currentCount <= this.requestLimit;
    }
}