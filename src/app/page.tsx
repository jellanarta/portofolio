import Detailprofil from "./components/detailprofil";
import Footer from "./components/footer";
import Jumbotron from "./components/jumbotron";
import Layanan from "./components/layanan";
import Projects from "./components/projects";
import Lokasimaps from "./components/lokasimaps";
import Pagecontent from "./components/pagecontent";
import Pengalamankerja from "./components/pengalamankerja";
import Skilldankeahlian from "./components/skilldankeahlian";

export default function Page() {
  return (
    <Pagecontent>
      <Jumbotron />
      <Layanan />
      <Projects />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[350px,1fr] px-6 max-w-5xl mx-auto mt-8 md:gap-8 pb-10">
        <div className="space-y-8">
          <div className="block md:hidden">
            <Pengalamankerja />
          </div>
          <Detailprofil />
          <Skilldankeahlian />
        </div>
        <div className="space-y-8">
          <div className="hidden md:block">
            <Pengalamankerja />
          </div>
          <Lokasimaps />
        </div>
      </div>
      <Footer />
    </Pagecontent>
  )
}

