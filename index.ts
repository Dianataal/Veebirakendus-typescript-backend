import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import stringController from "./controllers/strings";
import productController from "./controllers/products";
import productlistController from "./controllers/productlist"

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});