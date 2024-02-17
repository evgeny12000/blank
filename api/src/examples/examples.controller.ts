import {Controller, Get, Request} from '@nestjs/common';

@Controller('examples')
export class ExamplesController {

    @Get('test')
    async test(@Request() request: any) {

        function testStackLimit(i = 0) {
            try {
                return testStackLimit(i + 1);
            } catch (e) {
                return i;
            }
        }

        console.log(testStackLimit());

    }


}
