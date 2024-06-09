import { Hero } from "./pages/hero/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  );
}
