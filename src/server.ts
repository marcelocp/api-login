import dotenv from "dotenv";
import app from "express";
import { routes } from "./routes";

dotenv.config();

const server = app();

const port = process.env.SERVER_PORT || 3001;
server.use(routes);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
