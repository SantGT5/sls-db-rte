import type { Request, Response, NextFunction } from "express"
import { userSchema as schema } from "../models/user.schema"

import { ApiValidation } from "./ApiValidation"

export async function userValidator(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await schema.validateAsync(req.body, { abortEarly: false })

    next()
  } catch (err) {
    if (err.isJoi) {
      ApiValidation(err.details, res)
      return
    }

    res.status(500).json({ ok: false, error: "Internal Server Error" })
  }
}
