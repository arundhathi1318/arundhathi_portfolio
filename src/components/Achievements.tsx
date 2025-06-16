import { Trophy, Terminal, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Top 1% – Amazon ML Challenge 2024',
      description: 'Ranked among the top 1% of 5000+ participants in a national-level machine learning competition.',
      year: '2024',
      color: 'from-yellow-400 to-orange-500',
    },
   {
  icon: Users,
  title: 'NASA Space Apps Hackathon 2023',
  description: 'Secured Top 5 Finalist spot in the NASA Space Apps Challenge by developing innovative web apps tackling space  challenges.',
  year: '2023',
  color: 'from-purple-500 to-pink-500',
},


  ];

  const stats = [
    { label: 'Projects Built', value: '12+' },
    { label: 'Hackathons Attended', value: '5+' },
    { label: 'Workshops & TEDx Events', value: '8+' },
    { label: 'Technologies Learned', value: '25+' },
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into my journey through innovation, leadership, and continuous learning.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-xl card-hover"
              data-cursor-hover
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.title}
              className="group bg-card border border-border rounded-xl p-6 card-hover"
              data-cursor-hover
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} text-white`}>
                  <achievement.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-accent px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <p className=" text-base md:text-2xltext-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
