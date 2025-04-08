import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
import burger from "./ladoble.jpg";

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center mb-4">
            <Image
              src={logo}
              alt="Burgers By Lalo Logo"
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            El secreto está en la{" "}
            <span className="text-[#FB4F14]">mordida</span>
          </h1>

          <Link
            href="#menu"
            className="mt-8 px-8 py-3 bg-[#FB4F14] text-white font-bold rounded-full hover:bg-[#ff5757] transition-colors duration-300"
          >
            Ver Menú
          </Link>
        </div>
      </div>

      {/* Hero image with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="w-full h-full relative">
          {/* Placeholder for hero image */}
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="text-gray-500 text-lg">
              <Image
                src={burger}
                alt="Burgers By Lalo Logo"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
