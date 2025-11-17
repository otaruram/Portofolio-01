import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube } from "lucide-react";

const playlists = [
  {
    title: "Python Fundamentals",
    description:
      "HackerRank solutions, fokus List (analogi 'Paket & Alamat'), debugging IndentationError.",
    url: "https://youtube.com/playlist?list=PL2Ea0XTJKmP3jGyETxEyB4eoqZRFoAW7D",
    icon: "🐍",
  },
  {
    title: "Arsitektur Teknis",
    description: "Bedah Arsitektur Berasku (TF.js), OtLogo, dan Intinya Aja Dongs (NLP).",
    videos: [
      {
        title: "Bedah Teknis Berasku (Hybrid AI)",
        url: "https://youtu.be/zYCFaVWXtHg",
      },
      {
        title: "Arsitektur Berasku (High-Level)",
        url: "https://youtu.be/t3zW5rJGO5o",
      },
      {
        title: "Kolaborasi TF.js",
        url: "https://youtu.be/OgaNHqybEQk",
      },
      {
        title: "Arsitektur Intinya Aja Dongs",
        url: "https://youtu.be/aUxS8LngqEs",
      },
      {
        title: "Fundamental Deep Learning",
        url: "https://youtu.be/nQJY0tjtcZE",
      },
      {
        title: "Arsitektur Singkat Aplikasi Cuaca",
        url: "https://youtu.be/bK6jXNxvuN8",
      },
    ],
    icon: "🏗️",
  },
  {
    title: "Random",
    description: "Video lain-lain yang menarik.",
    videos: [
      {
        title: "Aplikasi Sederhana Java",
        url: "https://youtu.be/NLgk5gwwU0s",
      },
      {
        title: "Oop Fundamental",
        url: "https://youtu.be/4JaPlYNm2ec",
      },
    ],
    icon: "🎲",
  },
];

const Channel = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <Youtube className="h-12 w-12 text-destructive" />
          <h1 className="text-5xl font-bold border-b-4 border-primary pb-2 inline-block">
            Channel YouTube
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mt-6">
          Kopi Susu Academy ☕ — Skill komunikasi lewat teaching & technical breakdown.
        </p>
      </div>

      <div className="space-y-6">
        {playlists.map((playlist, index) => (
          <Card
            key={index}
            className="p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{playlist.icon}</span>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{playlist.title}</h2>
                  <p className="text-muted-foreground mb-4">{playlist.description}</p>

                  {playlist.videos ? (
                    <div className="space-y-2">
                      {playlist.videos.map((video, i) => (
                        <Button
                          key={i}
                          asChild
                          variant="outline"
                          className="w-full justify-start shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
                        >
                          <a href={video.url} target="_blank" rel="noopener noreferrer">
                            <Youtube className="mr-2 h-4 w-4" />
                            {video.title}
                            <ExternalLink className="ml-auto h-4 w-4" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <Button
                      asChild
                      variant="default"
                      className="shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
                    >
                      <a href={playlist.url} target="_blank" rel="noopener noreferrer">
                        Lihat Playlist
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-2 border-secondary bg-secondary/20 text-center">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Subscribe di YouTube</h3>
          <Button asChild variant="secondary" size="lg">
            <a
              href="https://youtube.com/@kopisusubi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2 h-5 w-5" />
              @kopisusubi
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Channel;
