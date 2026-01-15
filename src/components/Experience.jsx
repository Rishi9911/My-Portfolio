import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Webfictive Solutions",
    duration: "June 2025 | India",
    points: [
      "Engineered responsive web pages using HTML, CSS, and JavaScript, improving load performance by 25%.",
      "Collaborated in a 4-member team using Git workflows, reducing merge conflicts by 30%.",
      "Delivered functional modules ahead of schedule during summer training.",
    ],
    proof: "/certificates/webfictive solution.pdf",
    proofLabel: "View Internship Certificate",
  },
  {
    role: "Technical Content Writer Intern",
    company: "Tpoint Tech Pvt. Ltd. (JavaTpoint)",
    duration: "Feb 2025 – Jul 2025 | Remote",
    points: [
      "Authored technical articles selected for publication, reaching 1,000+ readers.",
      "Researched and wrote content on emerging technologies for knowledge sharing.",
      "Demonstrated strong technical understanding and documentation skills.",
    ],
    proof: "/certificates/technical-content-writer.pdf",
    proofLabel: "View Certificate",
  },
  {
    role: "Summer Trainee",
    company: "RDSO (Indian Railways)",
    duration: "June 2024 | India",
    points: [
      "Developed a Train Delay Prediction model using Flask & Scikit-learn with ~82% accuracy.",
      "Built a real-time web interface handling 200+ user queries.",
      "Optimized data preprocessing pipeline, reducing handling time by 20%.",
    ],
    proof: "/certificates/RDSO-training-certificate.pdf",
    proofLabel: "View Training Certificate",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-indigo-500">
          Experience
        </h2>


        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-8 shadow-md"
              style={{ backgroundColor: "var(--card)" }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-indigo-500 font-medium">
                    {exp.company}
                  </p>
                </div>

                <span className="text-sm mt-2 md:mt-0" style={{ color: "var(--muted)" }}>
                  {exp.duration}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc pl-5 space-y-2 mb-6" style={{ color: "var(--muted)" }}>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Proof Button */}
              <a
                href={exp.proof}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-lg
                           border border-indigo-500 text-indigo-500
                           hover:bg-indigo-500 hover:text-white transition"
              >
                {exp.proofLabel} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
