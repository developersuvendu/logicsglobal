import {authRoutes} from "./auth.js";

const prefix =  "/api";

export const registerRoutes = (fastify) => {
    fastify.register(authRoutes, { prefix: prefix });
}

