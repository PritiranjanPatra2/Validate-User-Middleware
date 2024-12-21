import express from 'express';
import cors from 'cors';
import { errorHandler, validateRegistration } from './middleware.js';
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/register', validateRegistration, (req, res) => {
    const { firstName, lastName, email, phone } = req.body;
    res.status(200).json({
        success: true,
        message: 'User registered successfully!',
        data: {
            firstName,
            lastName,
            email,
            phone
        }
    });
});
app.use(errorHandler);
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})