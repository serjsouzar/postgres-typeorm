import Joi from 'joi'
import { Request, Response, NextFunction } from 'express'

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(5).required(),
  value: Joi.number().required(),
  store: Joi.string().required()
})
.options({abortEarly: false})

export const productUpdateSchema = Joi.object({
  name: Joi.string().min(3),
  description: Joi.string().min(5),
  value: Joi.number()
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


