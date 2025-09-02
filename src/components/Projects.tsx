import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import codingWorkspace from "@/assets/coding-workspace.jpg";
import securityDashboard from "@/assets/security-dashboard.jpg";
import tvanamm from "@/assets/tvanamm.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
      image: codingWorkspace,
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      category: "Web Development",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Tvanamm",
      description: "A comprehensive platform for tea, juices, and ice-creams, providing quality beverages and treats.",
      image: tvanamm,
      technologies: ["Business Platform", "Web Development", "E-commerce"],
      category: "Business Platform",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Network Security Dashboard",
      description: "Interactive dashboard for monitoring network security - Currently in development phase.",
      image: securityDashboard,
      technologies: ["Python", "Cybersecurity", "Dashboard"],
      category: "Cybersecurity",
      demoUrl: "#",
      githubUrl: "#",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've worked on, showcasing my skills in web development and cybersecurity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="group bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.status && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {project.status}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                  disabled={project.status === "Coming Soon"}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={project.status === "Coming Soon"}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;