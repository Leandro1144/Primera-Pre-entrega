import express from "express";
import { userRouter } from "./routes/users.routers.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

app.get('*', (req, res) => {
    return res.status(404).json({
        status: "erorr",
        msg:"No esta la ruta!",
        data:{},
  });
});