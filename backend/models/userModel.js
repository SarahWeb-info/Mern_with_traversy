import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name :{
        type: String,
        required:[true,'Please enter your Name']
    },
    email:{
        type:String ,
        required: [ true ,'please Enter Email'],
        unique: 1
    },
    password:{
        type:String,
        required:true
    },     
},{
    timestamps:true
}
);

userSchema.pre('save' , async function(next){
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hashSync(this.password , salt);
});
const User = mongoose.model('User',userSchema);
export default User;