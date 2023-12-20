import { DataSource } from "typeorm";
import { Product } from "./entity/Product";
import { Store } from "./entity/Store";
require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: 'typeormdb',    
  entities: [Product, Store],
  logging: true,
  synchronize: true  
})