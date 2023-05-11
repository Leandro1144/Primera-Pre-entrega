import express from "express";

let usuarios = [];
export const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  return res.status(200).json({
    status: "success",
    msg: "listado de usuarios",
    data: usuarios,
  });  
});
// define the about route
userRouter.post('/np', (req, res) => {
  res.send('About birds');
});
