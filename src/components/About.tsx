import { Brain, Code, Server, Users } from 'lucide-react';

const About = () => {
  
  return (
    <section id="about" className="py-20 bg-muted/30" font-serif>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A self-driven Computer Science student passionate about building impactful tech products, blending creativity with deep technical skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 👇 Image Section */}
          <div className="flex justify-center">
           <div className="flex justify-center">
  <img
    src="/aruphotoo.jpg"
    alt="Arundhathi"
    className="rounded-2xl shadow-lg w-[350px] h-[420px] object-cover border-4 border-primary transition-transform duration-500 hover:scale-105"
  />
</div>

          </div>

          {/* 👇 Bio and Skills Section */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, I'm Arundhathi — a pre-final year student at VNR Vignana Jyothi Institute of Engineering and Technology with a solid grasp of full-stack development and computer science fundamentals. I’ve picked up practical skills not just from textbooks, but from late-night debugging, real project deadlines, and figuring out why things break (often).
            </p>

            <p className="text-lg leading-relaxed">
              I enjoy building things that work — whether it's a clean UI, a backend that doesn’t crash, or an ML model that actually predicts something useful. I'm always up for collaborative projects, especially the kind that mix tech with a little bit of chaos and creativity.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                'HTML', 'CSS', 'JavaScript', 'SQL',
                'React', 'Node.js', 'Express',
                'MongoDB', 'PostgreSQL', 'FastAPI',
                'Python', 'Java', 'TypeScript',
                'Docker', 'Git', 'AWS'
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

            {/* 👇 Skill Bars */}
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
