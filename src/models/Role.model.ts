import { Schema, model } from "mongoose";
import { Role } from "../types";
import { roles } from "../enums";

export const RoleSchema = new Schema<Role>(
    {
        name: {
            type: String,
            unique: true,
            enum: roles
        }
    },
    { timestamps: true, versionKey: false }
)

const RoleModel = model("Role", RoleSchema);

export default RoleModel;