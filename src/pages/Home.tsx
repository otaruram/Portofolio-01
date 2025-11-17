import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-2/5">
            <img
              src={heroImage}
              alt="Oki Taruna Ramadhan"
              className="w-full aspect-[4/5] object-cover border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
                Yo, gue Oki
              </h1>
              <p className="text-2xl font-medium text-primary">'Kopi Susu'</p>
            </div>
            <div className="space-y-4">
              <Badge variant="secondary" className="text-base px-4 py-2">
                ML Engineer
              </Badge>
              <p className="text-lg leading-relaxed">
                6+ tahun di Admin/Sekretaris (PT Dirgantara Indonesia), sekarang banting setir jadi <strong>Machine Learning Engineer</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b-4 border-primary pb-2 inline-block">
          Ringkasan Profesional
        </h2>
        <Card className="p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
          <p className="text-lg leading-relaxed">
            Saya bukan hanya melatih model; saya terbukti membangun{" "}
            <strong>sistem AI end-to-end</strong> yang memecahkan masalah. Saya menguasai
            arsitektur full-stack, dari <strong>Sisi-Klien (TF.js)</strong> hingga{" "}
            <strong>Sisi-Server (Node.js & LLM)</strong>. Saya adalah pemecah masalah yang
            proaktif dan siap memberikan dampak.
          </p>
        </Card>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b-4 border-primary pb-2 inline-block">
          Pengalaman Profesional
        </h2>
        <Card className="p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Profesional Operasional</h3>
            <p className="text-sm text-muted-foreground">Penuh Waktu · Feb 2019 - Sekarang · 6 thn 10 bln</p>
            <p className="text-sm font-medium text-primary">PT Dirgantara Indonesia (Indonesian Aerospace)</p>
            <p className="text-sm text-muted-foreground">Bandung, Jawa Barat, Indonesia · On-site</p>
            <p className="text-muted-foreground mt-3">
              Sebagai profesional operasional berpengalaman, saya mengawasi kelancaran operasional dan kesejahteraan karyawan di dalam perusahaan, 
              memastikan pelaksanaan tugas yang lancar dan berkontribusi signifikan terhadap kesuksesan perusahaan.
            </p>
            <div className="mt-4">
              <p className="font-medium mb-2">Tugas dan Tanggung Jawab:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Manajemen Fasilitas: Mengelola fasilitas kantor, memastikan lingkungan kerja yang aman, efisien, dan terawat dengan baik.</li>
                <li>Inventaris dan Pengadaan: Mengawasi manajemen inventaris, pengadaan barang dan jasa, serta negosiasi kontrak untuk memastikan efektivitas biaya dan kualitas.</li>
                <li>Anggaran dan Manajemen Keuangan: Mengembangkan dan mengelola anggaran, melacak pengeluaran, dan memastikan kepatuhan keuangan untuk mendukung tujuan keuangan perusahaan.</li>
                <li>Perjalanan Dinas Karyawan: Mengatur perjalanan dinas karyawan, memastikan pengaturan perjalanan yang tepat waktu dan efisien biaya yang memenuhi kebijakan dan prosedur perusahaan.</li>
                <li>Kesejahteraan Karyawan: Membangun lingkungan kerja yang positif, mendukung kesejahteraan karyawan dan memastikan kepatuhan terhadap kebijakan dan prosedur SDM.</li>
              </ol>
            </div>
          </div>
        </Card>
      </section>

      {/* Organizations */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b-4 border-primary pb-2 inline-block">
          Organisasi
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">POKJA 5R K3LH</h3>
              <p className="text-sm text-muted-foreground">Anggota · Feb 2019 - Sekarang</p>
              <p className="text-sm font-medium text-primary">PT Dirgantara Indonesia (Indonesian Aerospace)</p>
              <p className="text-muted-foreground mt-3">
                Divisi Kesehatan, Keselamatan, dan Lingkungan (K3LH), juga dikenal sebagai POKJA 5R, bertanggung jawab untuk memastikan 
                bahwa divisi SE 4000 menjaga keselamatan, kesehatan, dan atmosfer yang ramah lingkungan. Tugas mereka 
                termasuk identifikasi risiko, membuat rencana K3LH, pemantauan, mengembangkan program K3LH, dan komunikasi 
                yang efektif dengan divisi SE 4000. Semua ini dilakukan dengan profesionalisme dan etika yang tinggi.
              </p>
            </div>
          </Card>
          <Card className="p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Co-Founder Forsip</h3>
              <p className="text-sm text-muted-foreground">Sekretariat · Jun 2024 - Sekarang</p>
              <p className="text-sm font-medium text-primary">Universitas Terbuka</p>
              <p className="text-muted-foreground mt-3">
                Organisasi ini dibentuk karena keresahan dari mahasiswa UT Bandung akan maraknya penipuan 
                informasi baik yang merugikan secara material maupun non material. Forum ini dibentuk 
                untuk mewadahi dan membantu mahasiswa UT khususnya MABA, agar terhindar dari segala macam bentuk 
                kerugian yang dapat mencemarkan nama baik UT Bandung.
              </p>
            </div>
          </Card>
          <Card className="p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">UKM PEKA</h3>
              <p className="text-sm text-muted-foreground">Staff HUMAS · Jan 2024 - Sekarang</p>
              <p className="text-sm font-medium text-primary">Universitas Terbuka</p>
              <p className="text-muted-foreground mt-3">
                Organisasi Akademik adalah sebuah badan yang bertujuan untuk mengkaji, mengembangkan, dan menyebarluaskan pengetahuan dalam berbagai 
                bidang. Di dalamnya, para ahli berkolaborasi dan berbagi pemahaman, serta melakukan proyek-proyek penelitian.
              </p>
            </div>
          </Card>
          <Card className="p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Baprekraf Developer Day</h3>
              <p className="text-sm text-muted-foreground">Peserta · Mar 2024 - Mar 2024</p>
              <p className="text-sm font-medium text-primary">Dicoding Academy</p>
              <p className="text-muted-foreground mt-3">
                Acara yang diselenggarakan oleh Kementerian Parekraf dengan tujuan mengumpulkan seluruh 
                Developer yang ada di Indonesia dengan kuota terbatas.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Hobbies */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold border-b-4 border-secondary pb-2 inline-block">
          Di Luar Kode
        </h2>
        <Card className="p-6 border-2 border-foreground bg-secondary/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
          <p className="text-lg">
            🎮 Main game &nbsp;|&nbsp; 📚 Baca komik &nbsp;|&nbsp; 🧠 Bikin analogi aneh buat
            codingan (biar gak burnout)
          </p>
        </Card>
      </section>
    </div>
  );
};

export default Home;
