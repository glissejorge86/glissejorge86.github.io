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
              <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Patrocinadores
              </h2>
              
              {/* Logos de patrocinadores */}
              <div className="flex flex-wrap justify-center items-center gap-8 py-6">
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src="/images/13.png" 
                    alt="Incuba UNSCH" 
                    className="h-40 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
              <p className="text-2xl text-slate-700">
              Sé parte del IWD Ayacucho 2026 y conecta con talento
              </p>
               <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
               ¿Quieres patrocinar nuestro evento?, te presentamos el plan de patrocinio para que puedas elegir el que mejor se adapte a tu empresa.
              </p>
              <div className="flex justify-center">
                <Button
                    href="https://www.canva.com/design/DAHA5fqNt-M/wEQpRkWNZWORc838SMoKsw/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>Quiero patrocinar</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
              </div>
              
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}