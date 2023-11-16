import Jumbotron from "./components/jumbotron";
import Pagecontent from "./components/pagecontent";
import Pengalamankerja from "./components/pengalamankerja";
import Skillabout from "./components/skillabout";

export default function Page() {
  return (
    <Pagecontent>
      <Jumbotron />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px,auto] p-5 max-w-5xl mx-auto mt-5 md:gap-10">
        <Skillabout />
        <Pengalamankerja />
      </div>
    </Pagecontent>
  )
}
