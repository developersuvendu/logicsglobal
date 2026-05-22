import {authRoutes} from "./auth.js";
import {dashboardRoutes} from "./dashboard.js";
import {inventoryRoutes} from "./inventory.js";
import { leaveRoutes } from "./leave.js";
import { documentRoutes } from "./document.js";
const prefix =  "/api";

export const registerRoutes = (fastify) => {
    fastify.register(authRoutes, { prefix: prefix });
    fastify.register(dashboardRoutes, { prefix: prefix });
    fastify.register(inventoryRoutes, { prefix: prefix });
    fastify.register(leaveRoutes, { prefix: prefix });
    fastify.register(documentRoutes, { prefix: prefix });
}

