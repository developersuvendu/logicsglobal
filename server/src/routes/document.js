import { getDocuments, addDocument, updateDocument, deleteDocument } from "../controllers/document/document.js";

export const documentRoutes = (fastify,options) => {
    fastify.post('/document/get', getDocuments);
    fastify.post('/document/add', addDocument);
    fastify.put("/document/update/:id", updateDocument);
    fastify.delete("/document/delete/:id", deleteDocument);
}

