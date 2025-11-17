import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const articles = [
  {
    title: "Bagaimana Cara Memastikan Strategi Bisnis Berjalan dengan Perubahan Trend di Masa Depan",
    excerpt: "Analisis strategi bisnis yang adaptif terhadap perubahan trend masa depan.",
    url: "https://medium.com/@imardzuki61/bagaimana-cara-memastikan-strategi-bisnis-berjalan-dengan-perubahan-trend-di-masa-depan-fc0a11847a65",
    date: "2024",
  },
  {
    title: "Analisis Model Porter: Memahami Faktor-Faktor yang Mempengaruhi Kompetitif Bisnis",
    excerpt: "Deep dive ke dalam model Porter dan faktor kompetitif dalam bisnis.",
    url: "https://medium.com/@imardzuki61/analisis-model-porter-memahami-faktor-faktor-yang-mempengaruhi-kompetitif-bisnis-28ec7d1bcae5",
    date: "2024",
  },
  {
    title: "Menulis Ringkasan Eksekutif yang Efektif: Tips untuk Membangun Kredibilitas Bisnis",
    excerpt: "Panduan praktis menulis ringkasan eksekutif yang membangun kredibilitas.",
    url: "https://medium.com/@imardzuki61/menulis-ringkasan-eksekutif-yang-efektif-tips-untuk-membangun-kredibilitas-bisnis-4751c8fcbe51",
    date: "2024",
  },
  {
    title: "Sosio-Teknikal: Kunci Mengelola Sistem Informasi yang Efektif",
    excerpt: "Memahami aspek sosio-teknikal dalam pengelolaan sistem informasi.",
    url: "https://medium.com/@imardzuki61/sosio-teknikal-kunci-mengelola-sistem-informasi-yang-efektif-010503a1c0c8",
    date: "2024",
  },
  {
    title: "Digitalisasi Merusak Generasi?",
    excerpt: "Analisis mendalam tentang dampak digitalisasi terhadap generasi muda.",
    url: "https://medium.com/@imardzuki61/digitalisasi-merusak-generasi-a78b4f7114b2",
    date: "2024",
  },
  {
    title: "Dampak Digitalisasi Terhadap Lapangan Pekerjaan",
    excerpt: "Eksplorasi perubahan landscape pekerjaan di era digital.",
    url: "https://medium.com/@imardzuki61/dampak-digitalisasi-terhadap-lapangan-pekerjaan-a5ad038ba897",
    date: "2024",
  },
];

const Artikel = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4 border-b-4 border-primary pb-2 inline-block">
          Artikel
        </h1>
        <p className="text-lg text-muted-foreground mt-6">
          Tulisan gue di Medium. Klik untuk baca selengkapnya →
        </p>
      </div>

      <div className="space-y-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all"
          >
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1 space-y-3">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                  <Button
                    asChild
                    variant="default"
                    className="shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
                  >
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Baca di Medium
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-2 border-secondary bg-secondary/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Lihat Semua Artikel</h3>
          <Button asChild variant="secondary" size="lg">
            <a href="https://medium.com/@imardzuki61" target="_blank" rel="noopener noreferrer">
              Medium Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Artikel;
