import Joi from 'joi'
import { Request, Response, NextFunction } from 'express'

export const storeSchema = Joi.object({
  name: Joi.string().min(3).required(),
  zip_code: Joi.number().min(8).required(),
  register_number: Joi.number().min(11).required(), 
  address: Joi.string().min(5).required(),  
})
.options({abortEarly: false})

export const storeUpdateSchema = Joi.object({
  name: Joi.string().min(3),
  zip_code: Joi.number().min(8),  
  address: Joi.string().min(5), 
})
.options({abortEarly: false})

export const validationMiddleware = (schema:Joi.ObjectSchema) => {
  return (req:Request, res:Response, next:NextFunction) => {
    const {error} = schema.validate(req.body);

    if(error) {
      console.log(error.message)
      res.status(400).json({ errors: error.details })
    }
    else {
      next();
    }
  }
}

