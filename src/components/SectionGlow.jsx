const SectionGlow = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* GLOWS */}
      <div className="blob blob-indigo -top-20 -left-20"></div>
      <div className="blob blob-cyan -bottom-20 -right-20"></div>

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionGlow;
