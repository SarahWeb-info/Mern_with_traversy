import express from 'express';
import dotenv from 'dotenv';

const port = 5000;
const app = express();

// adding route_ callback function
app.get('/' , (res , req)=>res.send('Server is ready'));
app.listen(port , ()=>console.log(`Server started on the port ${port}`));

//adding a middleware function to handle request and response
