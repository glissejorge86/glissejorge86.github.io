import { Button } from '@/components/Button'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" suppressHydrationWarning className="relative py-8 sm:py-12 lg:py-20 min-h-screen flex items-center w-full" style={{ backgroundColor: '#0334ab', width: '100%' }}>
      {/* Decorative blobs with improved positioning */}
      <div className="absolute -top-10 sm:-top-20 left-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob bg-wtm-light"></div>
      <div className="absolute top-20 sm:top-40 right-1/4 w-48 sm:w-96 h-48 sm:h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000 bg-wtm-mint"></div>
      <div className="hidden sm:block absolute -bottom-32 left-1/2 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000 bg-wtm-light"></div>

      <div className="w-full relative z-10">
        <div className="px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-12 lg:gap-16">
            {/* Left: Logo image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/Logo_break_the_pattern.png"
                alt="Break the Pattern"
                width={1040}
                height={560}
                sizes="100vw"
                className="w-full h-auto transition-all duration-300"
                priority
                unoptimized
              />
            </div>

            {/* Right: content */}
            <div className="text-left lg:text-left space-y-5 sm:space-y-8">
              <h1 className="sr-only">Break the Pattern</h1>

              {/* Main title */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-base font-semibold tracking-widest uppercase letter-spacing-wide text-wtm-light">
                  Día Internacional de la Mujer
                </p>
                <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
                  IWD Ayacucho 2026
                </h2>
                <p className="text-sm sm:text-lg text-gray-200 font-medium">
                  Break the Pattern: Mujeres Liderando el Cambio
                </p>
              </div>

              {/* Event details with improved styling */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-6 justify-center sm:justify-start">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-widest uppercase text-wtm-light/80">Fecha</span>
                    <span className="text-sm sm:text-base font-semibold text-white">7 de Marzo, 2026</span>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-widest uppercase text-wtm-light/80">Hora</span>
                    <span className="text-sm sm:text-base font-semibold text-white">8:30 AM</span>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-widest uppercase text-wtm-light/80">Lugar</span>
                    <span className="text-sm sm:text-base font-semibold text-white">Centro Cultural UNSCH</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-2 sm:gap-3 pt-4 sm:pt-6 justify-center sm:justify-start">
                <Button 
                  href="https://forms.gle/cf6kCuWJjGyxXoW47" 
                  className="group relative inline-flex flex-1 sm:flex-initial w-full sm:w-auto justify-center items-center gap-2 px-4 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-sm lg:text-base font-semibold text-white rounded-full focus:outline-none focus:ring-2 focus:ring-wtm-deep focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl bg-gradient-to-r from-wtm-deep to-wtm-blue" 
                  target="_blank"
                >
                  <span>Quiero asistir</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>

                <Button 
                  href="#sponsors" 
                  className="group relative inline-flex flex-1 sm:flex-initial w-full sm:w-auto justify-center items-center gap-2 px-4 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-sm lg:text-base font-semibold text-white rounded-full focus:outline-none focus:ring-2 focus:ring-wtm-light focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl bg-gradient-to-r from-wtm-light to-wtm-teal border border-white/20" 
                >
                  <span>Quiero patrocinar</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>

                <Button 
                  href="#speakers" 
                  className="group relative inline-flex flex-1 sm:flex-initial w-full sm:w-auto justify-center items-center gap-2 px-4 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-sm lg:text-base font-semibold text-white rounded-full focus:outline-none focus:ring-2 focus:ring-wtm-light focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl bg-gradient-to-r from-wtm-light to-wtm-teal border border-white/20" 
                >
                  <span>Quiero ser ponente</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator arrow */}
      <a
        href="#sponsors"
        aria-label="Ir hacia abajo"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}