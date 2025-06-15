import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  User,
  Code,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronDown,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Electronics", icon: Cpu, href: "/electronics" },
    { name: "Software", icon: Code, href: "/software" },
    { name: "Projects", icon: FolderOpen, href: "#projects" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the route without using the base path (handled by BrowserRouter)
      window.location.href = href;
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
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-navy-700 bg-clip-text text-transparent"
          >
            Anuj
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

// Hero Section
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-navy-50 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-navy-700 bg-clip-text text-transparent">
              Anuj
            </span>
            <br />I create{" "}
            <span className="bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
              hardware & software solutions
            </span>
          </motion.h1>          <motion.p
            className="text-lg md:text-xl text-navy-600 dark:text-navy-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            An innovative professional with expertise in core electronics and advanced
            software development, creating solutions that bridge hardware and digital worlds.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-navy-700 hover:from-blue-700 hover:to-navy-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-300 text-blue-600 dark:border-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-full"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
              <Mail className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-6 mt-12 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-navy-700 dark:text-navy-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
            {/* Scroll indicator - move it further down */}
            <motion.div
              className="absolute bottom-4 left-[calc(50%-10px)] transform flex flex-col items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-navy-400" />
            </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>              <Card className="p-8 bg-gradient-to-br from-white to-blue-50 dark:from-navy-800 dark:to-navy-700 border-0 shadow-xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                    Electronics & Software Engineer
                  </h3>
                  <p className="text-navy-600 dark:text-navy-300 mb-4">
                    I combine expertise in core electronics with advanced software development 
                    to create integrated solutions. My background in hardware design and 
                    circuit analysis complements my skills in web development, machine learning, 
                    and data engineering.
                  </p>
                  <p className="text-navy-600 dark:text-navy-300">
                    This interdisciplinary approach allows me to tackle complex challenges from 
                    multiple perspectives, building innovative systems where hardware and software 
                    complement each other for maximum efficiency and effectiveness.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">              {[
                {
                  label: "Electronics & Hardware",
                  value: "Circuit Design, PCB Layout, Embedded Systems",
                },
                {
                  label: "Web Development",
                  value: "React, TypeScript, Node.js, RESTful APIs",
                },
                {
                  label: "Machine Learning",
                  value: "TensorFlow, PyTorch, Computer Vision, NLP",
                },
                { 
                  label: "Data Engineering", 
                  value: "SQL/NoSQL, ETL Pipelines, Data Visualization" 
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-navy-700"
                >
                  <h4 className="font-semibold text-navy-900 dark:text-white">
                    {skill.label}
                  </h4>
                  <p className="text-navy-600 dark:text-navy-300">
                    {skill.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {  const skills = [
    { name: "Circuit Design", level: 90, color: "from-blue-500 to-blue-600" },
    {
      name: "PCB Layout",
      level: 85,
      color: "from-navy-500 to-navy-600",
    },
    { name: "React/TypeScript", level: 88, color: "from-slate-500 to-slate-600" },
    { name: "Machine Learning", level: 80, color: "from-steel-500 to-steel-600" },
    {
      name: "Embedded Systems",
      level: 87,
      color: "from-blue-500 to-navy-600",
    },
    {
      name: "Data Engineering",
      level: 82,
      color: "from-slate-500 to-blue-600",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-navy-800 dark:to-navy-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              My diverse skillset spanning hardware and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/70 dark:bg-navy-800/70 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-navy-700 shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-navy-600 dark:text-navy-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-navy-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {  const projects = [
    {
      title: "Smart Home IoT System",
      description:
        "Designed and built a complete IoT solution with custom PCB, embedded firmware, and mobile app for smart home automation.",      image: "/images/smart-home.jpg",
      tech: ["Circuit Design", "Embedded C", "React Native", "MQTT"],
      color: "from-blue-500 to-navy-600",
    },
    {
      title: "Machine Learning Pipeline",
      description:
        "Created an end-to-end ML pipeline for computer vision applications with automated model training and deployment.",
      image: "/images/ml-pipeline.jpg",
      tech: ["TensorFlow", "Python", "Docker", "AWS" , "ML" ],
      color: "from-slate-500 to-steel-600",
    },
    {
      title: "Industrial Monitoring System",
      description:
        "Developed a real-time monitoring system for industrial equipment with custom sensors, data processing, and visualization.",
      image: "/images/industrial-monitor.jpg",
      tech: ["PCB Design", "React", "Node.js", "Time Series DB"],
      color: "from-navy-500 to-blue-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Solutions that combine hardware expertise with software innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 , boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 20 }, // More responsive spring physics
                  opacity: { duration: 0.2 },
                  boxShadow: { duration: 0.2 },
                  scale: { duration: 0.1 }
                }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-xl dark:shadow-navy-800/30 hover:shadow-2xl transition-all duration-300 bg-white dark:bg-navy-800 h-full">
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-700 dark:to-navy-600 flex items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}
                    >
                      <Code className="w-8 h-8 text-white" />
                    </div>
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
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-navy-600 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-0" />
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
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-navy-800 dark:to-navy-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's start a conversation
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-white/70 dark:bg-navy-800/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-navy-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                    Get In Touch
                  </h3>                  <p className="text-navy-600 dark:text-navy-300 mb-6">
                    Whether you need expertise in hardware design, software development, 
                    or an integrated solution that combines both worlds, I'm here to help 
                    turn your ideas into reality.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-navy-600 hover:from-blue-600 hover:to-navy-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >                    <Mail className="mr-2 w-4 h-4" />
                    anuj.udapure22@vit.edu
                  </Button>

                  <div className="flex space-x-4">
                    {[
                      { icon: Github, href: "https://github.com/anuj28-cmd" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/anuj-udapure/" },
                      { icon: Twitter, href: "https://twitter.com/anujudapure" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-slate-100 dark:bg-navy-700 rounded-full hover:bg-slate-200 dark:hover:bg-navy-600 transition-colors duration-200"
                      >
                        <social.icon className="w-5 h-5 text-navy-700 dark:text-navy-300" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 bg-navy-900 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">          <p className="text-navy-400">
            © 2024 Anuj Udapure. Designed & built using React, Tailwind CSS, and years of electronics experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
