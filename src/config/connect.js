import mongoose from 'mongoose';
export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected ✅');
        const admin = mongoose.connection.db.admin();
                
                const result = await admin.listDatabases();
                console.log("Admin", result);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};