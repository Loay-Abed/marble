import "./App.css";
import About from "./componets/About";
import ContactForm from "./componets/ContactForm";
import Coursle from "./componets/Coursle";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbars";
import Slider from "./componets/Slider";
import whatsapp from './whatsappICon.png'
import Menu from './componets/Menu';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Coursle />
      <About />
      <Slider />
      <Menu/>
      <ContactForm />
      <Footer />
      <div className="WhatsApp">
        <a target="_blank" href="https://wa.me/message/MOAGCI45V546B1">
          <img src={whatsapp} alt="Whats App Icon" />
          <span>Call Us</span>
        </a>
      </div>
    </div>
  );
}

export default App;
