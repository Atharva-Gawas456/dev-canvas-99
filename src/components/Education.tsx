const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground text-center mb-16">
            <span className="text-primary">Education</span>
          </h2>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:shadow-card transition-shadow duration-300 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold font-poppins text-foreground mb-2">
                  [Your Degree, e.g., Bachelor of Technology in Computer Science & Engineering]
                </h3>
                <p className="text-lg font-medium font-poppins text-primary mb-2">
                  [Your University Name]
                </p>
                <p className="text-muted-foreground font-poppins">
                  [City, Country]
                </p>
              </div>
              
              <div className="text-left md:text-right">
                <p className="text-lg font-semibold font-poppins text-foreground">
                  Expected [Month] [Year]
                </p>
                <div className="flex flex-wrap gap-2 mt-3 md:justify-end">
                  <span className="bg-skill-tag border border-border rounded-md px-3 py-1 text-sm font-medium font-poppins text-foreground">
                    Computer Science
                  </span>
                  <span className="bg-skill-tag border border-border rounded-md px-3 py-1 text-sm font-medium font-poppins text-foreground">
                    Engineering
                  </span>
                </div>
              </div>
            </div>

            {/* Additional details */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-lg font-semibold font-poppins text-primary mb-4">
                Relevant Coursework
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground font-poppins">• Data Structures & Algorithms</p>
                  <p className="text-muted-foreground font-poppins">• Object-Oriented Programming</p>
                  <p className="text-muted-foreground font-poppins">• Database Management Systems</p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground font-poppins">• Software Engineering</p>
                  <p className="text-muted-foreground font-poppins">• Web Development</p>
                  <p className="text-muted-foreground font-poppins">• Computer Networks</p>
                </div>
              </div>
            </div>

            {/* Academic achievements */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-lg font-semibold font-poppins text-primary mb-4">
                Academic Highlights
              </h4>
              <div className="space-y-3">
                <p className="text-muted-foreground font-poppins flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  [Academic achievement or relevant project]
                </p>
                <p className="text-muted-foreground font-poppins flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  [Participation in tech events or competitions]
                </p>
                <p className="text-muted-foreground font-poppins flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  [Leadership roles or extracurricular activities]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;