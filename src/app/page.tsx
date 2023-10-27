import Card from "./components/Card"
import EQCard from "./components/EQCard"
import EQCard2 from "./components/EQCard2"
import Header from "./components/Header"
import Header2 from "./components/Header2"
import Header3 from "./components/Header3"
import Navbar from "./components/Navbar"
import Signature from "./components/Signature"
import Card2 from "./components/Card2"
import Footer from "./components/Footer"
import Work from "./components/Work"
import Self from "./components/Self"


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
      <EQCard />
      <Card />
      <Header2 />
      <Self />
      <EQCard2 />
      <Header3 />
      <Signature />
      <Work />
      <Card2 />
      <Footer />
    </div>
  )
}
