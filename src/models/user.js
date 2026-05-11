import mongoose from 'mongoose';


//Base Schema for User

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    role:{type: String, enum: ['admin', 'user', 'manager', 'systemadmin'], default: 'user'},
    createdAt:{type: Date, default: Date.now},
    isActive:{type: Boolean, default: true},
});

const Users = mongoose.model('Users', userSchema);

export default Users;