"use client"
import CameraUploadComponent from "@/components/common/camera-uploader";

interface FileObject {
  file: File;           // The actual File object from the browser
  id: string;           // Unique identifier we generate
  preview: string;      // Object URL for preview (created with URL.createObjectURL)
  name: string;         // File name (copied from file.name)
  size: number;         // File size in bytes (copied from file.size)
  type: string;         // MIME type (copied from file.type)
}

const Home = () => {
  const handleFilesChange = (files: FileObject[]) => {
    console.log('Files updated:', files);
  };

  const handleUpload = async (files: FileObject[]) => {
    // Your upload logic here
    const formData = new FormData();
    files.forEach(fileObj => {
      formData.append('files', fileObj.file);
    });


  };

  return (
    <CameraUploadComponent
      onFilesChange={handleFilesChange}
      onUpload={handleUpload}
      maxFileSize={5 * 1024 * 1024} // 5MB
      acceptedTypes={['image/*']} // Only images
      maxFiles={5}
    />
  );
};

export default Home;