import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import { connectDB } from "./src/config/connect.js";
import { PORT } from "./src/config/config.js";
import { registerRoutes } from "./src/routes/index.js";

const app = fastify();

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await app.register(multipart, {
      limits: {
        fileSize: 10 * 1024 * 1024, 
      },
    });

    await app.register(cors, {
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    });

    registerRoutes(app);

    app.get("/", async () => {
      return {
        message: "Hello World",
      };
    });

    await app.listen({
      port: PORT || 5000,
      host: "0.0.0.0",
    });

    console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
