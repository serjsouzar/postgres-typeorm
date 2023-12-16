import { Request, Response } from "express"
import { Product } from "./../entity/Product"

export const createProduct = async (req:Request, res:Response) => {
  try {
    const {name, description, value} = req.body
    const product = new Product()
    
    product.name = name
    product.description = description
    product.value = value

    await product.save()

  } catch (error) {
    console.error(error)
  }
}