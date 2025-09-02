import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", 
    "C Programming", "Python", "Kali Linux"
  ];
  
  const currentlyLearning = [
    "Rust", "Git & GitHub", "Networking"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am Trinadh Suroju, a dedicated B.Tech student with a strong passion for technology and
                  cybersecurity. My journey in the tech world encompasses both web development and ethical
                  hacking, where I strive to build secure, innovative solutions. With hands-on experience in modern
                  web technologies and a solid foundation in cybersecurity principles, I am committed to
                  contributing to a safer digital landscape while crafting exceptional user experiences.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently pursuing my Bachelor's degree in Technology, I continuously expand my knowledge
                  through practical projects, security research, and staying updated with the latest industry trends.
                  I believe in the power of technology to solve real-world problems and am passionate about
                  ethical hacking as a means to protect and secure our digital infrastructure.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Currently Learning</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentlyLearning.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="border-accent text-accent hover:bg-accent/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-primary pl-6 space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Education & Background</h3>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Bachelor of Technology</p>
                  <p className="text-muted-foreground">Currently pursuing B.Tech with focus on Computer Science and Engineering</p>
                  <p className="text-muted-foreground">Specializing in Web Development and Cybersecurity</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;