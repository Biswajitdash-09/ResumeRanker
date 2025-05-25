
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload as UploadIcon, FileText, Zap, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
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
  }, [toast]);

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

  const handleAnalyze = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a resume file to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      // In a real app, this would navigate to results with actual data
      window.location.href = "/result";
    }, 3000);

    toast({
      title: "Analysis started!",
      description: "Analyzing your resume with AI...",
    });
  };

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
            {/* File Upload Section */}
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
                  
                  <motion.div
                    {...getRootProps()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
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
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Job Description Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/80 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <Label className="text-lg font-semibold mb-4 block">
                    2. Job Description (Optional)
                  </Label>
                  <Textarea
                    placeholder="Paste the job description here to get more accurate scoring based on specific role requirements..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[200px] resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Adding a job description helps us provide more targeted feedback and keyword optimization.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Analysis Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
          >
            <Button
              onClick={handleAnalyze}
              disabled={!file || isAnalyzing}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg"
            >
              {isAnalyzing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <Zap className="h-5 w-5" />
                  </motion.div>
                  Analyzing Resume...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-5 w-5" />
                  Calculate ATS Score
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            
            {!file && (
              <p className="text-sm text-gray-500 mt-3">
                Upload a resume file to enable analysis
              </p>
            )}
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: "ATS Compatibility", desc: "Check how well your resume passes through ATS systems" },
              { title: "Keyword Analysis", desc: "Identify missing keywords and optimize for job descriptions" },
              { title: "Format Review", desc: "Ensure your resume format is ATS-friendly" }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-lg border-white/20">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Upload;
