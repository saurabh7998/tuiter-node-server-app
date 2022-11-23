import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = "mongodb+srv://saurabh7998:MyTuiterDb7998!@cluster0.wivmu9n.mongodb.net/?retryWrites=true&w=majority"
// const CONNECTION_STRING = 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json())

HelloController(app)
UsersController(app)
TuitsController(app)


app.listen(process.env.PORT || 4000)