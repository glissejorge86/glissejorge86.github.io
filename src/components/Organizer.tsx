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
    linkedin: "https://www.linkedin.com/in/glisse-jorge/",
  }
];

export function Organizer() {
  return (
    <section id="organizer" className="relative py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute -top-10 sm:-top-20 left-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full filter blur-3xl opacity-20 bg-wtm-light"></div>
      <div className="absolute top-20 sm:top-40 right-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full filter blur-3xl opacity-20 bg-wtm-mint"></div>
      <div className="hidden sm:block absolute -bottom-32 left-1/2 w-96 h-96 rounded-full filter blur-3xl opacity-20 bg-wtm-light"></div>

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3 sm:mb-4">
              Organizadora
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-md mx-auto">
            {organizers.map((organizer, index) => (
              <OrganizerCard key={`${organizer.linkedin}-${index}`} organizer={organizer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function OrganizerCard({ organizer }: { organizer: Organizer }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-6">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
        <Image
          src={organizer.image}
          alt={organizer.name}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
          {organizer.name}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 mb-4">
        {organizer.role}
      </p>
      <a
        href={organizer.linkedin}
        target="_blank"
        rel="noreferrer"
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