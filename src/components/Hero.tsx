"use client";

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { Timer } from './Timer'
import { FaArrowDown } from 'react-icons/fa' 

export function Hero() {
  return (
    <section id="hero" className="relative py-5 sm:py-10 min-h-screen flex items-center bg-gradient-to-b from-white via-blue-50/30 to-cyan-50/30">
      {/* Imágenes decorativas a los lados */}
      <div className="absolute left-0 top-0 hidden lg:flex items-center translate-y-8 opacity-80">
        <Image src="/izquierda.png" alt="Decoración izquierda" width={180} height={780}  /> 
      </div>
      <div className="absolute right-0 top-0 hidden lg:flex items-center transform rotate-180 translate-y-8 opacity-80">
        <Image src="/izquierda.png" alt="Decoración derecha" width={180} height={780}  /> 
      </div>

      {/* Elementos decorativos adicionales con colores WTM */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <Container className="mx-auto relative z-10">
        <div className="lg:px-12 text-left">
          {/* Título principal */}
          <h1 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl">
            <span className="text-slate-800">Break the </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Pattern
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-2xl tracking-tight text-slate-700 font-medium">
            International Women&apos;s Day Ayacucho 2026 rumbo al <strong className="text-blue-600">WTM Global Conference</strong>
          </p>

          {/* Información del evento */}
          <div className="mt-6 flex flex-wrap gap-4 text-slate-600">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-cyan-100">
              <span className="text-xl">📅</span>
              <span className="font-medium">Sábado 7 de Marzo, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-cyan-100">
              <span className="text-xl">⏰</span>
              <span className="font-medium">8:30 AM</span>
            </div>
          </div>

          {/* Timer */}
          <Timer />

          {/* Botones: registro y sponsors (alineados horizontalmente) */}
          <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-6">
            <Button 
              href="https://forms.gle/cf6kCuWJjGyxXoW47" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl" 
              target="_blank"
            >
              <span>Quiero ser asistente</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>

            <Button 
              href="#sponsors" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Quiero ser sponsor</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          
            <Button 
              href="#speakers" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Quiero ser speaker</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          
          </div>

          {/* Mensaje motivacional */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-600 shadow-sm">
              <p className="text-slate-700 text-center italic">
                &quot;Es momento de romper patrones, ocupar espacios donde no nos esperaban y reescribir las reglas del futuro tech.&quot;
              </p>
            </div>
          </div>

          {/* Espaciado */}
          <div className="mt-12"></div>

          {/* Flecha de scroll */}
          <div className="flex justify-center">
            <Link href="#speakers" legacyBehavior>
              <a className="inline-flex items-center justify-center w-14 h-14 text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce">
                <FaArrowDown className="w-6 h-6" />
              </a>
            </Link>
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