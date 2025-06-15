import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-navy-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto px-4"
      >        <h1 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 to-navy-600 bg-clip-text text-transparent">
            My Journey
          </span>
        </h1>
        <p className="text-lg text-navy-600 dark:text-navy-300 mb-8">
          With a strong foundation in electronics engineering and a passion for software development,
          I've built a unique career bridging hardware and software domains. My expertise spans circuit design,
          PCB layout, web development, machine learning, and data engineering - creating integrated solutions
          that leverage the best of both worlds.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-blue-500 to-navy-600 hover:from-blue-600 hover:to-navy-700 text-white"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Homepage
        </Button>
      </motion.div>
    </div>
  );
};

export default About;
