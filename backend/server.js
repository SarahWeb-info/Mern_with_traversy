import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import {notFound , errorHandler} from './middleware/errorMiddleware.js';

//to make the use of .env file
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes);

// adding route_ callback function
app.get('/' , (req , res)=>res.send('Server is ready'));
app.use(notFound);
app.use(errorHandler);

app.listen(port , ()=>console.log(`Server started on the port ${port}`));

