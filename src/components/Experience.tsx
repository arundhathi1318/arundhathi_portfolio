import { Briefcase, Code2 } from 'lucide-react';

const experiences = [
  {
    title: 'Front-end Developer Intern – CodeSpeedy',
    company: 'CodeSpeedy Technology',
    duration: 'Oct 2024 – Dec 2024',
    description:
      'Worked in a a 5-member team to build dynamic and responsive UIs using React.js and modern CSS frameworks. Collaborated closely with backend engineers to create seamless full-stack features and enhance user experience',
    icon: Code2,
  },
  {
    title: 'PwC Launchpad Trainee Program',
    company: 'PricewaterhouseCoopers (PwC) India',
    duration: 'Feb 2025 – Present',
    description:
      'Undergoing immersive training in software engineering, data analytics, and business process automation through PwC’s Launchpad – a talent development initiative designed to accelerate early-career readiness for real-world client delivery.',
    icon: Briefcase,
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Experience</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            A quick look at my hands-on industry experience through impactful internships and trainee programs.
          </p>
        </div>

        <div className="relative border-l-4 border-primary/30 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group transition-transform duration-300 hover:translate-x-1"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[34px] z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <exp.icon className="w-5 h-5" />
              </span>

              {/* Timeline Card */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm group-hover:ring-2 group-hover:ring-primary group-hover:shadow-lg transition-all duration-300 ease-in-out">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-accent px-3 py-1 rounded">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-base text-muted-foreground italic mb-2">{exp.company}</p>
                <p className="text-base md:text-lg text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
