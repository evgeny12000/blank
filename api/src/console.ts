// console.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const args = process.argv.slice(2);
const parsedArgs = require('minimist')(args);

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);

    const {service = '',method = '',_ = '',...params} = parsedArgs;

    try {
        const serviceInstance = app.get(service);

        if (!serviceInstance) {
            throw new Error(`Service not found: ${service}`);
        }

        if (typeof serviceInstance[method] === 'function') {
            const result = await serviceInstance[method](params);
            console.log(`End process : ${result}`);
        } else {
            throw new Error(`Method ${method} not found in ${service}`);
        }
    } catch (error) {
        console.error('Failed to execute command:', error);
    }

    await app.close();
    process.exit(0);
}

bootstrap();
