import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes);
// adding route_ callback function
app.get('/' , (req , res)=>res.send('Server is ready'));
app.listen(port , ()=>console.log(`Server started on the port ${port}`));
