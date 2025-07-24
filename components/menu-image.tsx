import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import menu1 from "./menu1.jpg";
import menu2 from "./menu2.jpg";

export default function MenuImage() {
  return (
    <section id="menu" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-[#FB4F14]">Nuestro</span> Menú
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* Vertical stack of menu images */}
          <div className="space-y-6 mb-8">
            {/* First menu image */}
            <div className="rounded-lg shadow-md overflow-hidden">
              <Image
                src={menu1}
                alt="Burgers By Lalo Menu - Page 1"
                width={800}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Second menu image */}
            <div className="rounded-lg shadow-md overflow-hidden">
              <Image
                src={menu2}
                alt="Burgers By Lalo Menu - Page 2"
                width={800}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg mb-2">
              ¿Preguntas? Contáctanos por WhatsApp:
            </p>
            <Link
              href="https://wa.me/5217779984257"
              className="inline-flex items-center text-xl font-bold text-[#FB4F14] hover:text-[#ff5757]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              777 998 4257
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
