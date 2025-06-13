
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code },
    { name: 'UI/UX Design', level: 88, icon: Palette },
    { name: 'Project Management', level: 92, icon: Rocket },
    { name: 'Team Leadership', level: 85, icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves creating beautiful, functional, and user-centered digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating modern, 
              responsive applications using cutting-edge technologies. My journey started with a 
              curiosity for how things work and evolved into a passion for building digital solutions 
              that make a difference.
            </p>
            
            <p className="text-lg leading-relaxed">
              I believe in the power of clean code, intuitive design, and collaborative teamwork. 
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors card-hover"
                  data-cursor-hover
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {skills.map(({ name, level, icon: Icon }) => (
              <div key={name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
