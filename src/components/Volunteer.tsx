import Image from "next/image";
import { Container } from "./Container";

interface Volunteer {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const volunteers = [
  {
    name: "Pavel Puclla",
    role: "Fundador de Se.Colectiva",
    image: "/images/volunteer_1.jpg",
    linkedin: "https://www.linkedin.com/in/pavelpool/",
  },
  {
    name: "Catherine Vargas",
    role: "Ingeniera de Sistemas",
    image: "/images/volunteer_2.png",
    linkedin: "https://www.linkedin.com/in/catherine-vargas-huaman-6608b517a/",
  }
];


  
  export function Volunteer() {
    return (
      <section id="volunteer" className="py-5 sm:py-10" style={{ backgroundColor: "#0334ab" }}>
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-12 font-display text-5xl font-medium text-blue-500">Voluntarios</h2>
            <p className="mt-3 text-2xl text-white">Gracias a nuestros voluntarios</p>
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              {volunteers.map((volunteer, index) => (
                <VolunteerCard key={`volunteer-${index}`} volunteer={volunteer} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }
  
  function VolunteerCard({ volunteer }: { volunteer: Volunteer }) {
    return (
        <article className="w-full max-w-[320px] bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-6 text-left">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
            <Image
              src={volunteer.image}
              alt={volunteer.name}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">{volunteer.name}</h3>
          <p className="text-sm sm:text-base text-slate-600 mb-4">{volunteer.role}</p>
          <a
            href={volunteer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-cyan-600 transition-colors"
          >
            LinkedIn
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4m0 0v4m0-4L10 14m-4 3h12" />
            </svg>
          </a>
        </article>
    );
  }