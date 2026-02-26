import { Container } from "./Container";
import Image from "next/image";

export function Agenda() {
    const schedule = [
        {
            time: "08:00 AM - 08:15 AM",
            title: "Registro y Networking",
            category: "Networking",
            speakers: null,
        },
        {
            time: "08:15 AM - 08:30 AM",
            title: "Bienvenida e Inauguración al IWD Ayacucho 2026",
            category: "Apertura",
            speakers: [
                { name: "Glisse Jorge", image: "/images/7.png", role: "Moderadora" }
            ],
        },
        {
            time: "08:30 AM - 09:05 AM",
            title: "How to be fluent in English",
            category: "Empoderamiento",
            speakers: [{ name: "Heber Munaylla", image: "/images/speaker_2.jpg", role: "Ponente" }],
        },
        {
            time: "09:05 AM - 09:40 AM",
            title: "El Arte del Prompting: Estructurando Portafolios Profesionales en Gemini",
            category: "Inteligencia Artificial",
            speakers: [{ name: "Lesly Samaritano", image: "/images/speaker_1.jpeg", role: "Ponente" }],
            
        },
        {
            time: "09:40 AM - 10:15 AM",
            title: "Innovar para Emprender: Mujeres Construyendo el Futuro Digital",
            category: "Emprendimiento",
            speakers: [{ name: "Aldo Vega", image: "/images/speaker_4.png", role: "Ponente" }],
        },
        {
            time: "10:15 AM - 10:30 AM",
            title: "Break y Rondas de Preguntas",
            category: "Networking",
            speakers: null,
        },
        {
            time: "10:30 AM - 10:45 AM",
            title: "Charla Relámpago: Alexa",
            category: "Inteligencia Artificial",
            speakers: [{ name: "Nefi Arroyo", image: "/images/speaker_6.png", role: "Ponente" }],
        },
        {
            time: "10:45 AM - 11:20 AM",
            title: "Atrévete a empezar en la nube",
            category: "Cloud",
            speakers: [{ name: "Alanis González", image: "/images/speaker_5.jpeg", role: "Ponente" }],
        },
        {
            time: "11:20 AM - 11:55 AM",
            title: "Agile en entornos tecnológicos complejos: Del framework a la entrega de valor real",
            category: "Agilidad",
            speakers: [{ name: "Alicia Acevedo", image: "/images/speaker_3.jpeg", role: "Ponente" }],
        },
        {
            time: "11:55 AM - 12:10 PM",
            title: "Break y Rondas de Preguntas",
            category: "Networking",
            speakers: null,
        },{
            time: "12:10 PM - 12:45 PM",
            title: "Códigos de Éxito: Claves para generar conexión corporativa",
            category: "Habilidades blandas",
            speakers: [{ name: "Mar García", image: "/images/speaker_7.jpg", role: "Ponente" }],
        },
        {
            time: "12:45 PM - 01:20 PM",
            title: "AWS para Todos: La Clave para Hackear tu Futuro",
            category: "Cloud",
            speakers: [{ name: "Nefi Arroyo", image: "/images/speaker_6.png", role: "Ponente" }],
        },
        {
            time: "01:20 PM - 01:30 PM",
            title: "Cierre",
            category: "Clausura",
            description: "",
            speakers: null,
        }
    ];

    return (
        <section id="agenda" className="py-10" style={{ backgroundColor: "#0334ab" }}>
            <Container>
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">Agenda del 07 de marzo</h2>
                    <p className="text-lg text-gray-200">IWD AYACUCHO 2026</p>
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
                                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                                        {item.category}
                                    </span>
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
                                                    <p className="text-xs text-gray-500">{speaker.role}</p>
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
