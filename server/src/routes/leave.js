import {
    applyLeave,
    updateLeave,
    deleteLeave
} from "../controllers/leave/leave.js";

export const inventoryRoutes = (fastify,options) => {
    fastify.post('/inventory', getInventories);
    fastify.post('/add-inventory', addInventory);
    fastify.put("/inventory/:id", updateInventory);
    fastify.delete("/inventory/:id", deleteInventory);
}


// router.post("/apply", applyLeave);

// router.put("/update/:id", updateLeave);

// router.delete("/delete/:id", deleteLeave);