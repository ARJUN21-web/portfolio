import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  ExternalLinkIcon,
  DownloadIcon,
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  BrainCircuitIcon,
  CodeIcon,
  DatabaseIcon,
  PaletteIcon,
  ServerIcon,
  MonitorIcon,
} from "lucide-react";

export default function Index() {
  const handleEmailClick = (e: React.MouseEvent) => {
    const email = 'dnagasathvik@gmail.com';
    const subject = 'Contact from Portfolio';
    const body = 'Hi Damasani,\n\nI found your portfolio and would like to connect.\n\nBest regards,';

    // Try to open default email client
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Fallback: Copy email to clipboard if mailto doesn't work
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email address copied to clipboard: ${email}`);
      }).catch(() => {
        // Final fallback: show email in alert
        alert(`Please email me at: ${email}`);
      });
    }
  };

  const downloadResume = () => {
    const resumeContent = `DAMASANI NAGA SATHVIK
Aspiring Particle Physicist
Tirupati, India

Email: dnagasathvik@gmail.com
Phone: +91 7675975489
GitHub: https://github.com/sathvik-1506
LinkedIn: https://www.linkedin.com/in/damasani-nagasathvik-810753332

ABOUT:
I am a Computer Science student and an aspiring astrophysicist. Since childhood, I've been passionate about particle physics and have spent a lot of time exploring and learning about it. My curiosity drives me to continuously seek knowledge and grow every day. My ultimate goal is to contribute to groundbreaking research in astrophysics and particle physics, pushing the boundaries of what we know about the universe.

SKILLS:
• HTML/CSS
• Python
• Java
• C (Current)
• Git/GitHub

INTERESTS:
Astrophysics and Particle Physics

STATUS:
Open to Work - Available for opportunities`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Damasani_Naga_Sathvik_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const skills = [
    { name: "HTML/CSS", icon: CodeIcon, category: "Frontend" },
    { name: "Python", icon: BrainCircuitIcon, category: "Programming" },
    { name: "Java", icon: BrainCircuitIcon, category: "Programming" },
    { name: "C (Current)", icon: BrainCircuitIcon, category: "Programming" },
    { name: "Git/GitHub", icon: CodeIcon, category: "Tools" },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS showcasing my skills and projects.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/sathvik-1506",
      live: "#",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Portfolio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
            <Button variant="outline" size="sm" onClick={downloadResume}>
              <DownloadIcon className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-6 flex items-center justify-center">
              <UserIcon className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm{" "}
              <span className="text-primary">Damasani Naga Sathvik</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Aspiring Particle Physicist
            </p>
            <div className="flex items-center justify-center text-muted-foreground mb-8">
              <MapPinIcon className="h-4 w-4 mr-1" />
              <span>Tirupati,India</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate in acquiring knowledge relentlessly. Always enthuse to
            research in various fields of physics with the skills I have in
            computation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" onClick={handleEmailClick}>
              <MailIcon className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={downloadResume}>
              <DownloadIcon className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a
                href="https://github.com/sathvik-1506"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a
                href="https://www.linkedin.com/in/damasani-nagasathvik-810753332"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12" onClick={handleEmailClick}>
              <MailIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I am a Computer Science student and an aspiring
                  astrophysicist. Since childhood, I've been passionate about
                  particle physics and have spent a lot of time exploring and
                  learning about it. My curiosity drives me to continuously seek
                  knowledge and grow every day. My ultimate goal is to
                  contribute to groundbreaking research in astrophysics and
                  particle physics, pushing the boundaries of what we know about
                  the universe.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="font-medium">
                      Computer Science Student
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium">Fresher</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interests:</span>
                    <span className="font-medium">
                      Astrophysics and Particle Physics
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="secondary">Open to Work</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card border-y shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-background"
                >
                  <CardContent className="p-6 text-center">
                    <skill.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-medium mb-1">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <GithubIcon className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLinkIcon className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/sathvik-1506"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-5 w-5 mr-2" />
                  View All Projects on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations,
              or just chatting about technology. Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8 text-center">
                  <MailIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">
                    dnagasathvik@gmail.com
                  </p>
                  <Button variant="outline" onClick={handleEmailClick}>
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <PhoneIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-4">
                    +91 7675975489
                  </p>
                  <Button variant="outline" asChild>
                    <a href="tel:+917675975489">Call Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="h-14 w-14" asChild>
                <a
                  href="https://github.com/sathvik-1506"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-14 w-14" asChild>
                <a
                  href="https://www.linkedin.com/in/damasani-nagasathvik-810753332"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-14 w-14" onClick={handleEmailClick}>
                <MailIcon className="h-7 w-7" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Damasani Naga Sathvik.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
