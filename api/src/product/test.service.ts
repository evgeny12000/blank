import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TestService {
  async test() {
    console.log('тест');
  }
}
