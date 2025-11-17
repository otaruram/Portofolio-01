import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    description: "Untuk HRD & Perekrut",
    url: "https://www.linkedin.com/in/otaruram",
    icon: Linkedin,
    color: "bg-[#0077B5]",
  },
  {
    name: "GitHub",
    description: "Untuk Senior Engineer yang mau lihat kode",
    url: "https://github.com/otaruram",
    icon: Github,
    color: "bg-foreground",
  },
];

const Sosmed = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4 border-b-4 border-primary pb-2 inline-block">
          Kontak Kunci
        </h1>
        <p className="text-lg text-muted-foreground mt-6">
          Gak usah banyak-banyak. Cuma 3 yang paling penting buat engineer.
        </p>
      </div>

      <div className="space-y-6">
        {socialLinks.map((social, index) => (
          <Card
            key={index}
            className="p-8 border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] transition-all"
          >
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-lg ${social.color}`}>
                <social.icon className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">{social.name}</h2>
                <p className="text-muted-foreground">{social.description}</p>
              </div>
              <Button
                asChild
                size="lg"
                variant="default"
                className="shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  Connect
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 border-2 border-secondary bg-secondary/20 text-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Sedang Aktif Mencari Peluang</h3>
          <p className="text-lg text-muted-foreground">
            Saya siap membawa disiplin, keahlian teknis, dan dedikasi saya ke tim Anda.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="mailto:okitarunaramadhan@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              okitarunaramadhan@gmail.com
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Sosmed;
