"use client"
import CameraUploadComponent from "@/components/common/camera-uploader";
import { useState } from "react";
import { toast } from "sonner";

interface FileObject {
  file: File;           // The actual File object from the browser
  id: string;           // Unique identifier we generate
  preview: string;      // Object URL for preview (created with URL.createObjectURL)
  name: string;         // File name (copied from file.name)
  size: number;         // File size in bytes (copied from file.size)
  type: string;         // MIME type (copied from file.type)
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleFilesChange = (files: FileObject[]) => {
    console.log('Files updated:', files);
  };

  const handleUpload = async (files: FileObject[]) => {
    setIsLoading(true);
    const formData = new FormData();
    files.forEach(fileObj => {
      formData.append('files', fileObj.file);
    });

    toast.promise(new Promise((resolve) => {
      setTimeout(() => {
        console.log('Files uploaded:', files);
        resolve(files);
      }, 2000);
    }), {
      loading: "Uploading files...",
      success: "Files uploaded successfully!",
      error: "Failed to upload files.",
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <CameraUploadComponent
        onFilesChange={handleFilesChange}
        onUpload={handleUpload}
        maxFileSize={5 * 1024 * 1024} // 5MB
        acceptedTypes={['image/*']} // Only images
        maxFiles={5}
      />
    </div>
  );
};

export default Home;