
import { Link } from "react-router-dom";
import { FileText, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com/Biswajitdash-09", label: "GitHub" },
    { Icon: Twitter, href: "https://x.com/BiswajitDash09", label: "Twitter" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/biswajitdash09/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ResumeRanker</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Boost your resume's ATS score instantly with AI-powered analysis and personalized recommendations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/upload" className="hover:text-white transition-colors">Upload Resume</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><a href="mailto:biswajitdash929@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 ResumeRanker. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Made with ❤️ by Biswajit Dash
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
