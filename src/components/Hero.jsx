import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const stats = [
  { value: "3", label: "Projects" },
  { value: "5+", label: "Skills" },
  { value: "4+", label: "Certifications" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden bg-canvas">

      {/* BACKGROUND BLOBS */}
      <div className="blob blob-indigo top-0 -left-20 animate-pulse"></div>
      <div className="blob blob-pink bottom-0 -right-20 animate-pulse delay-1000"></div>
      <div className="blob blob-cyan top-1/3 left-1/3 opacity-30"></div>

      <div className="section-container grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={profile}
              alt="Rishi"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-canvas object-cover shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-ink">
            Building Intelligent <br />
            <span className="text-gradient">Systems</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-muted mb-8 max-w-lg leading-relaxed">
            Hi,<span className="text-prime font-semibold"> I'm Rishi</span>| AI & Machine Learning enthusiast | C++ Programmer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-prime text-white font-medium hover:brightness-110 shadow-lg shadow-indigo-500/20 transition transform hover:-translate-y-1 text-center"
            >
              Explore Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-xl border border-border bg-canvas/50 text-ink font-medium hover:bg-canvas hover:border-prime transition text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Glass Card */}
          <div className="glass-card p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
            </div>

            <h3 className="text-2xl font-bold text-ink mb-2">About Me</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mb-6"></div>

            <p className="text-ink-muted mb-8 text-lg leading-relaxed">
              I'm a final-year Computer Science Engineering student with a strong interest in Artificial Intelligence and Machine Learning. I work primarily with C++, Python, and machine learning libraries, and I enjoy applying these skills to real-world problems.
              My interests include predictive modeling, data preprocessing, and building practical ML applications.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-6">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <h4 className="text-3xl font-bold text-gradient mb-1">
                    {item.value}
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-ink-muted font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Technology Badges */}
          <FloatingBadge text="C++" position="-top-6 -right-6" delay={0} color="text-sky-400 bg-sky-400/10" />
          <FloatingBadge text="Python" position="bottom-12 -left-8" delay={2} color="text-cyan-400 bg-cyan-400/10" />
          <FloatingBadge text="PostgreSQL" position="top-1/2 -right-12" delay={1.5} color="text-purple-400 bg-purple-400/10" />

        </motion.div>
      </div>
    </section>
  );
};

const FloatingBadge = ({ text, position, delay, color }) => (
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 3, delay: delay, ease: "easeInOut" }}
    className={`absolute ${position} px-5 py-2 rounded-full glass border border-white/10 shadow-xl backdrop-blur-xl ${color} font-medium`}
  >
    {text}
  </motion.div>
);

export default Hero;
