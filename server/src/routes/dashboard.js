import {dashbaord} from '../controllers/dashboard/dashboard.js';

export const dashboardRoutes = (fastify,options) => {
    fastify.get('/fetch-dashbaord', dashbaord);
}