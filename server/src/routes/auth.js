import {userLogin, userSignup,refreshToken, fetchUser} from '../controllers/auth/auth.js';
import { verifyToken } from '../middleware/auth.js';


export const authRoutes = (fastify,options) => {
    fastify.post('/login', userLogin);
    fastify.post('/signup', userSignup);
    fastify.post('/refresh-token', refreshToken);
    fastify.get('/fetch-user', { preHandler: [verifyToken] }, fetchUser);
    fastify.get('/test', async () => {
   return { message: "Login API working" };
});
}

