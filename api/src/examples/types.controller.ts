import {Controller, Get, Query} from '@nestjs/common';
import {Exclude} from "class-transformer";

@Controller('types')
export class TypesController {

    @Get('test')
    async test(@Query() query: any): Promise<any> {

    }

    @Get('types')
    async types(): Promise<any> {

        // 1. Обьявление переменой с типом является определеным калассом
        class Class {
            f1: number;
            f2: string;
        }
        let object1 : Class;

        // 2. Создание типа по подобию каласса для дальнейшего использования
        type ObjectType2 = Class;
        let object2 : ObjectType2;

        // 3. Обьявление переменой с типом существующего обьекта
        const realObject = {
            f1: 555,
            f2: 'some text'
        }
        let object3 : typeof realObject;

        // 4. Создание типа по подобию существующего обьекта для дальнейшего использования
        type ObjectType4 = typeof realObject;
        let object4 : ObjectType4;

        // 5. Обьявление переменой с прямым обьявлением типа
        let object5 : {f1: number; f2: string;};

        // 6. Создание типа для дальнейшего использования
        type ObjectType6 = {
            f1: number;
            f2: string;
        }
        let object6 : ObjectType6;

        // 7. Создание интерфейса для дальнейшего использования
        interface ObjectType7 {
            f1: number;
            f2: string;
        }
        let object7 : ObjectType7;
    }

    @Get('enum')
    async enum(): Promise<any> {

        // Автогенерируемый индекс
        enum Keys {
            A = 10,
            B,
            C = 20,
            D,
        }
        console.log('Keys',Keys);

        // Алиасы
        enum Langues {
            Apple = 20,
            Apfel = Apple,
            LaPomme = Apple
        }
        console.log('Langues',Langues);

        const DaysOfWeek1 = {
            Monday: 'MONDAY',
            Tuesday: 'TUESDAY'
        };
        console.log('DaysOfWeek1.Monday',DaysOfWeek1.Monday);

        enum DaysOfWeek2 {
            Monday = 'MONDAY',
            Tuesday = 'TUESDAY'
        }
        console.log('DaysOfWeek2.Monday',DaysOfWeek2.Monday);

    }

    @Get('simpleDefinition')
    async simpleDefinition(): Promise<void> {

        // interface
        interface Option1 {
            option1: boolean;
        };

        // type
        type Option2 = {
            option2: boolean;
        };

        // Объект может содержать только option1, только option2, или оба ключа
        type Options = Option1 | Option2 | (Option1 & Option2);

        // Примеры использования:
        const option1: Options = { option1: true }; // Допустимо
        const option2: Options = { option2: false }; // Допустимо
        const options: Options = { option1: true, option2: false }; // Тоже допустимо

        // Создать ключи option1 и option2 и сделать всех типа boolean
        type Keys = 'option1' | 'option2';
        type Flags = { [K in Keys]: boolean };
    }
}
