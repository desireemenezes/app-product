import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  next();
});

server.use(middlewares);
server.use(router);

server.listen(4000, () => {
  console.log("🚀 JSON Server rodando na porta 3001");
});
