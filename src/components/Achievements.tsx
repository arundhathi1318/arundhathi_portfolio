
import { Trophy, Star, Users, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Developer of the Year',
      description: 'Awarded by TechCorp for outstanding performance and innovation',
      year: '2023',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Star,
      title: 'Open Source Contributor',
      description: 'Over 500 contributions to various open source projects',
      year: '2022-2023',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Users,
      title: 'Team Leadership Excellence',
      description: 'Successfully led a team of 8 developers on major project',
      year: '2022',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Code,
      title: 'Hackathon Winner',
      description: 'First place in Global AI Hackathon with innovative solution',
      year: '2021',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies Mastered', value: '20+' }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and recognitions that mark my journey as a developer.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-xl card-hover"
              data-cursor-hover
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
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
          {achievements.map((achievement, index) => (
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
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-accent px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground">
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
