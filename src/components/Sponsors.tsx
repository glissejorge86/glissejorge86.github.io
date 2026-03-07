import { Container } from "./Container";
import { Button } from "./Button";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="py-16 sm:py-20 bg-gradient-to-b from-cyan-50 via-blue-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <Container>
        <div className="mx-auto max-w-6xl relative">
    
          {/* Main CTA Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-cyan-200 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
            
            <div className="flex flex-col gap-6 relative text-center">
              <h2 className="font-display text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Colaboradores
              </h2>
              
              {/* Logos de patrocinadores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 max-w-4xl mx-auto items-center">
                <a
                  href="https://oficinas.unsch.edu.pe/vri/incubadora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar web de Incuba UNSCH"
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow"
                >
                  <img 
                    src="/images/13.png" 
                    alt="Incuba UNSCH" 
                    className="h-40 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Ir a la página web
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://lexovate.com.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar web de Lexovate"
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow"
                >
                  <img 
                    src="/images/16.png" 
                    alt="Lexovate" 
                    className="h-40 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Ir a la página web
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/se-colectiva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar web de SeColectiva"
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src="/images/17.png"
                    alt="SeColectiva"
                    className="h-40 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Ir a la página web
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}