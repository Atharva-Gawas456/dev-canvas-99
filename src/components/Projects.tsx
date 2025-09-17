import { Button } from '@/components/ui/button';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: '[Project Title]',
      description: '[A short 2-3 sentence description of the project, its purpose, and the problem it solves.]',
      technologies: ['JavaScript', 'Node.js', 'API', 'MongoDB'],
      image: project1Image,
      liveDemo: '#',
      github: '#'
    },
    {
      title: '[Project Title]',
      description: '[A short 2-3 sentence description of the project, its purpose, and the problem it solves.]',
      technologies: ['React.js', 'TypeScript', 'Tailwind', 'Firebase'],
      image: project2Image,
      liveDemo: '#',
      github: '#'
    },
    {
      title: '[Project Title]',
      description: '[A short 2-3 sentence description of the project, its purpose, and the problem it solves.]',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
      image: project3Image,
      liveDemo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground text-center mb-16">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-poppins mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-skill-tag border border-border rounded-md px-3 py-1 text-xs font-medium font-poppins text-foreground hover:bg-primary/10 hover:border-primary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="bg-primary hover:bg-project-hover font-poppins font-medium flex-1"
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-medium flex-1"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground font-poppins text-lg mb-6">
              Want to see more of my work?
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-semibold"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;