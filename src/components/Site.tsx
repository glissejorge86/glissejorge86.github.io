import { Container } from "./Container";

export function Site() {

    return (
        <section
            id="site"
            aria-labelledby="sponsors-title"
            className="py-5 sm:py-10 bg-white"
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
                                 Centro Cultural de la Universidad Nacional de San Cristóbal de Huamanga 
                            </h2>
                            <h2 className="text-1xl sm:text-4xl md:text-4xl font-bold mb-6 text-blue-700">
                                 (C.C. UNSCH)
                            </h2>
                            <p className="text-lg text-gray-700 mb-8">
                                Dirección: Portal Unión N° 37, Plaza Mayor
                            </p>
                            <div className="w-full max-w-10xl h-[500px] rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0346132956656!2d-74.22842262416516!3d-13.160216713632108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127d0031f67d21%3A0xffc6cc25d9f9a13d!2sCentro%20cultural%20UNSCH!5e0!3m2!1ses!2spe!4v1772098766301!5m2!1ses!2spe"
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