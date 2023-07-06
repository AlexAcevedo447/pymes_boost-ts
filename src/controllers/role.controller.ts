import { Request, Response } from "express";
import { listRoles } from "../models/Role.actions";

async function getRoles(request: Request, response: Response): Promise<void> {
    const data = await listRoles();
    if (!data) {
        response.status(404).json(new Error("There are no roles to show"))
    } else {
        response.status(200).json(data);
    }
}

export {
    getRoles
}