import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-28 px-6"
    >
      <div
        className="section-container"
        style={{ backgroundColor: "var(--card)" }}
      >
        <h2 className="text-3xl font-bold mb-6 text-indigo-500">
          About Me
        </h2>

        <p style={{ color: "var(--muted)" }} className="leading-relaxed">
          I am a final-year Computer Science Engineering student from Panjab
          University with a strong interest in frontend development.
          I enjoy building modern, responsive, and animated user interfaces
          using React and Tailwind CSS.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
