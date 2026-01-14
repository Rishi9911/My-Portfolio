import { motion } from "framer-motion";

const certifications = [
  {
    title: "Python for Data Science",
    issuer: "IIT Madras (NPTEL)",
    year: "2025",
    file: "/certificates/Python for Data Science.pdf",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Accenture (Forage)",
    year: "2025",
    file: "/certificates/accenture forage.pdf",
  },
  {
    title: "GDSC Cloud Program",
    issuer: "Google",
    year: "2024",
    file: "/certificates/GDSC Cloud.pdf",
  },

  {
    title: "Technical Content Writer Internship",
    issuer: "Tpoint Tech Pvt. Ltd.",
    year: "Feb 2025 – Jul 2025",
    file: "/certificates/technical-content-writer.pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-10 text-indigo-500">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="block rounded-xl p-6 shadow-md hover:scale-105 transition
                         border border-transparent hover:border-indigo-500"
              style={{ backgroundColor: "var(--card)" }}
            >
              <h3 className="text-lg font-semibold mb-2">
                {cert.title}
              </h3>

              <p style={{ color: "var(--muted)" }}>
                {cert.issuer}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-indigo-500">
                  {cert.year}
                </span>

                <span className="text-sm text-indigo-500 font-medium">
                  View PDF →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
