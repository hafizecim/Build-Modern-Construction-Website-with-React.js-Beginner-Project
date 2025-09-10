import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import WhyChooseUs from "./Sections/WhyChooseUs";
import "swiper/css"
import Services from "./Sections/Services";
import Portfolio from "./Sections/Portfolio";
import Team from "./Sections/Team";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Team />
    </>
  );
}

export default App;
