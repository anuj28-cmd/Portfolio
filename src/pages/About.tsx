import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-skyblue-50 to-peach-50 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal-900 dark:text-white mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-lavender-600 to-skyblue-500 bg-clip-text text-transparent">
            Page
          </span>
        </h1>
        <p className="text-lg text-charcoal-600 dark:text-charcoal-300 mb-8">
          This is a placeholder for the dedicated About page. The main About
          section is available on the homepage.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-lavender-600 to-skyblue-500 hover:from-lavender-700 hover:to-skyblue-600 text-white"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Homepage
        </Button>
      </motion.div>
    </div>
  );
};

export default About;
