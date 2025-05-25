
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesPreview = () => {
  const features = [
    { title: "ATS Compatibility", desc: "Check how well your resume passes through ATS systems" },
    { title: "Keyword Analysis", desc: "Identify missing keywords and optimize for job descriptions" },
    { title: "Format Review", desc: "Ensure your resume format is ATS-friendly" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <Card key={index} className="bg-white/60 backdrop-blur-lg border-white/20">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};

export default FeaturesPreview;
