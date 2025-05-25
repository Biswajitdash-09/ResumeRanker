
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface AnalysisButtonProps {
  file: File | null;
  isAnalyzing: boolean;
  setIsAnalyzing: (analyzing: boolean) => void;
}

const AnalysisButton = ({ file, isAnalyzing, setIsAnalyzing }: AnalysisButtonProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();

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
    
    toast({
      title: "Analysis started!",
      description: "Analyzing your resume with AI...",
    });

    // Simulate API call with proper error handling
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      // Store file info in sessionStorage for the result page
      sessionStorage.setItem('analyzedFile', JSON.stringify({
        name: file.name,
        size: file.size,
        type: file.type,
        analyzedAt: new Date().toISOString()
      }));
      
      // Use React Router navigation instead of window.location
      navigate('/result');
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
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
  );
};

export default AnalysisButton;
