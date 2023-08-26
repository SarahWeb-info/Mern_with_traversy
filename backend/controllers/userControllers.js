import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';
// desc:    Auth user/set token
// route  POST /api/users/auth
// Access : Public
const authUser =asyncHandler( async (req , res) =>{
    const { email , password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPasswords(password))){
        generateToken(res , user._id);
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email: user.email   
        });
        }else {
            console.log("Passwords do not match!");
            res.status(401);
            throw new Error('Invalid Email or Password');
        } 
    // res.status(401);
    // throw new Error('Something went wrong');
    // res.status(200).json({message : 'Auth User'});
});
// desc:    Register a new user
// route  POST /api/users
// Access : Public
const registerUser =asyncHandler( async (req , res) =>{
    const {name , email , password} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already Exist');
    }
    const user = await User.create({
        name , email , password
    });
    if(user){
        console.log("reg User:", user);
        generateToken(res , user._id);
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email: user.email   
        });
    }else {
        res.status(400);
        throw new Error('Invalid User data');
    }
    res.status(200).json({message : 'Register User'});

});
// desc:    Log Out
// route  POST /api/users
// Access : Public
const logoutUser =asyncHandler( async (req , res) =>{
    res.cookie('jwt', '' , {
        httpOnly : true,
        expires : new Date(0),
    });
    res.status(200).json({message : 'Logout User'})
});
// desc:    get user profile
// route  GET /api/users
// Access : Private
const getUserProfile =asyncHandler( async (req , res) =>{
    const user = {
        _id : req.user._id,
        name : req.user.name,
        email: req.user.email   
    }
    res.status(200).json(user);
});
// desc:    Update user profile
// route  PUT /api/users
// Access : Private
const updateUserProfile =asyncHandler( async (req , res) =>{
    const user = await User.findOne(req.user._id);
    if(user){
        user.name = req.user.name || user.name;
        user.email=req.user.email || user.email  ;
        if(req.body.password){
            user.password = req.body.password;
        }
        const updatedUser = await user.save();

        res.status(200).json({
            _id : updatedUser._id,
            name : updatedUser.name,
            email: updatedUser.email   
        });
        
    }else{
        res.status(404);
        throw new Error('No such User found');
    }

    res.status(200).json({message : 'Update User Profile'})
});
export {authUser , registerUser , logoutUser , getUserProfile , updateUserProfile};