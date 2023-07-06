import { Router } from "express";
import { getRoles } from "../controllers";
export const roleRoutes = Router();


roleRoutes.get("/roles", getRoles);

