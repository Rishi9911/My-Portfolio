const SectionGlow = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* GLOWS */}
      <div className="glow glow-indigo top-20 left-10"></div>
      <div className="glow glow-cyan bottom-20 right-20"></div>

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionGlow;
