import { Module } from '@nestjs/common';
import { ExamplesController } from './examples.controller';
import { ArraysController } from './arrays.controller';
import { TypesController } from './types.controller';
import { ObjectsController } from './objects.controller';

@Module({
  controllers: [
      ExamplesController,
      ArraysController,
      TypesController,
      ObjectsController
  ]
})
export class ExamplesModule {}
