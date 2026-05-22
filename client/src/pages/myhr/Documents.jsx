import "./styles/Documents.css";

import {
  FileText,
  Download,
  Eye,
  Upload,
  Search,
  FileBadge,
  IdCard,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Plus,
  CircleCheck,
} from "lucide-react";
import { useState } from "react";
import { CustomButton } from "../../components/common/CustomButton";
import UploadDocumentModal from "./UploadDocumentModal";
import { useEffect } from "react";

import { getDocumentsApi } from "../../api/documentApi";

import { getUser } from "../../utils/storage";

const categories = [
  { id: "personal", label: "Personal", icon: IdCard, count: 4 },
  { id: "employment", label: "Employment", icon: Briefcase, count: 5 },
  { id: "education", label: "Education", icon: GraduationCap, count: 3 },
  { id: "compliance", label: "Compliance", icon: ShieldCheck, count: 2 },
];

const Documents = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);
  const [documents, setDocuments] = useState([]);

  const filtered = documents.filter(
    (d) =>
      (!active || d.category.toLowerCase() === active) &&
      d.name.toLowerCase().includes(query.toLowerCase()),
  );
  const fetchDocuments = async () => {
    try {
      const user = getUser();

      const response = await getDocumentsApi({
        userId: user._id,
      });

      const formattedDocs = response.data.map((doc) => ({
        name: doc.documentName,

        category: doc.category,

        size: `${(doc.fileSize / 1024 / 1024).toFixed(2)} MB`,

        date: new Date(doc.createdAt).toLocaleDateString(),

        status: "Verified",

        fileUrl: doc.fileUrl,
      }));

      setDocuments(formattedDocs);
    } catch (error) {
      console.log("Fetch Documents Error :", error);
    }
  };
  useEffect(() => {
    const loadDocuments = async () => {
      await fetchDocuments();
    };

    loadDocuments();
  }, []);
  return (
    <div className="space-y-6">
      <div className="documents-card-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActive(isActive ? null : c.id)}
              className={`documents-card text-left p-5 rounded-xl border transition-all ${
                isActive
                  ? "active"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div
                className={`document-card-icon-div h-10 w-10 rounded-xl flex items-center justify-center mb-3 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <c.icon className="h-5 w-5" />
              </div>
              <div className="document-card-heading font-semibold">
                {c.label}
              </div>
              <div className="text-sm text-muted-foreground ">
                {c.count} documents
              </div>
            </button>
          );
        })}
      </div>

      <div className="document-card-wrapper shadow-sm">
        <div className="flex items-center justify-between flex-wrap document-grid-toolbar">
          <div className="document-toolbar-wrapper">
            <Search className="text-muted-foreground document-search-icon" />
            <input
              placeholder="Search documents..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="document-search-box"
            />
          </div>
          <CustomButton onClick={() => setIsUploadOpen(true)}>
            <Upload className="upload-btn-icon" /> Upload Document
          </CustomButton>
        </div>

        <div className="divide-y divide-border">
          {filtered.map((d) => (
            <div
              key={d.name}
              className="flex items-center transition document-grid-row"
            >
              <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0 document-grid-icon-wrapper">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="document-card-heading text-ellipsis">
                  {d.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {d.category} · {d.size} · Uploaded {d.date}
                </div>
              </div>
              <div
                className={`badge ${
                  d.status === "Verified"
                    ? "bg-success-soft text-success"
                    : "bg-warning-soft text-warning"
                }`}
              >
                {d.status === "Verified" && <CircleCheck className="icon" />}
                {d.status}
              </div>
              <button
                className="grid-button"
                onClick={() => window.open(d.fileUrl, "_blank")}
              >
                <Eye className="grid-view-icon" />
              </button>
              <button
                className="grid-button"
                onClick={() => {
                  const link = document.createElement("a");

                  link.href = d.fileUrl;

                  link.download = d.name;

                  link.click();
                }}
              >
                <Download className="grid-download-icon" />
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="p-10 text-center text-muted-foreground">
              No documents found.
            </div>
          )}
        </div>
      </div>
      <UploadDocumentModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        refreshDocuments={fetchDocuments}
      />
    </div>
  );
};

export default Documents;
