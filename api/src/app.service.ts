import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('eeeee');
    return 'Hello World 222!';
  }
}
