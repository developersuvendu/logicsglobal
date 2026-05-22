// controllers/documentController.js
import streamifier from "streamifier";
import { Document } from "../../models/document.js";
import cloudinary from "../../config/cloudinary.js";

// ==========================
// Get All Documents
// ==========================
export const getDocuments = async (req, res) => {
  try {
    // 6a04cddbb2cb94852bbf11c3
    console.log("Get Documents Request Body :", req.body);
    const { userId } = req.body;
    console.log("User ID :", userId);
    if (!userId) {
      return res.send({
        status: 400,
        message: "User ID not found",
      });
    }

    const documents = await Document.find({ userId });
    return res.send({
      status: 200,
      message: "Documents Fetched Successfully!",
      data: documents,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Add Document
// ==========================
export const addDocument = async (req, reply) => {
  try {
    const data = await req.file();
    console.log("File Data :", data);
    if (!data) {
      return reply.status(400).send({
        success: false,
        message: "No file uploaded",
      });
    }

    // Allowed file types
    const allowedMimeTypes = ["application/pdf", "image/png", "image/jpeg"];

    // Validate MIME type
    if (!allowedMimeTypes.includes(data.mimetype)) {
      return reply.status(400).send({
        success: false,
        message: "Invalid file type",
      });
    }

    const buffer = await data.toBuffer();

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "documents",
            resource_type: "auto",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    });

    // console.log(result);

    // Save reference in MongoDB
    // const savedDocument = await Document.create({
    //   userId: "6a0abed98dec95533d9ceada",
    //   uploadedBy: "6a0abed98dec95533d9ceada",
    //   documentName: data.filename,
    //   category: "Personal",
    //   fileUrl: result.url,
    //   fileType: result.format,
    //   fileSize: result.bytes,
    // });
    const fields = data.fields;

    const formattedCategory =
      fields.category.value.charAt(0).toUpperCase() +
      fields.category.value.slice(1);

    const savedDocument = await Document.create({
      userId: fields.userId.value,

      uploadedBy: fields.userId.value,

      documentName: data.filename,

      category: formattedCategory,

      fileUrl: result.secure_url,

      fileType: result.format,

      fileSize: result.bytes,
    });
    return reply.status(201).send({
      success: true,
      document: savedDocument,
    });
  } catch (error) {
    console.log(error);

    return reply.status(500).send({
      success: false,
      message: "Upload failed",
    });
  }
};

// ==========================
// Update Document
// ==========================
export const updateDocument = async (req, reply) => {
  try {
    const { id } = req.params;

    const updatedDocument = await Document.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedDocument) {
      return reply.status(404).send({
        success: false,
        message: "Document not found",
      });
    }

    return reply.status(200).send({
      success: true,
      message: "Document updated successfully",
      data: updatedDocument,
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Document
// ==========================
export const deleteDocument = async (req, reply) => {
  try {
    const { id } = req.params;

    const deletedDocument = await Document.findByIdAndDelete(id);

    if (!deletedDocument) {
      return reply.status(404).send({
        success: false,
        message: "Document not found",
      });
    }

    return reply.status(200).send({
      success: true,
      message: "Document deleted successfully",
    });
  } catch (error) {
    return reply.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
