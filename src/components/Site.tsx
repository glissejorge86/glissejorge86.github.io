import { Container } from "./Container";

export function Site() {

    return (
        <section
            id="site"
            aria-labelledby="sponsors-title"
            className="py-5 sm:py-10"
        >
            <Container>
                <div className="mx-auto max-w-6xl text-center">
                    <h2
                        id="sponsors-title"
                        className="font-display text-5xl font-medium tracking-tighter text-blue-500 sm:text-5xl"
                    >
                        ¿Cómo llegar?
                    </h2>
                    {/* Mapa de Google Maps */}
                    <br />
                    <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            📍 Ubicación del Evento
                        </h3>
                        <div className="max-w-3xl">
                            <h2 className="text-1xl sm:text-4xl md:text-4xl font-bold mb-6 text-blue-700">
                                Auditorio de CASE, Municipalidad Provincial de Huamanga
                            </h2>
                            <p className="text-lg text-gray-700 mb-8">
                                Referencia: Comisaria PNP de Familia De Ayacucho, Frente al Parque de la Memoria
                            </p>
                            <div className="w-full max-w-10xl h-[500px] rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.3392363218437!2d-74.22801155377215!3d-13.150214089784772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127dfaefb1761d%3A0x7c16f9ec0ca16253!2sComisaria%20PNP%20de%20Familia%20De%20Ayacucho!5e1!3m2!1ses-419!2spe!4v1741880766446!5m2!1ses-419!2spe"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}