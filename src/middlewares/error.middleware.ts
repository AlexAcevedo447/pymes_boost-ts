import { NextFunction, Request, Response } from "express";
export const notFoundMiddleware = (req: Request, resp: Response, next: NextFunction) => {
    resp.status(404).json({ type: "error", reason: "not-found", status: 404 });
}

export const notAllowedMiddleware = (req: Request, resp: Response, next: NextFunction) => {

}