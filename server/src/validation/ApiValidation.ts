import type { Response } from "express"

export function ApiValidation(errs, res: Response): void {
  const errorMsg: object = { ok: false }

  errs.forEach((err) => {
    const errorValidation = {
      [err.path[0]]: err.message,
    }

    Object.assign(errorMsg, errorValidation)
  })

  res.status(422).json(errorMsg)
}
