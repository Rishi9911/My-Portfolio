import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8 text-indigo-500">
          Skills
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-lg p-4 text-center font-medium shadow-sm hover:scale-105 transition"
              style={{
                backgroundColor: "var(--card)",
                color: "var(--text)",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
