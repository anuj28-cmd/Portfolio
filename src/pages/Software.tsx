import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Home, User, Code, FolderOpen, Mail, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Animation wrapper component
const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: User, href: "/#about" },
    { name: "Electronics", icon: Cpu, href: "/electronics" },
    { name: "Software", icon: Code, href: "/software" },
    { name: "Projects", icon: FolderOpen, href: "/#projects" },
    { name: "Contact", icon: Mail, href: "/#contact" },
  ];
  
  const scrollToSection = (href: string) => {
    if (href.includes("#")) {
      if (href.startsWith("/#")) {
        navigate(href);
      } else {
        const section = document.querySelector(href);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Use React Router's navigate for routing
      navigate(href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-navy-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            Anuj Udapure
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-navy-700 dark:text-navy-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              <Code className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const Software = () => {
  const navigate = useNavigate();  // Software skills
  const skills = [
    { name: "React/TypeScript", level: 88, color: "blue-500" },
    { name: "Machine Learning", level: 80, color: "blue-500" },
    { name: "Data Engineering", level: 82, color: "blue-500" },
    { name: "Node.js/Express", level: 85, color: "blue-500" },
    { name: "Python/TensorFlow", level: 83, color: "blue-500" },
    { name: "Cloud Services", level: 70, color: "blue-500" },
  ];

  // Software projects
  const projects = [
    {
      title: "Emeregency Vehicle Detection for Smart City",
      description:
        "Created an end-to-end ML pipeline for computer vision applications with automated model training, validation, and deployment. Implemented data preprocessing, feature extraction, and model optimization.",
      image: `${import.meta.env.BASE_URL}images/ml-pipeline.jpg`,
      tech: ["TensorFlow", "Python", "Docker", "AWS"],
      color: "from-slate-500 to-steel-600",
    },
    {
      title: "Krishi-Sahayak : AI-Driven Agricultural Advisor",
      description:
        "Built a full-stack e-commerce platform with product catalog, user authentication, shopping cart, and payment processing. Implemented responsive UI and optimized database queries.",      image: `${import.meta.env.BASE_URL}images/placeholder.svg`,
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      color: "from-blue-500 to-navy-600",
    },
    {
      title: "TechDocRAG : Retrieval-Augmented QA System",
      description:
        "Developed an interactive data visualization dashboard for business analytics with real-time data processing, custom charts, and filtering capabilities.",      image: `${import.meta.env.BASE_URL}images/placeholder.svg`,
      tech: ["D3.js", "React", "TypeScript", "GraphQL"],
      color: "from-navy-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-navy-800 dark:to-navy-900">      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Software{" "}
              <span className="text-blue-500 dark:text-blue-400">
                Development
              </span>
            </h1>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              My expertise in building innovative software solutions and applications
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <section className="mb-20">          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Technical{" "}
              <span className="text-blue-500 dark:text-blue-400">
                Skills
              </span>
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-left mb-8">
              My expertise in software development and programming
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-white/70 dark:bg-navy-800/70 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-navy-700 shadow-lg"
                >
                  <div className="relative w-28 h-28 mb-4">                    {/* Background Circle */}
                    <div className="w-full h-full rounded-full bg-slate-200 dark:bg-navy-700 absolute"></div>
                    
                    {/* Progress Circle */}
                    <svg className="w-full h-full absolute top-0 left-0 -rotate-90">                      <defs>
                        <linearGradient id={`gradient-${skill.name.replace(/\s+/g, '')}-s`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="42.5%"
                        stroke={`url(#gradient-${skill.name.replace(/\s+/g, '')}-s)`}
                        strokeWidth="8%"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ 
                          strokeDashoffset: 283 - (283 * skill.level / 100)
                        }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    
                    {/* Inner Circle with Percentage */}
                    <div className="absolute inset-[15%] rounded-full bg-white dark:bg-navy-800 flex items-center justify-center shadow-inner">                      <span className="text-xl font-bold text-blue-500">
                        {skill.level}<span className="text-sm">%</span>
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white text-center">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Projects Section */}
        <section>          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Software{" "}
              <span className="text-blue-500 dark:text-blue-400">
                Projects
              </span>
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-left mb-8">
              Applications that demonstrate my software development capabilities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2,
                    y: { type: "spring", stiffness: 300, damping: 20 },
                    boxShadow: { duration: 0.2 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.1 }
                  }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-xl dark:shadow-navy-800/30 hover:shadow-2xl transition-all duration-300 bg-white dark:bg-navy-800 h-full">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-700 dark:to-navy-600 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `${import.meta.env.BASE_URL}images/placeholder.svg`;
                        }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-navy-600 dark:text-navy-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-navy-700 text-navy-700 dark:text-navy-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
};

export default Software;
