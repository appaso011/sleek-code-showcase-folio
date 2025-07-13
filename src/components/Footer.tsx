import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/alexjohnson",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/alexjohnson",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/alexjohnson",
      label: "Twitter"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:alex.johnson@email.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient">Alex Johnson</h3>
            <p className="text-muted-foreground mt-2">Full-Stack Software Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary/10"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;