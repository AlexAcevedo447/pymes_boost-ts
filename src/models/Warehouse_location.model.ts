import { Schema, model } from "mongoose";
import { Location } from "../types";

export const LocationSchema = new Schema<Location>({
    name: {
        type: String,
        maxlength: 20,
        required: true
    },
    category: {
        type: String,
        maxlength: 20,
        required: true
    },
    row: {
        type: Number,
        required: true
    },
    column: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

const LocationModel = model("Location", LocationSchema);

export default LocationModel;