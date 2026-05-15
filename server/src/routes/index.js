import {authRoutes} from "./auth.js";
import {dashboardRoutes} from "./dashboard.js";

const prefix =  "/api";

export const registerRoutes = (fastify) => {
    fastify.register(authRoutes, { prefix: prefix });
    fastify.register(dashboardRoutes, { prefix: prefix });
}

