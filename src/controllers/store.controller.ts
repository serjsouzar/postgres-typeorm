import { Request, Response } from "express";
import { Store } from "./../entity/Store";

export const createStore = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const store = new Store();

    store.name = name;

    await store.save();
    return res.status(201).json(store);
    
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};