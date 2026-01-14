"use client";

import React, { useState } from 'react';

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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50 to-cyan-50 relative overflow-hidden">
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
                ✨ IWD Ayacucho 2025 - Éxito Comprobado
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mb-4 animate-gradient">
              El Impacto que Creamos Juntos
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Más que un evento: una comunidad que está cambiando el futuro tech de Ayacucho. 
              <span className="block mt-2 font-semibold text-blue-600">Tu marca puede ser parte de esta transformación en 2026.</span>
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
                  <img 
                    src={photos[0].image}
                    alt={photos[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
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
                    <img 
                      src={photos[idx].image}
                      alt={photos[idx].title}
                      className="absolute inset-0 w-full h-full object-cover"
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
                    <img 
                      src={photos[idx].image}
                      alt={photos[idx].title}
                      className="absolute inset-0 w-full h-full object-cover"
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
                <div 
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors"
                  onClick={() => window.open('https://photos.app.goo.gl/qp148rKrwZpJHJ3Z8', '_blank')}
                >
                  <span>Explorar</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 border-cyan-100">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Testimonial */}
              <div className="md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-3xl">💼</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-slate-700 italic mb-3 leading-relaxed">
                      &ldquo;El IWD 2025 superó nuestras expectativas. La organización fue impecable y pudimos conectar con talento tech que realmente marca la diferencia.&rdquo;
                    </p>
                    <p className="text-blue-600 font-semibold text-sm">
                      — Sponsor IWD 2025, Empresa Tech Local
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center md:text-right">
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  ¿Tu marca en IWD 2026?
                </h4>
                <a
                  href="https://wa.link/vqkjny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-6 py-3 rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>Ser Sponsor 2026</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
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
                  <div className="mb-6">
                    <img 
                      src={photos[selectedImage].image}
                      alt={photos[selectedImage].title}
                      className="w-full h-auto max-h-[400px] object-cover rounded-2xl"
                    />
                  </div>
                ) : (
                  <div className={`text-6xl mb-4 p-8 rounded-2xl bg-gradient-to-br ${photos[selectedImage].color}`}>
                    {categoryIcons[photos[selectedImage].category]}
                  </div>
                )}
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{photos[selectedImage].title}</h3>
                <p className="text-lg text-slate-600 mb-4">{photos[selectedImage].description}</p>
                {/* <div className="text-sm text-slate-500 p-4 bg-slate-50 rounded-lg">
                  <p className="font-semibold mb-2">📁 Ruta de imagen configurada:</p>
                  <code className="bg-slate-200 px-3 py-1 rounded">
                    {photos[selectedImage].image}
                  </code>
                  {imageErrors[photos[selectedImage].id] && (
                    <p className="mt-2 text-red-500">⚠️ La imagen no se pudo cargar. Verifica la ruta.</p>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}