import Joi from "joi"

export const userSchema = Joi.object({
  userId: Joi.string().required(),
  name: Joi.string().required(),
})
