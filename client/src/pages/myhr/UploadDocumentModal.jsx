import React, { useState } from "react";

import { UploadCloud, FileText, X } from "lucide-react";

import Modal from "../../components/common/Modal";
import Dropdown from "../../components/common/Dropdown";
import Button from "../../components/common/Button";

import "./styles/Documents.css";
import { uploadDocumentApi } from "../../api/documentApi";

import { getUser } from "../../utils/storage";

const documentTypeOptions = [
  {
    label: "Personal",
    value: "personal",
  },

  {
    label: "Employment",
    value: "employment",
  },

  {
    label: "Education",
    value: "education",
  },

  {
    label: "Compliance",
    value: "compliance",
  },
];

const UploadDocumentModal = ({ isOpen, onClose, refreshDocuments }) => {
  const [documentType, setDocumentType] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };
  const handleUploadDocument = async () => {
    try {
      if (!documentType || !selectedFile) {
        alert("Please select document type and file");

        return;
      }
      console.time("Document Upload Time");

      setLoading(true);

      const user = getUser();

      const formData = new FormData();

      formData.append("userId", user._id);

      formData.append("category", documentType);

      formData.append("file", selectedFile);

      await uploadDocumentApi(formData);

      await refreshDocuments();

      setDocumentType("");

      setSelectedFile(null);
      console.timeEnd("Document Upload Time");
      onClose();
    } catch (error) {
      console.log("Upload Document Error :", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Upload Document"
      customClass="upload-document-modal"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button
            variant="primary"
            onClick={handleUploadDocument}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Document"}
          </Button>
        </>
      }
    >
      {/* TOP TEXT */}

      <div className="upload-modal-top">
        <p>Upload employee or HR related documents securely.</p>
      </div>

      {/* DOCUMENT TYPE */}

      <div className="upload-field">
        <label className="upload-label">Document Type</label>

        <Dropdown
          placeholder="Select document type"
          value={documentType}
          onChange={setDocumentType}
          options={documentTypeOptions}
        />
      </div>

      {/* FILE UPLOAD */}

      <div className="upload-field">
        <label className="upload-label">Upload File</label>

        <label className="document-upload-box">
          <input type="file" hidden onChange={handleFileChange} />

          {!selectedFile ? (
            <div className="upload-placeholder">
              <div className="upload-icon-wrapper">
                <UploadCloud size={28} />
              </div>

              <h4>Drag & drop file here</h4>

              <p>or click to browse from your device</p>

              <span className="upload-supported-text">
                Supported: PDF, JPG, PNG
              </span>
            </div>
          ) : (
            <div className="uploaded-file-card">
              <div className="uploaded-file-left">
                <div className="uploaded-file-icon">
                  <FileText size={20} />
                </div>

                <div>
                  <h5>{selectedFile.name}</h5>

                  <p>{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>

              <button
                className="remove-file-btn"
                onClick={(e) => {
                  e.preventDefault();
                  removeFile();
                }}
              >
                <X size={16} />
              </button>
            </div>
          )}
        </label>
      </div>
    </Modal>
  );
};

export default UploadDocumentModal;
