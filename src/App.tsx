import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <SocialProof />
      <Features />
      <Showcase />
      <CallToAction />
      <Footer />
    </div>
  );
}
