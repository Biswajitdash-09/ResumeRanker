
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface JobDescriptionSectionProps {
  jobDescription: string;
  setJobDescription: (description: string) => void;
}

const JobDescriptionSection = ({ jobDescription, setJobDescription }: JobDescriptionSectionProps) => {
  return (
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
  );
};

export default JobDescriptionSection;
