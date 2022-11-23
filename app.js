import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";


mongoose.connect('mongodb://localhost:27017/tuiter');

const app = express()
app.use(cors())
app.use(express.json())

HelloController(app)
UsersController(app)
TuitsController(app)


app.listen(process.env.PORT || 4000)