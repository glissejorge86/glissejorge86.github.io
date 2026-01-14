import { Container } from "./Container";
import Image from "next/image";

export function Agenda() {
    const schedule = [
        {
            time: "8:30 AM - 9:00 AM",
            title: "Registro y Networking",
            description: "",
            speakers: null,
        },
        {
            time: "9:00 AM - 9:15 AM",
            title: "Bienvenida e Inauguración al IWD Ayacucho 2025",
            description: "",
            speakers: [
                { name: "Glisse Jorge", image: "/images/7.png" },
                { name: "Sihomara Ochoa", image: "/images/12.png" }
            ],
        },
        {
            time: "9:15 AM - 10:00 AM",
            title: "IA Generativa y Modelos de Lenguaje: Hacia una Inteligencia Artificial con Identidad Nacional",
            description: "",
            speakers: [{ name: "Luis Solis", image: "/images/6.png" }],
        },
        {
            time: "10:00 AM - 10:15 AM",
            title: "Charlas Ignite",
            description: "",
            speakers: [
                { name: "Yovany Romero", image: "/images/11.png" },
                { name: "Glisse Jorge", image: "/images/7.png" },
                { name: "Sihomara Ochoa", image: "/images/12.png" }
            ],
            
        },
        {
            time: "10:15 AM - 10:25 AM",
            title: "Break",
            description: "",
            speakers: null,
        },
        {
            time: "10:25 AM - 11:10 AM",
            title: "Hecho es mejor que perfecto",
            description: "",
            speakers: [{ name: "Shirley Sosa", image: "/images/10.png" }],
        },
        {
            time: "11:10 AM - 11:25 AM",
            title: "Mujeres en las Startups",
            description: "",
            speakers: [{ name: "Andrea Guillén", image: "/images/5.png" }],
        },
        {
            time: "11:35 AM - 12:20 PM",
            title: "IA en el Frontend: Cómo integrar modelos de Machine Learning en aplicaciones web",
            description: "",
            speakers: [{ name: "Yovany Romero", image: "/images/11.png" }],
        },
        {
            time: "12:20 PM - 12:50 PM",
            title: "Round Table: Mujeres que inspiran",
            description: "",
            speakers: [
                { name: "Elinar Carrillo", image: "/images/9.png" },
                { name: "Yovany Romero", image: "/images/11.png" },
                { name: "Shirley Sosa", image: "/images/10.png" }
            ],
        },
        {
            time: "12:50 PM - 1:00 PM",
            title: "Cierre",
            description: "",
            speakers: null,
        }
    ];

    return (
        <section id="agenda" className="py-10 bg-gray-100">
            <Container>
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-blue-600">Agenda del 15 de marzo</h2>
                    <p className="text-lg text-gray-700">Women Techmakers Ayacucho</p>
                </div>

                <div className="mt-8 space-y-6">
                    {schedule.map((item, index) => (
                        <div 
                            key={index} 
                            className={`rounded-lg shadow-md p-6 
                            ${item.title === "Break" || item.title === "Cierre" || item.title === "Registro y Networking" ? "bg-blue-200" : "bg-white"}`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                {/* Columna 1: Hora */}
                                <div className="text-blue-600 font-semibold text-lg text-center md:text-left">
                                    {item.time}
                                </div>

                                {/* Columna 2: Detalles */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    {item.description && (
                                        <p className="text-gray-600">{item.description}</p>
                                    )}
                                </div>

                                {/* Columna 3: Speakers (múltiples) */}
                                {item.speakers ? (
                                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                        {item.speakers.map((speaker, i) => (
                                            <div key={i} className="flex items-center space-x-3">
                                                <Image
                                                    src={speaker.image}
                                                    alt={speaker.name}
                                                    width={50}
                                                    height={50}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-800">{speaker.name}</p>
                                                    <p className="text-xs text-gray-500">Ponente</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
