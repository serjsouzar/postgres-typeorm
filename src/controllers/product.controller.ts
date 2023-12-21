import { Request, Response } from "express";
import { Product } from "./../entity/Product";
import { Store } from "./../entity/Store";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, value, brand, is_available } = req.body;
    const { storeId } = req.params;

    const product = new Product()

    const store = await Store.findOne({
      where: { id: parseInt(storeId) },
    });

    if (!store) {
      return res.status(404).json({ message: "Loja não encontrada" });
    }
    
      product.name = name,
      product.description = description,
      product.value = value,
      product.store = store,
      product.brand = brand
      product.is_available = is_available
    

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
    const product = await Product.findBy({
      id: parseInt(id),
    });
    return res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error)
      return res.send(500).json({ message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findBy({
    id: parseInt(id),
  });

  if (!product) return res.send(404).json({ message: "Produto não existe" });

  await Product.update({ id: parseInt(id) }, req.body);

  return res.status(200).json({ message: "Produto atualizado!" });
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findBy({
      id: parseInt(id),
    });

    if (!product) res.send(404).json({ message: "Produto não encontrado" });

    await Product.delete({ id: parseInt(id) });

    return res.status(200).json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    if (error instanceof Error)
      return res.send(500).json({ message: error.message });
  }
};
