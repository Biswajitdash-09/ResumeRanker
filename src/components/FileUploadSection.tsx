
import { useCallback } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload as UploadIcon, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUploadSectionProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

const FileUploadSection = ({ file, setFile }: FileUploadSectionProps) => {
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      toast({
        title: "File uploaded successfully!",
        description: `${uploadedFile.name} is ready for analysis.`,
      });
    }
  }, [setFile, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc']
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="bg-white/80 backdrop-blur-lg border-white/20">
        <CardContent className="p-6">
          <Label className="text-lg font-semibold mb-4 block">
            1. Upload Your Resume
          </Label>
          
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 hover:scale-105 ${
              isDragActive
                ? "border-blue-500 bg-blue-50"
                : file
                ? "border-green-500 bg-green-50"
                : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
            }`}
          >
            <input {...getInputProps()} />
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isDragActive ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {file ? (
                <FileText className="h-12 w-12 text-green-500 mx-auto mb-4" />
              ) : (
                <UploadIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              )}
            </motion.div>
            
            {file ? (
              <div>
                <p className="text-lg font-medium text-green-700 mb-2">
                  ✓ {file.name}
                </p>
                <p className="text-sm text-gray-500">
                  File ready for analysis
                </p>
              </div>
            ) : isDragActive ? (
              <p className="text-lg text-blue-600">
                Drop your resume here...
              </p>
            ) : (
              <div>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Drag & drop your resume here
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  or click to browse files
                </p>
                <p className="text-xs text-gray-400">
                  Supports PDF, DOC, DOCX (max 10MB)
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FileUploadSection;
