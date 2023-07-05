import { CldUploadWidget } from "next-cloudinary";
import { useCallback } from "react";
import { AiOutlineFilePdf, AiOutlineFileWord, AiOutlineFilePpt } from 'react-icons/ai';

const uploadPreset = "cvug9o2y";

const FileUpload = ({ onChange, value }) => {
  const handleUpload = useCallback((result) => {
    onChange(result.info.secure_url);
  }, [onChange]);

  const renderFilePreview = () => {
    if (value) {
      if (value.endsWith(".pdf")) {
        return <AiOutlineFilePdf size={50} />;
      } else if (value.endsWith(".doc") || value.endsWith(".docx")) {
        return <AiOutlineFileWord size={50} />;
      } else if (value.endsWith(".ppt") || value.endsWith(".pptx")) {
        return <AiOutlineFilePpt size={50} />;
      }
    }

    return null;
  };

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
        resourceType: "auto",
        allowedFormats: ["pdf", "doc", "docx", "ppt", "pptx"]
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed 
            border-2 
            p-20 
            border-neutral-300
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-neutral-600
          "
        >
          {renderFilePreview()}
          <div className="font-semibold text-lg">
            {value ? "File uploaded" : "Click to upload"}
          </div>
        </div>
      )}
    </CldUploadWidget>
  );
};

export default FileUpload;
