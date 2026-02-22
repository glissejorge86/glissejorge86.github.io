import { Container } from "./Container";
import { Button } from "./Button";

export function Speakers() {
  return (
    <section id="speakers" className="py-12 sm:py-20 bg-gradient-to-b from-white to-cyan-50">
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3 sm:mb-4">
              Ponente
            </h2>
            <p className="text-lg sm:text-2xl text-slate-700 px-2 sm:px-0">
              Convocatoria cerrada para IWD Ayacucho 2026
            </p>
          </div>

          {/* Call to Action Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12 border-2 border-cyan-100">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left side - Image/Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full p-8 sm:p-12">
                    <svg 
                      className="w-20 h-20 sm:w-32 sm:h-32 text-blue-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Convocatoria cerrada
                </h3>
                <p className="text-base sm:text-lg text-slate-600 mb-5 sm:mb-6 leading-relaxed">
                  Gracias por el interés en participar como ponente. Muy pronto compartiremos novedades sobre próximas convocatorias.
                </p>

                {/* CTA Button */}
                <Button
                  type="button"
                  disabled
                  aria-disabled
                  className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-slate-300 text-slate-700 font-semibold rounded-full cursor-not-allowed shadow-none hover:bg-slate-300"
                >
                  <span>Convocatoria Cerrada</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                Convocatoria cerrada el <span className="font-semibold text-slate-700">20 de Febrero, 2026</span>
              </p>
            </div>
          </div>

          {/* Testimonial or encouragement */}
          <div className="mt-10 sm:mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-cyan-50 rounded-2xl p-5 sm:p-8 border-l-4 border-blue-600">
              <p className="text-base sm:text-lg text-slate-700 italic mb-4">
                &apos;Break The Pattern significa romper el silencio. Tu voz importa, tu experiencia cuenta, 
                y tu historia puede cambiar la trayectoria de alguien más.&apos;
              </p>
              <p className="text-blue-600 font-semibold">
                — Women Techmakers Ayacucho
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}