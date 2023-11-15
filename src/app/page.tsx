import Jumbotron from "./components/jumbotron";
import Pagecontent from "./components/pagecontent";
import Pengalamankerja from "./components/pengalamankerja";

export default function Page() {
  return (
    <Pagecontent>
      <Jumbotron />
      <Pengalamankerja />
    </Pagecontent>
  )
}
