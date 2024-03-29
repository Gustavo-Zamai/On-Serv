import express from "express";
import db from "./database/connection";

const routes = express.Router();

routes.post("/users", async (req, resp) => {
  const { name, avatar, whatsapp, email, password, bio, typeService, cost, schedule } = req.body;
  
  await db('users').insert({
    name, avatar, whatsapp, email, password, bio,
  })

  return resp.send();
});

/*routes.post("/services", async (req, resp) => {
  const { typeService, cost, schedule } = req.body;
  
 await db('services').insert({
    
 })

  return resp.send();
});*/

export default routes;
