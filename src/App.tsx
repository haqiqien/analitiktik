import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import TechStack from './components/TechStack';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="bg-ivory text-oxford font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <TechStack />
      <CTAFooter />
    </div>
  );
}

export default App;
