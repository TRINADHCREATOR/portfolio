import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

interface BlogPostDialogProps {
  post: BlogPost | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BlogPostDialog = ({ post, open, onOpenChange }: BlogPostDialogProps) => {
  if (!post) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur border-border/50">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{post.category}</Badge>
            {post.featured && (
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Featured
              </Badge>
            )}
          </div>
          <DialogTitle className="text-2xl lg:text-3xl leading-tight text-left">
            {post.title}
          </DialogTitle>
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
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs bg-primary/5 text-primary/80">
                {tag}
              </Badge>
            ))}
          </div>
        </DialogHeader>
        
        <div className="mt-6 prose prose-invert max-w-none">
          <div className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {post.excerpt}
          </div>
          
          <div className="space-y-6 text-foreground leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostDialog;