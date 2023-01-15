import { Request, Response } from "express"

function RouterNotFound(_: Request, res: Response) {
  return res.status(404).json({
    ok: false,
    error: "Not Found",
  })
}

export { RouterNotFound }
