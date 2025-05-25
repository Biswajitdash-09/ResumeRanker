
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your resume against thousands of ATS patterns and job requirements."
    },
    {
      icon: Target,
      title: "Precise Scoring",
      description: "Get detailed breakdowns of your resume's performance across keywords, formatting, skills, and structure."
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Receive comprehensive feedback in seconds, not days. Upload and get your score immediately."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and never stored. We respect your privacy and protect your information."
    }
  ];

  const benefits = [
    "Increase interview callbacks by up to 300%",
    "Optimize for specific job descriptions",
    "Identify missing keywords and skills",
    "Improve resume formatting for ATS systems",
    "Get actionable improvement suggestions",
    "Track your progress over time"
  ];

  const faqs = [
    {
      question: "What is an ATS and why is it important?",
      answer: "An Applicant Tracking System (ATS) is software used by employers to filter and rank resumes before human review. Over 90% of large companies use ATS systems, making optimization crucial for job search success."
    },
    {
      question: "How accurate is ResumeRanker's scoring?",
      answer: "Our AI model is trained on thousands of resumes and job postings, achieving 95% accuracy in predicting ATS compatibility. We continuously update our algorithms based on the latest ATS technologies."
    },
    {
      question: "What file formats are supported?",
      answer: "We support PDF, DOC, and DOCX formats. PDF is generally recommended as it maintains formatting consistency across different ATS systems."
    },
    {
      question: "Is my resume data safe and private?",
      answer: "Absolutely. We use enterprise-grade encryption and never store your resume data. Your files are processed in memory and immediately deleted after analysis."
    },
    {
      question: "Do I need to provide a job description?",
      answer: "While optional, providing a job description significantly improves the accuracy of our analysis. We can then provide targeted keyword suggestions and role-specific optimization tips."
    },
    {
      question: "How often should I check my resume score?",
      answer: "We recommend checking your score whenever you update your resume or apply to different types of roles. Different industries may require different optimization strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About ResumeRanker
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help job seekers optimize their resumes for Applicant Tracking Systems (ATS) 
              using cutting-edge AI technology and proven optimization strategies.
            </p>
          </motion.div>

          {/* What is ATS Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Card className="bg-white/80 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What is an ATS?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="max-w-2xl mx-auto">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    An <strong>Applicant Tracking System (ATS)</strong> is software that companies use to collect, 
                    scan, and rank job applications. Before your resume reaches human hands, it must first 
                    pass through these digital gatekeepers.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <p className="text-blue-800 font-semibold text-lg">
                      📊 Over 90% of Fortune 500 companies use ATS systems
                    </p>
                  </div>
                  <p className="text-gray-600">
                    That's why optimizing your resume for ATS compatibility is crucial for landing interviews 
                    and advancing your career.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How ResumeRanker Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-lg border-white/20 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Why Choose ResumeRanker?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <Card className="bg-white/80 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="bg-white/80 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Optimize Your Resume?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of job seekers who have improved their interview chances with ResumeRanker.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg"
                >
                  <Link to="/upload">
                    <FileText className="mr-2 h-6 w-6" />
                    Start Your Analysis
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
