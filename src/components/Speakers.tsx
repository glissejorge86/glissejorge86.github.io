import { Container } from "./Container";
import Image from "next/image";

const speakers = [
  {
    name: "Lesly Samaritano",
    cargo: "Flutter Developer | Mobile Developer | WTM Ambassador",
    photo: "/images/speaker_1.jpeg",
    linkedin: "https://www.linkedin.com/in/leslysamaritano/",
  },
  {
    name: "Heber Munaylla",
    cargo: "Fullstack Developer y Data Scientist",
    photo: "/images/speaker_2.jpg",
    linkedin: "https://www.linkedin.com/in/heber-munaylla-gutierrez/",
  },
  {
    name: "Alicia Acevedo",
    cargo: "Gerente de Proyectos en Data e IA, Banco Santander Perú",
    photo: "/images/speaker_3.jpeg",
    linkedin: "https://www.linkedin.com/in/aliciaacevedoavila/",
  },
  {
    name: "Aldo Vega",
    cargo: "Director, INCUBA UNSCH",
    photo: "/images/speaker_4.png",
    linkedin: "https://www.linkedin.com/in/aldo-vega-arroyo/",
  },
  {
    name: "Alanis González",
    cargo: "Coordinadora de redes autónomas, Entel Perú",
    photo: "/images/speaker_5.jpeg",
    linkedin: "https://www.linkedin.com/in/alanisgonzalez/",
  },
  {
    name: "Nefi Arroyo",
    cargo: "Líder de Comunidades Tech",
    photo: "/images/speaker_6.png",
    linkedin: "https://www.linkedin.com/in/nefiarroyo/",
  },
  {
    name: "Mar García",
    cargo: "Founder, Hope en Tecnologías",
    photo: "/images/speaker_7.jpg",
    linkedin: "https://www.linkedin.com/in/margarcialiderazgo/",
  },
];

export function Speakers() {
  return (
    <section id="speakers" className="relative py-12 sm:py-20 overflow-hidden" style={{ backgroundColor: "#0334ab" }}>
      <div className="absolute -top-10 sm:-top-20 left-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 bg-wtm-light"></div>
      <div className="absolute top-20 sm:top-40 right-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 bg-wtm-mint"></div>
      <div className="hidden sm:block absolute -bottom-32 left-1/2 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 bg-wtm-light"></div>

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-wtm-light to-wtm-teal mb-3 sm:mb-4">
              Speakers
            </h2>
            <p className="text-lg sm:text-2xl text-gray-200 px-2 sm:px-0">
              Conoce a nuestros speakers inspiradoras que liderarán el cambio en el Día Internacional de la Mujer 2026.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {speakers.map((speaker, index) => (
              <article
                key={`${speaker.linkedin}-${index}`}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-md p-5 sm:p-6"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-white/20">
                  <Image
                    src={speaker.photo}
                    alt={speaker.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {speaker.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {speaker.cargo}
                </p>
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-wtm-light font-medium hover:text-wtm-teal transition-colors"
                >
                  LinkedIn
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4m0 0v4m0-4L10 14m-4 3h12" />
                  </svg>
                </a>
              </article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}