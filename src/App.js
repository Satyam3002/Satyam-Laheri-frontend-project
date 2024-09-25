import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Footer from './components/Footer';
import Testimonial from './components/Testimonials';
import Projects from './components/Projects';
import Leader from './components/leader';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero1 />
        <Hero2 />
        <Projects />
        <Leader />
        <Testimonial />
        <Footer />
        
    </div>
  );
}

export default App;
