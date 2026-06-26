import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnalyzeCard from "./components/AnalyzeCard";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import Features from "./components/Features";
import BackgroundGlow from "./components/BackgroundGlow";

function App() {
  return (
    <>
  <BackgroundGlow />

  <Navbar />

  <main className="max-w-7xl mx-auto px-6">
    <Hero />
    <Features />
    <AnalyzeCard />
    <EmptyState />
  </main>

  <Footer />
</>
  );
}

export default App;