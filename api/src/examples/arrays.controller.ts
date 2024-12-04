import { Controller, Get, Request } from '@nestjs/common';

interface Item {
  name: string;
  age: number;
  power?: string;
  newKey?: number;
}

@Controller('arrays')
export class ArraysController {

  @Get('exam1')
  async exam1(): Promise<any> {

    type Item = {id:number,name:string};
    const items:Item[] = [
      { id: 4, name: 'anana' },
      { id: 7, name: 'apple' },
      { id: 8, name: 'wow' },
      { id: 2, name: 'borange' }
    ];

    let newItems = items.filter((item:Item) => !(item.id % 2));

    newItems.sort((a, b) => {
      return a.name >= b.name ? 1 : -1
    });


    return newItems;
  }

  @Get('test')
  async test(): Promise<string> {

    type Keys = 'option1' & 'option2';
    type Flags = { [K in Keys]: boolean };

    let flg : Flags = {option1:false};

    let items: Item[] = [
      { name: 'jora', age: 30 },
    ];

    return 'mumu';
  }

  @Get('addToArray')
  async addToArray(): Promise<void> {
    let items: Item[] = [
      { name: 'jora', age: 30 },
    ];

    // Добавление в конец массива
    items = [...items, { name: 'igor', age: 28 }];
    // или
    items.push({ name: 'igor', age: 28 });
    // [ { name: 'jora', age: 30 }, { name: 'igor', age: 28 } ]

    // Добавление в начало массива
    items = [{ name: 'sveta', age: 35 }, ...items];
    // или
    items.unshift({ name: 'natalia', age: 29 });

    // concat - Добавление нескольких объектов
    items = [...items, { name: 'olga', age: 23 }, { name: 'sergey', age: 33 }];
    // или
    items = items.concat([{ name: 'olga', age: 23 }, { name: 'sergey', age: 33 }]);

    console.log(items);
  }

  @Get('manipulations')
  async manipulations(): Promise<void> {
    let items: Item[] = [
      { name: 'jora', age: 30 },{name: 'petya', age: 40}
    ];

    // *** Map - Строит новый массив
    let newItems = items.map((item: Item) => {
      item.power = 'super';
      return item;
    });
    console.log('map', newItems);

    // *** Filter - удобно для фильтрации
    let agedOver35 = items.filter((item: Item) => item.age > 35);
    console.log('filter', agedOver35); // [{ name: 'petya', age: 40 }]

    // *** reduce - суммирует значения
    let totalAge = items.reduce((acc: number, item: Item) => acc + item.age, 0);
    console.log('reduce', totalAge);  // 70

    // *** find -Поиск первого элемента, соответствующего условию.
    let findPetya = items.find((item: Item) => item.name === 'petya');
    console.log('find', findPetya);  // { name: 'petya', age: 40 }

    // *** slice - Получить какуюто част- массива
    let firstItem = items.slice(0, 1);
    console.log('slice', firstItem);  // [{ name: 'jora', age: 30 }]
  }

  @Get('loops')
  async loops(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      console.log(i); // Выводит числа от 0 до 4
    }

    let items: Item[] = [
      { name: 'jora', age: 30 },
    ];

    /*
        For-Of Loop, Перебор колекции
        Не имеет доступ к ключам колекции, нельзя переписать источник
     */
    for (let item of items) {
      console.log(item.name);
    }

    /*
        For-In Loop , доступ по ключу
        Для перебора самого обьекта ,
     */
    for (let key in items) {
      items[key].newKey = items[key].age;
    }
    console.log('For-In Loop', items);

    /*
        forEach , класический foreach
     */
    items.forEach((value: Item, key: number) => {
      console.log('key', key);
      console.log('value', value);
      items[key].age = items[key].age * 10;
    });
    console.log(items)
  }
}