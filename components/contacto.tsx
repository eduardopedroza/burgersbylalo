import Link from "next/link";
import { MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Contacto() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#FB4F14]">Encuéntranos</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-[#FB4F14] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1 text-[#ff5757]">
                    Dirección
                  </h3>
                  <p className="text-gray-700">
                    Calle Nueva Inglaterra 213, Cuernavaca
                  </p>
                  <p className="text-gray-500 text-sm">
                    (Frente a Pingos Club)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-[#FB4F14] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1 text-[#ff5757]">
                    Horario
                  </h3>
                  <p className="text-gray-700">Martes - Sabado: 12PM - 8PM</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-xl mb-4 text-[#ff5757]">
                Síguenos
              </h3>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/burgersbylalo/"
                  className="w-12 h-12 bg-[#FB4F14] text-white rounded-full flex items-center justify-center hover:bg-[#ff5757] transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61573954072093"
                  className="w-12 h-12 bg-[#FB4F14] text-white rounded-full flex items-center justify-center hover:bg-[#ff5757] transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
