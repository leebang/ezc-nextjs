import next from "next";
import express from "express";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use("/old", express.static(__dirname + "/../html"));
  server.use((req, res) => handle(req, res));
  server.listen(port);
});
