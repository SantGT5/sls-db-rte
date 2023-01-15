import type { Response } from "express"

export function ApiValidation(details, res: Response): void {
  const errorMsg: object = { ok: false }

  details.forEach((item) => {
    const errorValidation = {
      [item.path[0]]: item.message,
    }

    Object.assign(errorMsg, errorValidation)
  })

  res.status(422).json(errorMsg)
}
