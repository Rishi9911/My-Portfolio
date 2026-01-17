import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React, Tailwind CSS, and Framer Motion. Deployed the project using Vercel",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://my-portfolio-one-navy-41.vercel.app/",
    github: "https://github.com/Rishi9911/My-Portfolio",
  },
  {
    title: "Train Delay Prediction",
    description:
      "Machine learning model to predict Indian Railways train delays. Built with Flask backend and Scikit-learn, achieving 85% accuracy on test data.",
    tech: ["Python", "Flask", "Scikit-Learn"],
    live: "https://train-delay-predictor.vercel.app",
    github: "https://github.com/Rishi9911/train-delay-predictor",
  },
  {
    title: "Restaurant Website",
    description:
      "A fully responsive restaurant landing page with menu filtering, persistent cart state, and optimized asset loading for core web vitals.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://rishi9911.github.io/Sheroes-Restaurant-Site/",
    github: "https://github.com/Rishi9911/Sheroes-Restaurant-Site",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-canvas relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-prime uppercase tracking-wider mb-2 block">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:border-prime/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-300 group flex flex-col items-start"
            >
              {/* Icon */}
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-pink-500/10 mb-6 group-hover:scale-110 transition duration-300">
                <Code2 className="text-prime" size={32} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-prime transition-colors">
                {project.title}
              </h3>

              <p className="text-ink-muted mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-border text-ink-muted group-hover:bg-prime/10 group-hover:text-prime transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 w-full mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-lg bg-ink text-canvas hover:bg-prime transition text-sm font-medium"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-lg border border-border text-ink hover:border-prime hover:text-prime transition text-sm font-medium"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
