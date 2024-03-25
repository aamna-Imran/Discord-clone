import Belong from "./components/Belong";
import Chill from "./components/Chill";
import Fandom from "./components/Fandom";
import Footer from "./components/Footer";
import Hanging from "./components/Hanging";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Star from "./components/Star";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Belong/>
    <Hanging/>
    <Fandom/>
    <Chill/>
    <Star/>
    <Footer/>
    </>
  );
}
