import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// @ts-ignore
import {DialectMySQL, IConfig, ModelBuilder} from "sequelize-typescript-generator";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('generateModels')
   generateModels(): any {

    (async () => {
      const config: IConfig = {
        connection: {
          dialect: 'mysql',
          host:process.env.MYSQL_HOST,
          port:parseInt(process.env.MYSQL_PORT),
          database: process.env.MYSQL_DATABASE,
          username: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD
        },
        metadata: {
          indices: true,
          case: (value, target) => {
            // Model transformer
            if (target === 'model') {
              return value.charAt(0).toUpperCase() + value.slice(1);
            }
            return value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
          }
        },
        output: {
          clean: false,
          outDir: './db/models'
        },
        strict: true,
      };

      const dialect = new DialectMySQL();
      const builder = new ModelBuilder(config, dialect);

      try {
        await builder.build();
      } catch (err) {
        console.error(err);
        // process.exit(1);
      }
    })();

    function toCamelCase(str) {
      return str
          .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return ""; // или " " если вам нужен оригинальный пробел
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
          });
    }
  }
}
