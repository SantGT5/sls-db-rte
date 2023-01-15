import type { Request, Response } from "express"
import AWS from "aws-sdk"

const USERS_TABLE: string = (process.env as NodeJS.ProcessEnv)
  .USERS_TABLE as string

const dynamoDbClient = new AWS.DynamoDB.DocumentClient()

async function HttpGetUserById(req: Request, res: Response): Promise<void> {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  }

  try {
    const { Item } = await dynamoDbClient.get(params).promise()
    if (Item) {
      const { userId, name } = Item
      res.json({ userId, name })
    } else {
      res
        .status(404)
        .json({ error: 'Could not find user with provided "userId"' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Could not retreive user" })
  }
}

async function HttpEditUser(req: Request, res: Response): Promise<void> {
  const { userId, name } = req.body

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name,
    },
  }

  try {
    await dynamoDbClient.put(params).promise()
    res.json({ userId, name })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Could not create user" })
  }
}

export { HttpGetUserById, HttpEditUser }
