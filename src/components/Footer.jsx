import { Github, Linkedin, Mail, CodeXml } from "lucide-react";
import SectionGlow from "./SectionGlow";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Mail size={24} />,
      href: "mailto:rishichaudhari999@gmail.com",
      label: "Email",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/rishi-chaudhari-30133518b/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/Rishi9911", // Inferred from Projects.jsx
      label: "GitHub",
    },
    {
      icon: <CodeXml size={24} />, // LeetCode
      href: "https://leetcode.com/u/include_rishi/",
      label: "LeetCode",
    },
  ];

  return (
    <SectionGlow>
      <footer className="py-8 text-center text-gray-500">
        <div className="flex justify-center gap-8 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-colors transform hover:scale-110"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p>© 2026 Rishi. All rights reserved.</p>
      </footer>
    </SectionGlow>
  );
};

export default Footer;
