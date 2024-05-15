import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './db/config.js'
import routes from './routes/index.js'
import fs from 'fs'
import morgan from "morgan";


dotenv.config()
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}))


const accessLogStream = fs.createWriteStream(
  process.cwd() +'\\logs\\logs.txt',
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));
app.use(morgan("dev"));

app.use("/mysite", routes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})





