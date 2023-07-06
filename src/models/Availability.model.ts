import { Schema, model } from "mongoose";
import { Shelf_Availability } from "../types";

export const AvailabilitySchema = new Schema<Shelf_Availability>({

}, {
    versionKey: false,
    timestamps: true
})

const AvailabilityModel = model("Availability", AvailabilitySchema);

export default AvailabilityModel;