import { Request, Response } from "express";
import { Store } from "./../entity/Store";

export const createStore = async (req: Request, res: Response) => {
  try {
    const { name, zip_code, register_number, address } = req.body;
    const store = new Store();

    store.name = name;
    store.zip_code = zip_code,
    store.register_number = register_number,
    store.address = address

    await store.save();
    return res.status(201).json(store);
    
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const updateStore = async (req: Request, res: Response) => {
  const { id } = req.params;

  const store = await Store.findBy({
    id: parseInt(id),
  });

  if (!store) return res.send(404).json({ message: "Loja não existe" });

  await Store.update({ id: parseInt(id) }, req.body);

  return res.status(200).json({ message: "Loja atualizada!" });
};