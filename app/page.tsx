import Hero from "../components/hero";
import MenuImage from "../components/menu-image";
import Contacto from "../components/contacto";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <MenuImage />
      <Contacto />
      <Footer />
    </main>
  );
}
