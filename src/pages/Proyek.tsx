import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BERASKU",
    subtitle: "Arsitektur Hybrid AI",
    description:
      "End-to-End Computer Vision System. Hybrid AI menggabungkan TensorFlow.js dengan Smart Validation Rules Engine. Ini adalah inti dari sistem Risk & Fraud Detection di dunia nyata.",
    tags: ["TensorFlow.js", "Computer Vision", "React", "Client-Side AI"],
    demoUrl: "https://berasku-zhkp.vercel.app/",
    githubUrl: "https://github.com/otaruram/Berasku",
    videoUrl: "https://youtu.be/zYCFaVWXtHg",
  },
  {
    title: "OTLOGO",
    subtitle: "Aplikasi Full-Stack AI",
    description:
      "Server-Side AI Generator. Node.js backend mengorkestrasi API model generatif (Replicate) dan mengelola data di Supabase (PostgreSQL) dengan Prisma ORM. Bukti kemampuan full-stack.",
    tags: ["Node.js", "Supabase", "Prisma", "Replicate API"],
    videoUrl: "https://youtu.be/AmeXM55LgL4",
    githubUrl: "https://github.com/otaruram/OtLogo",
  },
  {
    title: "INTINYA AJA DONGS",
    subtitle: "Pipeline NLP/LLM",
    description:
      "YouTube Q&A Platform. Pipeline NLP end-to-end: ekstraksi transkrip (AssemblyAI) → database interaktif → LLM (OpenAI). Fondasi untuk chat-with-your-data.",
    tags: ["NLP", "OpenAI", "AssemblyAI", "Python"],
    videoUrl: "https://youtu.be/zV_ycoTFyhc",
    githubUrl: "https://github.com/otaruram/Capstone-Project-02",
  },
  {
    title: "SIMPLE",
    subtitle: "Proyek Random",
    description:
      "Proyek eksperimental dan pembelajaran. Eksplorasi berbagai teknologi dan konsep dalam pengembangan web modern.",
    tags: ["React", "Web Development", "Experimental"],
    demoUrl: "https://prj-kho2vgal-frontend.vercel.app/",
  },
];

const Proyek = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4 border-b-4 border-primary pb-2 inline-block">
          Proyek Unggulan
        </h1>
        <p className="text-lg text-muted-foreground mt-6">
          Bukti kalau gue "Gak Asal Yapping" — Sistem AI end-to-end yang fungsional.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="p-8 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.4)] transition-all"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-xl text-primary font-medium mb-4">{project.subtitle}</p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-sm px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {project.demoUrl && (
                  <Button
                    asChild
                    variant="default"
                    className="shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    asChild
                    variant="secondary"
                    className="shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
                {project.videoUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
                  >
                    <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                      Video Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-2 border-secondary bg-secondary/20 text-center">
        <p className="text-lg mb-4">
          <strong>X-Factor:</strong> Inisiatif & Kepemimpinan (Co-Founder Forsip UT Bandung)
        </p>
      </Card>
    </div>
  );
};

export default Proyek;
