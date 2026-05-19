import { getLeaves, applyLeave, updateLeave, deleteLeave } from "../controllers/leave/leave.js";

export const leaveRoutes = (fastify,options) => {
    fastify.post('/leave/get', getLeaves);
    fastify.post('/leave/apply', applyLeave);
    fastify.put("/leave/update/:id", updateLeave);
    fastify.delete("/leave/delete/:id", deleteLeave);
}

