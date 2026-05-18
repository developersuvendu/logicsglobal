import {authRoutes} from "./auth.js";
import {dashboardRoutes} from "./dashboard.js";
import {inventoryRoutes} from "./inventory.js";
const prefix =  "/api";

export const registerRoutes = (fastify) => {
    fastify.register(authRoutes, { prefix: prefix });
    fastify.register(dashboardRoutes, { prefix: prefix });
    fastify.register(inventoryRoutes, { prefix: prefix });
}

