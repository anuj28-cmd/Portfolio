import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

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

const Electronics = () => {  const navigate = useNavigate();

  // Electronics skills from resume
  const skills = [
    { name: "Circuit Design", level: 90, color: "from-blue-500 to-blue-600" },
    { name: "PCB Layout", level: 85, color: "from-navy-500 to-navy-600" },
    { name: "Embedded Systems", level: 87, color: "from-blue-500 to-navy-600" },
    { name: "Signal Processing", level: 83, color: "from-slate-500 to-slate-600" },
    { name: "Power Electronics", level: 80, color: "from-steel-500 to-steel-600" },
    { name: "Microcontrollers", level: 88, color: "from-slate-500 to-blue-600" },
  ];

  // Electronics projects from resume
  const projects = [
    {
      title: "Smart Home IoT System",
      description:
        "Designed and built a complete IoT solution with custom PCB, embedded firmware, and sensors for smart home automation. Implemented low-power design techniques and wireless communication protocols.",
      image: `${import.meta.env.BASE_URL}images/smart-home.jpg`,
      tech: ["Circuit Design", "Embedded C", "PCB Layout", "IoT Protocols"],
      color: "from-blue-500 to-navy-600",
    },
    {
      title: "Industrial Monitoring System",
      description:
        "Developed a real-time monitoring system for industrial equipment with custom sensors, data acquisition circuits, and signal conditioning. Created robust hardware that operates in harsh environments.",
      image: `${import.meta.env.BASE_URL}images/industrial-monitor.jpg`,
      tech: ["PCB Design", "Sensor Integration", "Signal Conditioning", "Power Management"],
      color: "from-navy-500 to-blue-600",
    },
    {
      title: "Automated Test Equipment",
      description:
        "Built specialized test equipment for electronics manufacturing with custom measurement circuits, automated testing sequences, and data logging capabilities.",
      image: `${import.meta.env.BASE_URL}images/placeholder.svg`,
      tech: ["Test Circuit Design", "Instrumentation", "Automation", "Calibration"],
      color: "from-slate-500 to-steel-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-navy-800 dark:to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-10">          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-sm"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
              Electronics &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
                Hardware Engineering
              </span>
            </h1>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              My expertise in designing and building electronic systems and hardware solutions
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <section className="mb-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Projects Section */}
        <section>
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">
              Hardware Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-navy-800">
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
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-navy-600 text-white"
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

export default Electronics;
