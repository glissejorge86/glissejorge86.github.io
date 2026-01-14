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
    name: "Geovanni Leon",
    role: "Ingeniero de Sistemas",
    image: "/images/4.png",
    linkedin: "https://www.linkedin.com/in/geovannileon/",
  },
  {
    name: "Pavel Puclla",
    role: "Fundador de Se.Colectiva",
    image: "/images/1.png",
    linkedin: "https://www.linkedin.com/in/pavelpool/",
  },
  {
    name: "Catherine Vargas",
    role: "Ingeniera de Sistemas",
    image: "/images/3.png",
    linkedin: "https://www.linkedin.com/in/catherine-vargas-huaman-6608b517a/",
  },
  {
    name: "Giancarlo Quispe",
    role: "Full Stack Developer",
    image: "/images/2.png",
    linkedin: "https://www.linkedin.com/in/giancarlo-mirko/",
  },
  {
    name: "Junior Pariona",
    role: "Data Analyst",
    image: "/images/15.png",
    linkedin: "https://www.linkedin.com/in/junior-flavio-pariona/",
  },
];


  
  export function Volunteer() {
    return (
      <section id="volunteer" className="py-5 sm:py-10">
        <Container>
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mt-12 font-display text-5xl font-medium text-blue-500">Voluntarios</h2>
            <p className="mt-3 text-2xl text-slate-900">Gracias a nuestros voluntarios</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
      <div className="flex flex-col items-center text-center">
        <div className="ambassador-frame">
          <div className="ambassador-border"></div>
          <Image
            className="ambassador-photo rounded-full"
            src={volunteer.image}
            alt={volunteer.name}
            width={200}
            height={200}
            priority
          />
        </div>
        <h3 className="mt-3 text-xl font-semibold">{volunteer.name}</h3>
        <p className="text-slate-700">{volunteer.role}</p>
        <a href={volunteer.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </a>
      </div>
    );
  }