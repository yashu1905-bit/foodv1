const mongoose=require('mongoose');


const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/foodv1');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error code    // in case of error connection band ho jaye
    }
}

module.exports=connectDB;