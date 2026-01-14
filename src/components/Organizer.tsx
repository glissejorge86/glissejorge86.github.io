import Image from "next/image";
import { Container } from "./Container";

interface Organizer {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const organizers: Organizer[] = [
  {
    name: "Glisse Jorge",
    role: "Backend Java Software Engineer",
    image: "/images/7.png",
    linkedin: "https://www.linkedin.com/in/glissejorge/",
  },
  {
    name: "Sihomara Ochoa",
    role: "Msc. Ing. Software",
    image: "/images/12.png",
    linkedin: "https://www.linkedin.com/in/sihomara-sandy-ochoa-cisneros/",
  },
];

export function Organizer() {
  return (
    <section id="organizer" className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50">
      <Container>
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Organizadoras
            </h2>
            <p className="text-2xl text-slate-700">
              Equipo organizador
            </p>
          </div>

          {/* Organizers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-10 max-w-4xl mx-auto">
            {organizers.map((organizer, index) => (
              <OrganizerCard key={`organizer-${index}`} organizer={organizer} />
            ))}
          </div>

          {/* Call to action or thank you message */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-cyan-100 max-w-2xl">
              <p className="text-lg text-slate-700 mb-4">
                💙 Gracias a estas increíbles mujeres por hacer posible este evento y por su dedicación 
                a construir una comunidad tech más diversa e inclusiva.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <span>Women Techmakers</span>
                <span className="text-cyan-500">•</span>
                <span>Ayacucho</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function OrganizerCard({ organizer }: { organizer: Organizer }) {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* Image Container with WTM styling */}
      <div className="relative mb-6">
        {/* Animated gradient border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300 animate-pulse"></div>
        
        {/* Main border */}
        <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="rounded-full p-1 bg-white">
            <Image
              className="rounded-full object-cover"
              src={organizer.image}
              alt={organizer.name}
              width={200}
              height={200}
              priority
            />
          </div>
        </div>

        {/* WTM Badge */}
        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          WTM Ambassador
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
          {organizer.name}
        </h3>
        <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
          {organizer.role}
        </p>
        
        {/* LinkedIn Link */}
        <a 
          href={organizer.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}