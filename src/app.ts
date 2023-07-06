import express, { Request, Response } from "express";
import morgan from "morgan";
import http from "http";
import { connect } from "./db";
import { roleRoutes } from "./routes";
import { notFoundMiddleware } from "./middlewares/error.middleware";

const app = express();

connect()
//middlewares
app.use(morgan("dev"));
app.use(express.json())

// public routes
app.use("/api/public", roleRoutes);
// private routes

//error handler route

app.use("*", notFoundMiddleware);

export {
    http,
    app
}