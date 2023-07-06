import { MongoQueryStatus, Role } from "../types";
import RoleModel from "./Role.model";

export async function listRoles(): Promise<MongoQueryStatus<Role> | undefined> {
    let response: MongoQueryStatus<Role>;
    try {
        const data = await RoleModel.find()
        response = {
            success: true,
            reason: "",
            data
        }
        return response;
    } catch (err) {
        console.log(err);
    }
}