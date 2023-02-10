import mongoose from 'mongoose';

export const connectDB = async() =>{
    try {
        const conncection = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB Connected');
    } catch (error) {
       console.log(error);
       process.exit(1) 
    }
}