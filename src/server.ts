import express from "express";
import { AppDataSource } from "./db";

async function serverStart() {
  try {
    await AppDataSource.initialize();
    console.log("Database conected");

    const app = express();
    app.use(express.json());

    app.listen(8080, () => {
      console.log("App started in port 8080");
    });
  } catch (error) {
    console.error("Error " + error);
  }
}

serverStart();
