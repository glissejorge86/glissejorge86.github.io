"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "./Button";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export function Collage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  // Array de fotos del evento 2025 - TODAS CON LA MISMA RUTA
  const photos = [
    {
      id: 1,
      image: "/images/IMG_1.jpg", // Ruta correcta desde public/
      title: "Inauguración IWD 2025",
      description: "50+ asistentes en el evento principal",
      category: "keynote",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      image: "/images/IMG_4.jpg", // Ruta correcta desde public/
      title: "Panel de Expertas",
      description: "11 speakers compartiendo conocimiento",
      category: "speakers",
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      image: "/images/IMG_2.jpg", // Ruta correcta desde public/
      title: "Networking Tech",
      description: "Conexiones que transforman carreras",
      category: "networking",
      color: "from-green-400 to-blue-500"
    },
    {
      id: 4,
      image: "/images/IMG_5.jpg", // MISMA RUTA - cambia esta imagen si tienes más
      title: "Workshop Práctico",
      description: "Talleres de IA y desarrollo",
      category: "workshop",
      color: "from-orange-400 to-yellow-400"
    },
    {
      id: 5,
      image: "/images/IMG_6.jpg", // MISMA RUTA - cambia esta imagen si tienes más
      title: "Sponsors en Acción",
      description: "Marcas que apoyan la diversidad",
      category: "sponsors",
      color: "from-red-400 to-pink-400"
    },
    {
      id: 6,
      image: "/images/IMG_3.jpg", // MISMA RUTA - cambia esta imagen si tienes más
      title: "Comunidad WTM",
      description: "80% participación femenina",
      category: "community",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Asistentes", icon: "👥" },
    { number: "11", label: "Speakers", icon: "🎤" },
    { number: "80%", label: "Mujeres", icon: "👩‍💻" },
    { number: "5K+", label: "Alcance", icon: "📱" }
  ];

  // Íconos para cada categoría
  const categoryIcons: { [key: string]: string } = {
    keynote: "🎯",
    speakers: "🎤",
    networking: "🤝",
    workshop: "💡",
    sponsors: "🏢",
    community: "🌟"
  };

  // Manejar error de carga de imagen
  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: "#0334ab" }}>
      {/* Background decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Container>
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
                ✨ IWD Ayacucho 2025
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Redefine Possible: El Impacto que Creamos Juntos
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              <span className="block mt-2 font-semibold text-white">Más que un evento: una comunidad de tecnología que valora y conmemora el Día Internacional de la Mujer.</span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border-2 border-cyan-100 hover:border-blue-400 transition-all hover:scale-110 hover:shadow-2xl"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Modern Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Large featured image - spans 2 columns and 2 rows */}
            <div 
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              onClick={() => setSelectedImage(0)}
            >
              <div className="relative h-full min-h-[400px]">
                {/* Imagen REAL */}
                {!imageErrors[1] ? (
                  <Image 
                    src={photos[0].image}
                    alt={photos[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    onError={() => handleImageError(1)}
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${photos[0].color} flex items-center justify-center`}>
                    <div className="text-center text-white p-8">
                      <div className="text-6xl mb-4">{categoryIcons[photos[0].category]}</div>
                      <h3 className="text-3xl font-bold mb-2">{photos[0].title}</h3>
                      <p className="text-lg opacity-90">{photos[0].description}</p>
                    </div>
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{photos[0].title}</h3>
                    <p className="text-sm">{photos[0].description}</p>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-blue-600">Evento Principal</span>
                </div>
              </div>
            </div>

            {/* Medium images - span 2 columns each */}
            {[1, 2].map((idx) => (
              <div 
                key={photos[idx].id}
                className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
                onClick={() => setSelectedImage(idx)}
              >
                <div className="relative h-full min-h-[195px]">
                  {/* Imagen REAL */}
                  {!imageErrors[photos[idx].id] ? (
                    <Image 
                      src={photos[idx].image}
                      alt={photos[idx].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={() => handleImageError(photos[idx].id)}
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${photos[idx].color} flex items-center justify-center`}>
                      <div className="text-center text-white p-6">
                        <div className="text-4xl mb-3">{categoryIcons[photos[idx].category]}</div>
                        <h3 className="text-xl font-bold mb-1">{photos[idx].title}</h3>
                        <p className="text-sm opacity-90">{photos[idx].description}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1">{photos[idx].title}</h3>
                      <p className="text-xs">{photos[idx].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Small images - regular grid */}
            {[3, 4, 5].map((idx) => (
              <div 
                key={photos[idx].id}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-500"
                onClick={() => setSelectedImage(idx)}
              >
                <div className="relative h-full min-h-[195px]">
                  {/* Imagen REAL */}
                  {!imageErrors[photos[idx].id] ? (
                    <Image 
                      src={photos[idx].image}
                      alt={photos[idx].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      onError={() => handleImageError(photos[idx].id)}
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${photos[idx].color} flex items-center justify-center`}>
                      <div className="text-center text-white p-4">
                        <div className="text-3xl mb-2">{categoryIcons[photos[idx].category]}</div>
                        <h3 className="text-base font-bold mb-1">{photos[idx].title}</h3>
                        <p className="text-xs opacity-90">{photos[idx].description}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="text-white">
                      <h3 className="text-sm font-bold">{photos[idx].title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card - Strategic placement */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 flex flex-col justify-center items-center text-white hover:scale-105 transition-all duration-500 cursor-pointer min-h-[195px]">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-2xl font-bold mb-2">Galería 2025</h3>
                <p className="text-sm mb-4 opacity-90">Ver fotos del evento</p>
                <Button
                  href="https://photos.app.goo.gl/qp148rKrwZpJHJ3Z8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Explorar</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Modal Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-2xl p-8 max-h-[80vh] overflow-y-auto">
              <div className="text-center">
                {/* Imagen en el modal */}
                {!imageErrors[photos[selectedImage].id] ? (
                  <div className="mb-6 relative w-full h-[400px]">
                    <Image 
                      src={photos[selectedImage].image}
                      alt={photos[selectedImage].title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                ) : (
                  <div className={`text-6xl mb-4 p-8 rounded-2xl bg-gradient-to-br ${photos[selectedImage].color}`}>
                    {categoryIcons[photos[selectedImage].category]}
                  </div>
                )}
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{photos[selectedImage].title}</h3>
                <p className="text-lg text-slate-600 mb-4">{photos[selectedImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations moved to global CSS (src/styles/globals.css) */}
    </section>
  );
}