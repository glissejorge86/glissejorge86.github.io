"use client";
import { Container } from "@/components/Container";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mt-10 flex justify-between items-center">
      <Container className="flex flex-wrap items-center justify-between lg:flex-nowrap w-full">

        {/* Botón de menú móvil */}
        <button
          className="block lg:hidden focus:outline-none transition-transform transform hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <div className={`w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all ${menuOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
            <div className={`w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all ${menuOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
          </div>
        </button>

        {/* Menú de navegación SOLO en mobile */}
        <nav
          className={`absolute top-[100px] z-50 left-0 w-full bg-white shadow-lg border-t-2 border-cyan-100 lg:hidden transition-all duration-300 ${
            menuOpen ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <div className="flex flex-col text-center p-4">
            <a 
              href="#speakers" 
              className="py-3 px-4 text-blue-600 hover:text-cyan-500 hover:bg-blue-50 rounded-lg transition-all font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Ponentes
            </a>
            <a 
              href="#sponsors" 
              className="py-3 px-4 text-blue-600 hover:text-cyan-500 hover:bg-blue-50 rounded-lg transition-all font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Patrocinadores
            </a>
            <a 
              href="#collage" 
              className="py-3 px-4 text-blue-600 hover:text-cyan-500 hover:bg-blue-50 rounded-lg transition-all font-medium"
              onClick={() => setMenuOpen(false)}
            >
              IWD Ayacucho 2025
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}