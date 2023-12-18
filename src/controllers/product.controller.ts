import { Request, Response } from "express";
import { Product } from "./../entity/Product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, value } = req.body;
    const product = new Product();

    product.name = name;
    product.description = description;
    product.value = value;

    await product.save();

    return res.status(201).json(product);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error)
      return res.send(500).json({ message: error.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const products = await Product.findBy({
      id: parseInt(id),
    });
    return res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error)
      return res.send(500).json({ message: error.message });
  }
};
