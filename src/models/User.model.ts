import { Schema, model } from "mongoose";
import { User } from "../types";
import RoleModel from "./Role.model";

export const UserSchema = new Schema<User>(
    {
        email: {
            type: String,
            unique: true,
            minlength: 11
        },
        password: {
            type: String,
            unique: true
        },
        username: {
            type: String,
            unique: true
        },
        roles: [{
            ref: "Role",
            name: RoleModel.name,
            type: Schema.Types.ObjectId
        }]
    },
    { timestamps: true, versionKey: false }
)

const UserModel = model("User", UserSchema);

export default UserModel;