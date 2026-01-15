import { motion } from "framer-motion";

const hardSkills = [
  {
    category: "Programming",
    items: ["C++", "OOPs", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Pandas", "NumPy"],
  },
  {
    category: "Tools/Platforms",
    items: ["GitHub", "Git", "Vercel"],
  },
  {
    category: "Database",
    items: ["PostgreSQL"],
  },
];

const softSkills = [
  "Collaborative",
  "Creative",
  "Analytical Thinking",
  "Adaptability",
  "Positive Outlook",
  "Eager to Learn",
];

const languages = ["English", "Hindi"];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-indigo-500">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* HARD SKILLS */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-ink">Hard Skills</h3>
            {hardSkills.map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-3 text-ink-muted uppercase tracking-wider">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-500 border border-indigo-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* SOFT SKILLS */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-ink">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl border border-border bg-card shadow-sm flex items-center justify-center text-center font-medium hover:border-indigo-500 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* LANGUAGES */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-ink">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="px-6 py-3 rounded-full border border-border bg-card/50 text-ink font-medium hover:bg-prime/10 hover:border-prime hover:text-prime transition-colors"
                  >
                    {lang}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
