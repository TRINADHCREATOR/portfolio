import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogPostDialog from "./BlogPostDialog";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Building Secure Web Applications: Best Practices for 2024",
      excerpt: "Explore the latest security practices and methodologies for developing robust web applications that protect user data and prevent common vulnerabilities.",
      content: `<h3>Introduction</h3><p>In today's digital landscape, security is paramount. As cyber threats evolve, developers must stay ahead with robust security practices.</p><h3>Key Security Principles</h3><p><strong>1. Input Validation:</strong> Always validate and sanitize user input to prevent injection attacks.</p><p><strong>2. Authentication & Authorization:</strong> Implement strong authentication mechanisms and proper authorization checks.</p><p><strong>3. Data Encryption:</strong> Use HTTPS for data in transit and encrypt sensitive data at rest.</p><h3>Common Vulnerabilities</h3><p>Understanding OWASP Top 10 vulnerabilities helps developers build more secure applications. These include SQL injection, cross-site scripting (XSS), and broken authentication.</p><h3>Best Practices</h3><ul><li>Regular security audits and penetration testing</li><li>Keep dependencies updated</li><li>Implement proper error handling</li><li>Use secure coding standards</li></ul><p>Building secure applications requires continuous learning and adaptation to new threats.</p>`,
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Cybersecurity",
      tags: ["Security", "Web Development", "Best Practices"],
      featured: true
    },
    {
      id: 2,
      title: "The Future of React: Exploring Server Components",
      excerpt: "Deep dive into React Server Components and how they're revolutionizing the way we build modern web applications with improved performance.",
      content: `<h3>What are Server Components?</h3><p>React Server Components represent a paradigm shift in how we think about rendering. They allow components to run on the server, reducing bundle size and improving performance.</p><h3>Benefits</h3><ul><li><strong>Reduced Bundle Size:</strong> Server components don't ship to the client</li><li><strong>Direct Database Access:</strong> Fetch data directly without API layers</li><li><strong>Improved Performance:</strong> Faster initial page loads</li></ul><h3>Implementation</h3><p>Server components work seamlessly with client components, creating a hybrid approach that leverages the best of both worlds.</p><p>This technology is still evolving, but early adoption shows promising results for application performance and developer experience.</p>`,
      date: "2024-01-10",
      readTime: "6 min read",
      category: "React",
      tags: ["React", "Server Components", "Performance"]
    },
    {
      id: 3,
      title: "Cybersecurity Career Path: From Student to Professional",
      excerpt: "A comprehensive guide for students looking to break into cybersecurity, including essential skills, certifications, and career opportunities.",
      content: `<h3>Getting Started in Cybersecurity</h3><p>The cybersecurity field offers diverse opportunities for students and career changers. Here's your roadmap to success.</p><h3>Essential Skills</h3><ul><li><strong>Technical Skills:</strong> Networking, operating systems, programming</li><li><strong>Analytical Thinking:</strong> Problem-solving and threat assessment</li><li><strong>Continuous Learning:</strong> Staying updated with latest threats</li></ul><h3>Certifications to Consider</h3><p><strong>Entry Level:</strong> CompTIA Security+, Network+</p><p><strong>Intermediate:</strong> CISSP, CEH, CISM</p><p><strong>Advanced:</strong> OSCP, CCIE Security</p><h3>Career Paths</h3><ul><li>Security Analyst</li><li>Penetration Tester</li><li>Security Architect</li><li>Incident Response Specialist</li></ul><p>Start with foundational knowledge, gain hands-on experience through labs and internships, and pursue relevant certifications.</p>`,
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Career",
      tags: ["Career", "Cybersecurity", "Education"]
    },
    {
      id: 4,
      title: "Modern Authentication Patterns in Web Development",
      excerpt: "Understanding JWT tokens, OAuth flows, and modern authentication strategies for building secure user authentication systems.",
      content: `<h3>Modern Authentication Landscape</h3><p>Authentication has evolved significantly. Today's applications require robust, scalable, and user-friendly authentication mechanisms.</p><h3>JWT Tokens</h3><p>JSON Web Tokens provide a stateless way to handle authentication. They're self-contained and can carry user information securely.</p><h3>OAuth 2.0 and OpenID Connect</h3><p>These protocols enable secure third-party authentication, allowing users to log in with existing accounts (Google, GitHub, etc.).</p><h3>Best Practices</h3><ul><li>Use HTTPS everywhere</li><li>Implement proper token expiration</li><li>Store tokens securely</li><li>Handle refresh tokens appropriately</li></ul><h3>Security Considerations</h3><p>Always validate tokens on the server side, implement rate limiting, and use strong encryption methods.</p>`,
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Authentication",
      tags: ["Auth", "JWT", "Security"]
    }
  ];

  const handleReadPost = (post: any) => {
    setSelectedPost(post);
    setDialogOpen(true);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge about cybersecurity, web development, and technology trends
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Featured
                      </Badge>
                      <Badge variant="outline">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl leading-tight hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button 
                        variant="hero" 
                        size="sm" 
                        className="group"
                        onClick={() => handleReadPost(post)}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
                <div className="lg:col-span-1 bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Featured Article</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:shadow-elegant hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-primary/5 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 px-2 group"
                      onClick={() => handleReadPost(post)}
                    >
                      Read
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
        </div>

        <BlogPostDialog 
          post={selectedPost}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => scrollToSection('#blog')}
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
