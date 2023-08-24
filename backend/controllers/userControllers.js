import asyncHandler from 'express-async-handler';
// desc:    Auth user/set token
// route  POST /api/users/auth
// Access : Public
const authUser =asyncHandler( async (req , res) =>{
    // res.status(401);
    // throw new Error('Something went wrong');
    res.status(200).json({message : 'Auth User'})
});
// desc:    Register a new user
// route  POST /api/users
// Access : Public
const registerUser =asyncHandler( async (req , res) =>{
    res.status(200).json({message : 'Register User'})
});
// desc:    Log Out
// route  POST /api/users
// Access : Public
const logoutUser =asyncHandler( async (req , res) =>{
    res.status(200).json({message : 'Logout User'})
});
// desc:    get user profile
// route  GET /api/users
// Access : Private
const getUserProfile =asyncHandler( async (req , res) =>{
    res.status(200).json({message : 'User Profile'})
});
// desc:    Update user profile
// route  PUT /api/users
// Access : Private
const updateUserProfile =asyncHandler( async (req , res) =>{
    res.status(200).json({message : 'Update User Profile'})
});
export {authUser , registerUser , logoutUser , getUserProfile , updateUserProfile};