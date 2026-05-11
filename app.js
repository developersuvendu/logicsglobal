import 'dotenv/config';
import { connectDB } from './src/config/connect.js';
import fastify from 'fastify';
import { PORT } from './src/config/config.js';
const startServer = async () => {
    try {   
        await connectDB(process.env.MONGO_URI);
        

        const app= fastify();
        app.get('/', async (request, reply) => {
            return { message: 'Hello, World!' };
        });
        app.get('/app', async (request, reply) => {
            const users = await Users.find();
            return { message: 'Hello, App', users };
        });
        await app.listen({ port: PORT },(err, address) => {
            if (err) {
                console.error('Error starting server:', err);
                process.exit(1);
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