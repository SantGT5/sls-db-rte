// import Joi from "joi"
import { z } from "zod"

export const userSchema = z.object({
  userId: z
    .string({
      required_error: "userId is required",
    })
    .min(5, "min 5"),
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(5, "min 5"),
})
