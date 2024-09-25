import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Footer from './components/Footer';
import Testimonial from './components/Testimonials';
import Projects from './components/Projects';
import Leader from './components/leader';
import Service from './components/Services';
import Bottom from './components/Bottom';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero1 />
        <Hero2 />
        <Projects />
        <Service />
        <Leader />
        <Testimonial />
        <Footer />
        <Bottom />
        
    </div>
  );
}

export default App;
