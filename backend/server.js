import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import {notFound , errorHandler} from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
//to make the use of .env file
dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/api/users', userRoutes);

// adding route_ callback function
app.get('/' , (req , res)=>res.send('Server is ready'));
app.use(notFound);
app.use(errorHandler);

app.listen(port , ()=>console.log(`Server started on the port ${port}`));

