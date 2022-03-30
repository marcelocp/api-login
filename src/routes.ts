import { PrismaClient } from "@prisma/client";
import { Request, Response, Router as router } from "express";

const routes = router();

const conn = new PrismaClient();

routes.post("/login", (req: Request, res: Response) => {
  // const pass = req.body.password;
  console.log(req.body);
  // conn.user.create({
  //   data: {
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: hash.hashSync(pass, 10),
  //   },
  // });
});

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});


export { routes };

