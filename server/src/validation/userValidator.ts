import type { Request, Response, NextFunction } from "express"
import { userSchema as schema } from "../models/user.schema"

import { ApiValidation } from "./ApiValidation"
import { z } from "zod"

export async function userValidator(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await schema.parseAsync(req.body)

    next()
  } catch (err) {
    if (err instanceof z.ZodError) {
      ApiValidation(err.issues, res)
      return
    }

    res.status(500).json({ ok: false, error: "Internal Server Error" })
  }
}
