import express from "express";
import bodyParser from "body-parser"
import { AppDataSource } from "./db";
import appProductRouter from './routes/product.route'
import appStoreRouter from './routes/store.route'

async function serverStart() {
  try {
    await AppDataSource.initialize();
    console.log("Database conected");

    const app = express();
    app.use(express.json());
    app.use(bodyParser.json())

    app.use(appProductRouter)
    app.use(appStoreRouter);

    app.listen(8080, () => {
      console.log("App started in port 8080");
    });
  } catch (error) {
    console.error("Error " + error);
  }
}

serverStart();
