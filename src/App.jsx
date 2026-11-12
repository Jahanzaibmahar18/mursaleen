import Footer from "./components/common/Footer.jsx";
import Navbar from "./components/common/Navbar.jsx";
import Whatsapp from "./components/common/Whatsapp.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Home from "./components/pages/Home.jsx";
import Services from "./components/pages/Services.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;