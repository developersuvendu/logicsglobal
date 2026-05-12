import 'dotenv/config';
import { connectDB } from './src/config/connect.js';
import fastify from 'fastify';
import { PORT } from './src/config/config.js';
import mongoose from 'mongoose';
import { registerRoutes } from './src/routes/index.js';

    
const startServer = async () => {
    try {   
        await connectDB(process.env.MONGO_URI);
        const app= fastify();
        registerRoutes(app);

        app.get('/', async (request, reply) => {
            return { message: 'Hello, World!' };
        });

        await app.listen({ port: PORT, host: '0.0.0.0' },(err, address) => {
            if (err) {
                console.error('Error Occur on starting of server', err);
            }
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
}

startServer();