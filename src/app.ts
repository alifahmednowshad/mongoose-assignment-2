import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRoutes } from "./modules/order/order.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome Mongooes World!");
});

export default app;
