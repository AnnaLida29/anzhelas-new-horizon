import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Plans from "@/components/Plans";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Plans />
        <Contacts />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
