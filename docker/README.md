
###### First installation
`cd /docker`
`docker-compose up -d --build`

## Backend
`docker-compose exec api-cont bash`
`npm install` # First installation
`npm run start:dev`
## http://localhost:3000/api/examples/test

## Frontend
`docker-compose exec frontend-cont bash`
`npm install` # First installation
`npm run dev`
## http://localhost:3030/

### First mysql data creation
`npx sequelize-cli db:seed --seed init_products_users.js`

###### Dev run  
`npm run start:dev`

###### Dev run with debugger  
`npm run dev`

###### Mysql Example
http://localhost:3000/api/product/simpleQuery

###### Mongo ang JWT Example
api/client/auth-requests.http

###### Redis example
http://localhost:3000/api/product/redis

###### File generation
`nest g module product/product`  
`nest g class product/product.model`  
`nest g controller product/product`  
`nest g service product/product`

###### Run from console
`node ./dist/console.js --service=SeoDataMngService --method=test --param1=111 --param2=222`

##### Migrations
`npx sequelize-cli init`

`npx sequelize-cli migration:generate --name create-tables`

`npx sequelize-cli db:migrate`

`npx sequelize-cli seed:generate --name demo-user`

`npx sequelize-cli db:seed --seed test2.js`
