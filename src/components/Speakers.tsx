import { Container } from "./Container";

export function Speakers() {
  return (
    <section id="speakers" className="py-16 sm:py-20 bg-gradient-to-b from-white to-cyan-50">
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Speakers
            </h2>
            <p className="text-2xl text-slate-700">
              Conviértete en speaker del International Women&apos;s Day 2026
            </p>
          </div>

          {/* Call to Action Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-cyan-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Image/Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full p-12">
                    <svg 
                      className="w-32 h-32 text-blue-600" 
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
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  ¿Quieres compartir tu historia?
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Buscamos mujeres apasionadas por la tecnología que quieran inspirar a otras con su experiencia. 
                  Si tienes una historia que contar, ¡queremos escucharte!
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700">Comparte tu conocimiento con la comunidad</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700">Inspira a la próxima generación de tecnólogas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700">Conecta con otras profesionales del sector</p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://forms.gle/vYgQxyvjjgq7HxkYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>¡Postula como Speaker!</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Section - What we're looking for */}
            <div className="mt-12 pt-8 border-t border-cyan-100">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Buscamos charlas sobre:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "💻", label: "Desarrollo" },
                  { icon: "🎨", label: "Diseño UX/UI" },
                  { icon: "📊", label: "Data Science" },
                  { icon: "🤖", label: "IA & ML" },
                  { icon: "☁️", label: "Cloud" },
                  { icon: "🔒", label: "Ciberseguridad" },
                  { icon: "📱", label: "Mobile" },
                  { icon: "🚀", label: "Emprendimiento" }
                ].map((topic, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-cyan-100"
                  >
                    <div className="text-3xl mb-2">{topic.icon}</div>
                    <div className="text-sm font-medium text-slate-700">{topic.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                📅 Fecha límite para postular: <span className="font-semibold text-slate-700">15 de Febrero, 2026</span>
              </p>
            </div>
          </div>

          {/* Testimonial or encouragement */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-cyan-50 rounded-2xl p-8 border-l-4 border-blue-600">
              <p className="text-lg text-slate-700 italic mb-4">
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