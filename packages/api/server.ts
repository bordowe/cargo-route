import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

// Configs
const app: Express = express()
const port = process.env.PORT || 3000

// Creating main route section
app.get("/", (req: Request, res: Response) => {
    res.send("Express + Typescript Server")
})

// Server listening section
app.listen(port, () => {
    console.log(`> running on ${port} port`)
})