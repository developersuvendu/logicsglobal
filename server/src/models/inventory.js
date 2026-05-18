import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    assetName: { type: String, required: true },
    category: { type: String, required: true },
    assignedDate: { type: Date, default: Date.now },
    status: { type: String,
        enum: ["assigned", "available", "maintenance", "returned"],
        default: "assigned",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Inventory = mongoose.model("Inventory", inventorySchema );

export default Inventory;