import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Online Exam Proctoring System',
      description:
        'An AI-based online exam proctoring tool with real-time face, eye, and object tracking plus audio monitoring to ensure secure assessments.',
      image:
        'https://www.splashgain.com/wp-content/uploads/2023/08/360-remote-proctoring.png',
      technologies: ['Python', 'Flask', 'OpenCV', 'YOLO', 'Dlib', 'SQL'],
      liveUrl: null,
      githubUrl: 'https://github.com/arundhathi1318/AI-Proctoring-System',
    },
    {
      id: 2,
      title: 'Twitch Gaming Trend Monitor',
      description:
        'A real-time gaming trend analysis tool that tracks Twitch streaming patterns, game popularity, and viewer behavior using Twitch API and data visualizations.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUaIx60H_cSq_S_kwil0w-Y_6iswpnnqy0g&s',
      technologies: ['React', 'Node.js', 'Twitch API', 'Chart.js'],
      liveUrl: null,
      githubUrl: 'https://github.com/arundhathi1318/twitch-trend-beacon',
    },
    {
      id: 3,
      title: '🍽️ Food Wastage Management System',
      description:
        'A responsive web platform that connects restaurants with surplus food to NGOs and consumers. Users can reserve/order discounted meals in real-time, promoting sustainability.',
      image:
        'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&h=600&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js'],
      liveUrl: null,
      githubUrl: 'https://github.com/arundhathi1318/Food-Management-System',
    },
    {
      id: 4,
      title: 'Lead Generation System',
      description:
        'A complete lead collection and automation system using React for the frontend, Flask for the backend API, and n8n workflows for triggering email notifications.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuav4aT_MxK4cA1D28T-fZK1MS3rhccXsyiw&s',
      technologies: ['React', 'Flask', 'n8n', 'SMTP'],
      liveUrl: 'https://lead-generation-system-seven.vercel.app/',
      githubUrl: 'https://github.com/arundhathi1318/Lead_Generation_System',
    },
    {
      id: 5,
      title: 'Perfume E-Commerce Website',
      description:
        'A responsive and dynamic perfume shop with authentication, modern UI, and mobile-first design. Features include login, product listing, and user-friendly checkout.',
      image:
        'https://i0.wp.com/themes.svn.wordpress.org/the-perfume-shop/0.1.3/screenshot.png',
      technologies: ['React', 'Firebase Auth', 'Tailwind CSS', 'Node.js'],
      liveUrl: 'https://theperfumecompany.vercel.app/',
      githubUrl: 'https://github.com/arundhathi1318/The-Perfume-Project',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of impactful web and AI-based projects that reflect my skills in
            full-stack development, automation, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
              data-cursor-hover
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="px-3 py-2 bg-white/10 rounded-lg text-white text-sm font-medium opacity-80">
                       Live demo Coming Soon
                      </span>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 ">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
