import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    documentType: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    
    leaveType: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    days: { type: Number, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users", default: null },
}, {
    timestamps: true
});

const Document = mongoose.model("Document", documentSchema);

export default Document;