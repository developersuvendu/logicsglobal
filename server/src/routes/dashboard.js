import {dashbaord} from '../controllers/dashboard/dashboard.js';
import { verifyToken } from '../middleware/auth.js';


export const dashboardRoutes = (fastify,options) => {
    fastify.get('/fetch-dashbaord', dashbaord);
}