import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from "lucide-react";
import Button from "./Button";

const socialLinks = [
  { href: "https://github.com/Amandeep-tech", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/amandeep-singh-9241061a6/",
    label: "LinkedIn",
  },
  { href: "mailto:amanpank8910@mail.com", label: "Email" },
  {
    href: "https://medium.com/@ps772117",
    label: "Medium",
  },
  {
    href: "https://hashnode.com/@amandeep847",
    label: "Hashnode",
  },
];

const SocialHandleList = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center items-center">
      {socialLinks.map((link) => (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          key={link.label}
        >
          <Button
            className="group border-2
						text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold text-lg
						 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400
						  dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300 
							flex items-center gap-2"
          >
            <span className="text-sm sm:text-base">{link.label}</span>
          </Button>
        </a>
      ))}
    </div>
  );
};

export default SocialHandleList;
