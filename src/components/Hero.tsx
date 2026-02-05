"use client";

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import logoImage from '@/images/Logo_break_the_pattern.png' 

export function Hero() {
  return (
    <section id="hero" className="relative py-5 sm:py-10 min-h-screen flex items-center bg-[var(--background)]">
      {/* Imágenes decorativas a los lados */}
    
      <div className="absolute right-0 top-0 hidden lg:flex items-center translate-y-8 opacity-80">
        <Image src="/izquierda.png" alt="Decoración derecha" width={225} height={780}  /> 
      </div>

      {/* Elementos decorativos adicionales con colores WTM */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob bg-wtm-light"></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 bg-wtm-mint"></div>
      
      <Container className="mx-auto relative z-10">
        <div className="lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            {/* Left: Logo image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src={logoImage}
                alt="Break the Pattern"
                width={520}
                className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[520px] h-auto"
                priority
                unoptimized
              />
            </div>

            {/* Right: content */}
            <div className="text-left">
              <h1 className="sr-only">Break the Pattern</h1>

              {/* Subtítulo */}
              <p className="mt-0 text-xl sm:text-2xl lg:text-3xl tracking-tight font-medium" style={{ color: 'var(--color-deep-blue)' }}>
                IWD Ayacucho 2026
              </p>

              {/* Información del evento */}
              <div className="mt-6 flex flex-wrap gap-4 text-slate-600">
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-[rgba(0,0,0,0.04)]">
                  <span className="text-xl">📅</span>
                  <span className="font-medium">Sábado 7 de Marzo, 2026</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-[rgba(0,0,0,0.04)]">
                  <span className="text-xl">⏰</span>
                  <span className="font-medium">8:30 AM</span>
                </div>
              </div>


              {/* Botones: registro y sponsors (alineados a la izquierda en desktop) */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center sm:justify-start mt-6 gap-4 w-full">
                <Button 
                  href="https://forms.gle/cf6kCuWJjGyxXoW47" 
                  className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white rounded-full focus:outline-none focus:ring-2 focus:ring-wtm-deep focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl bg-wtm-deep" 
                  target="_blank"
                >
                  <span>Inscríbete</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>

                {/* <Button 
                  href="#sponsors" 
                  className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white rounded-full focus:outline-none focus:ring-2 focus:ring-wtm-blue focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-wtm-blue to-wtm-teal"
                >
                  <span>Quiero ser sponsor</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button> */}
              
                {/* <Button 
                  href="#speakers" 
                  className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white rounded-full focus:outline-none focus:ring-2 focus:ring-wtm-blue focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-wtm-blue to-wtm-teal"
                >
                  <span>Quiero ser speaker</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
               */}
              </div>

              {/* {/* Mensaje motivacional */}
               {/* <div className="mt-8 max-w-2xl">
                <div className="rounded-2xl p-6 shadow-sm bg-gradient-to-r from-[rgba(79,195,247,0.06)] to-[rgba(0,191,165,0.06)] border-l-4 border-wtm-blue">
                  <p className="text-left italic text-wtm-dark">
                    &quot;Es momento de romper patrones, ocupar espacios donde no nos esperaban y reescribir las reglas del futuro tech.&quot;
                  </p>
                </div>
              </div>*/}

              {/* Flecha de scroll (alineada a la izquierda en desktop) */}
               {/* <div className="mt-8">
                <Link href="#speakers" legacyBehavior>
                  <a className="inline-flex items-center justify-center w-14 h-14 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-wtm-blue focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce bg-gradient-to-r from-wtm-blue to-wtm-teal">
                    <FaArrowDown className="w-6 h-6" />
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}