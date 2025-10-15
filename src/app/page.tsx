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
            Full Stack Developer | Building Amazing Web Experiences
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
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
              I&apos;m a passionate developer with experience in building modern web applications. 
              I love creating clean, efficient, and user-friendly solutions.
            </p>
            <p>
              My tech stack includes Next.js, React, TypeScript, Tailwind CSS, and more. 
              I&apos;m always learning and exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-2xl font-bold">Next.js</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-2xl font-bold">React</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-2xl font-bold">TypeScript</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background">
              <div className="text-2xl font-bold">Tailwind</div>
            </div>
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
                <CardTitle>Project One</CardTitle>
                <CardDescription>A modern web application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Built with Next.js and TypeScript. Features include real-time updates, 
                  responsive design, and seamless user experience.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Two</CardTitle>
                <CardDescription>Full-stack solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  End-to-end application with authentication, database integration, 
                  and modern UI components.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Three</CardTitle>
                <CardDescription>Creative portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Showcase of design and development skills with interactive elements 
                  and smooth animations.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
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
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:contact@example.com" className="flex items-center gap-2 mx-auto w-fit">
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Aaron. Built with Next.js, Tailwind CSS, and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  )
}
