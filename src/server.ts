import dotenv from "dotenv";
dotenv.config();
import { app } from "./app";
import { PORT } from "./misc/constants";


const port = PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});