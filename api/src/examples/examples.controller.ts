import {Controller, Get, Request} from '@nestjs/common';

@Controller('examples')
export class ExamplesController {

    @Get('test')
    async test(@Request() request: any) {
       return 'Ой лала !!!';
    }


}
