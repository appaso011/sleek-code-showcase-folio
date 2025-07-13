import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "REST APIs, GraphQL, AWS, Docker"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate software developer with 5+ years of experience building scalable web applications and mobile solutions.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <Card className="card-hover border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I started my journey in software development during my Computer Science studies, 
                    where I discovered my passion for creating digital solutions that solve real-world problems.
                  </p>
                  <p>
                    Over the years, I've worked with startups and established companies, helping them 
                    build everything from responsive web applications to complex mobile platforms. 
                    I believe in writing clean, maintainable code and staying up-to-date with the latest technologies.
                  </p>
                  <p>
                    When I'm not coding, you can find me contributing to open-source projects, 
                    mentoring junior developers, or exploring new technologies that push the boundaries of what's possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="card-hover border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;