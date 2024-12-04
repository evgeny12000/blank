import {Controller, Get} from '@nestjs/common';

@Controller('objects')
export class ObjectsController {

    @Get('test')
    async test(): Promise<any> {

        let level1 = {
                level2: {
                    level3_a: class Employee {
                        name: 'vasya'
                    },
                    level3_b: class Employee {
                        name: 'petya'
                    }
                }
        }
    }

    @Get('ifPropertyExist')
        ifPropertyExist(){
        let user:any = {name2:"Tom"};
        // let user:any = undefined;

        // Проверяет дополнительно если user вообще обьект
        console.log(user?.name!==undefined);

        // Define default value
        console.log(user?.name || 'default');
        user ||= {name:'default'}

        console.log(user.name!==undefined);
        console.log("name" in user);
        console.log(user.hasOwnProperty("name"));
        console.log(user.name);
        console.log(Object.keys(user).includes('name'));
        console.log(Reflect.has(user, 'name'));
    }

    async examples(){
        /**
         *  Dynamic class and method names
         */
        console.log("\nDynamic class and method names \n#################");
        let className = "MyDynamicClass";
        let methodName = "dynamicMethod";
        global[className] = class {
            constructor(message) {
                console.log(message);
            }
            [methodName](message) {
                console.log(message);
            }
        };
        new global[className]("Dynamic class name 1");
        let myObject = new global[className]("Dynamic class name 2");
        myObject[methodName]("Dynamic method name 1");
        myObject.dynamicMethod("Dynamic method name 2");

        /**
         *  Dynamic object names
         */
        console.log("\nDynamic object names \n#################");
        let key = "myDynamicKey";
        let value = "my value";
        let obj = {
            [key]: value
        };
        console.log('obj',obj);

        /**
         *  Dynamic call system functions
         */
        console.log("\nDynamic call system functions \n#################");
        let array = ["один", "два", "три"];
        let method = "push";
        let newItem = "четыре";
        array[method](newItem); // Динамически добавляем элемент в массив
        console.log(array); // Выведет: ['один', 'два', 'три', 'четыре']

        /**
         *  Dynamic build key => value
         */
        console.log("\nDynamic build key => value \n#################");
        let entries = [["ключ1", "значение1"], ["ключ2", "значение2"]];
        let dynamicObject = Object.fromEntries(entries);
        console.log(dynamicObject); // Выведет: { ключ1: 'значение1', ключ2: 'значение2' }
    }

    spreadOperator(){
        /**
         *  Array to params
         */
        console.log("\nArray to params \n#################");
        function display(a,b,c,d){
            console.log('a',a);
            console.log('b',b);
            console.log('c',c);
            console.log('d',d);
        }
        let myArray = ['one', 'two'];
        display('start', myArray[0], myArray[1], 'end');

        /**
         *  Merge objects
         */
        console.log("\nMerge objects \n#################");
        let myObj = { firstname: "Alice", lastname: "Belkin", age: 25 };
        let myObj1 = { lastname: "Jorkin", age: 30, country:"Israel", ...myObj };
        let myObj2 = { ...myObj, lastname: "Jorkin", age: 30, country:"Israel"};
        console.log('myObj1',myObj1);
        console.log('myObj2',myObj2);
    }

    @Get('copyObjects')
    copyObjects(){
        /**
         *  Copy object
         */
        console.log("\nCopy object \n#################");
        let sourceObj = { name: "Alice" };
        let obj1 = sourceObj; // link
        let obj2 = { ...sourceObj }; // spread operator
        let obj3 = Object.assign({},sourceObj); // assign

        obj1.name = "Dan";
        obj2.name = "Bob";
        obj3.name = "Max";

        console.log('sourceObj',sourceObj); // { name: "Dan" } overwrited !!!
        console.log('obj1',obj1); // { name: "Dan" }
        console.log('obj2',obj2); // { name: "Bob" }
        console.log('obj3',obj3); // { name: "Max" }
    }

}