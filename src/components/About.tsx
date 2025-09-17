import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground text-center mb-16">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start animate-slide-in-left">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-shadow duration-300">
                  <img
                    src={profilePlaceholder}
                    alt="[Your Name] - Professional headshot"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
              </div>
            </div>

            {/* Content */}
            <div className="animate-slide-in-right">
              <div className="space-y-6 text-lg font-poppins text-muted-foreground leading-relaxed">
                <p>
                  [Write a 3-4 sentence paragraph about your academic journey, your passion for engineering/technology, what you enjoy working on, and your career aspirations.]
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow duration-300">
                    <h3 className="text-primary font-semibold mb-2">Problem Solving</h3>
                    <p className="text-sm text-muted-foreground">
                      Passionate about tackling complex challenges with innovative solutions
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-shadow duration-300">
                    <h3 className="text-primary font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Always exploring new technologies and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;