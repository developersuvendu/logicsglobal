import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },

    leaveType: {
        type: String,
        required: true,
    },

    startDate: {
        type: String,
        required: true,
    },

    endDate: {
        type: String,
        required: true,
    },

    days: {
        type: Number,
        required: true,
    },

    reason: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },

    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        default: null,
    },

}, {
    timestamps: true
});

const Leave = mongoose.model("Leave", leaveSchema);

export default Leave;