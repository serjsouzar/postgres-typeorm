import { Request, Response } from "express";
import { Product } from "./../entity/Product";
import { Store } from "./../entity/Store";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, value, store } = req.body;
    const product = new Product();
    const storeInstance = new Store();

    product.name = name;
    product.description = description;
    product.value = value;
    product.store = store

    await product.save();
    storeInstance.product.push(product)
    await storeInstance.save();

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

    if(!product) return res.send(404).json({message: "Produto não existe"})

    await Product.update({id: parseInt(id)}, req.body)    

    return res.status(200).json({message: "Produto atualizado!"});
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findBy({
      id: parseInt(id),
    });

    if(!product) res.send(404).json({message: "Produto não encontrado"})

    await Product.delete({id: parseInt(id)})

    return res.status(200).json({message: "Produto deletado com sucesso!"});
  } catch (error) {
    if (error instanceof Error)
      return res.send(500).json({ message: error.message });
  }
};