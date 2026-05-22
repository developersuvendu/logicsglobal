import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },

    documentName: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["Personal", "Employment", "Education", "Compliance"],
      required: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number, // store in KB or bytes
      required: true,
    },

    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },

    remarks: {
      type: String,
      default: "",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
  }
);

export const Document = mongoose.model("Documents", documentSchema);