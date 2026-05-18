import { getInventories, addInventory, updateInventory, deleteInventory  } from '../controllers/inventory/inventory.js';

export const inventoryRoutes = (fastify,options) => {
    fastify.post('/inventory/get', getInventories);
    fastify.post('/inventory/add', addInventory);
    fastify.put("/inventory/update/:id", updateInventory);
    fastify.delete("/inventory/delete/:id", deleteInventory);
}