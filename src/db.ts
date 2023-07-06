import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connect = function (): void {
    const host = <string>process.env.HOST;
    const pass = <string>process.env.PASSWORD;
    const user = <string>process.env.USER;
    const dbName = <string>process.env.DATABASE;
    try {
        mongoose.connect(host, {
            user,
            dbName,
            pass
        })
        console.log("*PB-011-DB Connection stablished*")
    } catch (error) {
        console.error(`*PB-011-DB Connection failed due to:\n \n ${error}*`);
    }
}

export const disconnect = () => {
    try {
        mongoose.disconnect();
    } catch (error) {
        console.error(`*PB-011-DB Disconnection failed due to:\n \n ${error}*`);
    }
}

