import { Brain, Code, Server, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Full-Stack Development', level: 90, icon: Code },
    { name: 'AI/ML & Deep Learning', level: 85, icon: Brain },
    { name: 'Backend/API Design', level: 88, icon: Server },
    { name: 'Team Collaboration', level: 87, icon: Users },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A self-driven Computer Science student passionate about building impactful tech products, blending creativity with deep technical skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm Arundhathi, currently in my pre-final year at VNR Vignana Jyothi Institute of Engineering and Technology. 
              As a full-stack developer with a strong foundation in core CS subjects and real-world project experience, I thrive in fast-paced, hands-on environments.
              My journey has included internships, research, and leading cross-functional teams to build scalable applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              I’ve participated in programs like PwC Launchpad and ranked in the top 1% in the Amazon ML Challenge 2024. 
              I enjoy applying my skills to real-world problems—whether it's through intelligent web systems, predictive ML models, or meaningful collaborations.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                'HTML', 'CSS', 'JavaScript', 'SQL', // basic
                'React', 'Node.js', 'Express',       // frontend/backend
                'MongoDB', 'PostgreSQL', 'FastAPI',  // databases & API
                'Python', 'Java', 'TypeScript',      // languages
                'Docker', 'Git', 'AWS'               // tools & devops
              ].map((tech) => (
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
