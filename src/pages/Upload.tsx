
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FileUploadSection from "@/components/FileUploadSection";
import JobDescriptionSection from "@/components/JobDescriptionSection";
import AnalysisButton from "@/components/AnalysisButton";
import FeaturesPreview from "@/components/FeaturesPreview";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upload Your Resume
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get instant AI-powered ATS analysis and detailed feedback to improve your resume's performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FileUploadSection file={file} setFile={setFile} />
            <JobDescriptionSection 
              jobDescription={jobDescription} 
              setJobDescription={setJobDescription} 
            />
          </div>

          <AnalysisButton 
            file={file} 
            isAnalyzing={isAnalyzing} 
            setIsAnalyzing={setIsAnalyzing} 
          />

          <FeaturesPreview />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Upload;
