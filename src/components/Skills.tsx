const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'C++', 'Java', 'HTML/CSS', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Node.js', 'Express.js', 'React.js', 'Flask', 'NumPy']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Replit', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground text-center mb-16">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-2xl font-semibold font-poppins text-primary mb-6 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="bg-skill-tag border border-border rounded-lg px-4 py-3 text-center hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                      >
                        <span className="text-foreground font-medium font-poppins text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground font-poppins text-lg max-w-2xl mx-auto">
              Always learning and exploring new technologies to stay current with industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;