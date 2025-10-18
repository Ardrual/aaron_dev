import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m Aaron
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            CS BS from UC Davis
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <a href="https://github.com/Ardrual" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/aaron-potter-611048344/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ajpotter6@gmail.com" className="text-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              This is my website. I graduated from UC Davis with a degree in Computer Science in 2025. I spend way too much time reading, and love learning about and using new technologies.
              I'm especially interested in AI/ML (though isn't everyone these days?), philosophy, and music.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Gridmind RAG Assistant</CardTitle>
                <CardDescription>AI-powered document Q&A system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Built a RAG pipeline using LangChain, Gemini embeddings, and Chroma to answer domain-specific
                  questions with citations. Features FastAPI backend with pydantic schemas and React frontend.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/Ardrual/gridmind" className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Raspberry Pi Homelab</CardTitle>
                <CardDescription>Self-hosted infrastructure cluster</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Multi-node cluster with Docker, PostgreSQL/Redis, Pi-hole DNS, VPN access, and automated backups.
                  Includes self-hosted Git repositories, Jenkins CI/CD, and container registry.
                </p>
                <div className="flex gap-2">
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>BlakeGPT</CardTitle>
                <CardDescription>Custom GPT-2 language model</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Trained a custom GPT-2 variant (6 layers, 1.9M parameters) on William Blake&apos;s works.
                  Implemented custom BPE tokenizer and training pipeline using Hugging Face Transformers.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://huggingface.co/Ardrual/blake-model" className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          
          <Button size="lg" asChild>
            <a href="mailto:ajpotter6@gmail.com" className="flex items-center gap-2 mx-auto w-fit">
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Aaron Potter. Built with Next.js, Tailwind CSS, and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  )
}
