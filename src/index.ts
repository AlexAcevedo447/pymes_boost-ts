import { app, http } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env["PORT"] || 3200;

app.listen(port, function (): void {
    console.log('App is listening on port ' + port + '. Click on http://localhost:' + port + '/api to watch it run \n');
})