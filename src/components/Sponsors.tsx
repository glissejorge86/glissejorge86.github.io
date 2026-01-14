import { Container } from "./Container";

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
          {/* Header con stats destacados */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                🚀 Solo 3 espacios Early Bird disponibles
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Invierte en el Futuro Tech de Ayacucho
            </h2>
            <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto">
              Tu marca frente a <span className="font-bold text-blue-600">100+ profesionales tech</span> 
              <br /> con inversión desde <span className="font-bold text-cyan-600">S/ 100</span>
            </p>
          </div>

          {/* Stats del impacto 2026 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { number: "50+", label: "Asistentes 2026", icon: "👥" },
              { number: "80%", label: "Mujeres tech", icon: "👩‍💻" },
              { number: "100%", label: "Sponsors satisfechos", icon: "⭐" },
              { number: "5,000+", label: "Alcance en RRSS", icon: "📱" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 text-center shadow-lg border-2 border-cyan-100 hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main CTA Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-cyan-200 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              {/* Left side - Visual con garantía */}
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full p-10">
                    <svg 
                      className="w-24 h-24 text-blue-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Badge de confianza */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 text-center">
                  <div className="text-green-600 font-bold text-lg mb-1">✓ Evento Verificado</div>
                  <div className="text-sm text-slate-600">Respaldo Technovation</div>
                  <div className="text-xs text-slate-500 mt-2">IWD 2026: 100% satisfacción</div>
                </div>
              </div>

              {/* Right side - Content con urgencia */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                  ¿Por qué ser sponsor del IWD 2026?
                </h3>
                <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                  Empresas como <span className="font-semibold text-blue-600">Municipalidad Provincial de Humanaga, SeColectiva e Incuba UNSCH</span> fueron parte el año pasado, este año sé parte de los sponsors. 
                  <span className="block mt-2 text-cyan-600 font-semibold">Tu marca puede ser la próxima.</span>
                </p>

                {/* ROI Benefits */}
                <div className="space-y-3 mb-8">
                  {[
                    { text: "ROI 5-8x vs publicidad tradicional", highlight: true },
                    { text: "Visibilidad 12 meses (no solo 1 día)", highlight: false },
                    { text: "Acceso directo a talento tech femenino", highlight: false },
                    { text: "Reporte post-evento con métricas reales", highlight: false }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className={`text-slate-700 ${benefit.highlight ? 'font-semibold text-blue-700' : ''}`}>
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons con urgencia */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/51931981255?text=Hola%2C%20quiero%20ser%20patrocinador%20del%20IWD%202026%20%22Break%20The%20Pattern%22%20de%20Women%20Techmakers%20Ayacucho.%20%C2%BFPodemos%20agendar%20una%20reuni%C3%B3n%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                    <svg className="w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Agendar Reunión (15 min)</span>
                  </a>
                  <a
                    href="mailto:wtmayacucho@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Solicitar Propuesta</span>
                  </a>
                </div>

                <p className="text-xs text-slate-500 mt-3 text-center sm:text-left">
                  ⚡ Respuesta garantizada en 24 horas
                </p>
              </div>
            </div>
          </div>

          {/* Planes de Patrocinio - Formato Pricing */}
          <div className="mb-12">
            <h4 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 text-center">
              Tenemos opciones para que puedas elegir el patrocinio
            </h4>
            <p className="text-slate-600 text-center mb-8">Elige el nivel que mejor se adapte a tus objetivos</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: "🏆", 
                  name: "Ada Lovelace",
                  color: "from-yellow-400 to-amber-500",
                  borderColor: "border-yellow-400",
                  features: [
                    "Banner principal + ingreso",
                    "Logo tamaño XL en medios",
                    "Sesión 20 min en evento",
                    "Merchandising premium",
                    "Presentación 5-10 min"
                  ],
                  badge: "Máxima Visibilidad",
                  popular: false
                },
                { 
                  icon: "🥈", 
                  name: "Grace Hopper",
                  color: "from-slate-300 to-slate-500",
                  borderColor: "border-slate-400",
                  features: [
                    "Banner en ingreso",
                    "Logo tamaño L en medios",
                    "Presentación 2-3 min",
                    "Merchandising estándar",
                    "Menciones oficiales"
                  ],
                  badge: "Mejor Relación",
                  popular: false
                },
                { 
                  icon: "🥉", 
                  name: "Margaret Hamilton",
                  color: "from-orange-400 to-orange-600",
                  borderColor: "border-orange-400",
                  features: [
                    "Banner en ingreso",
                    "Logo tamaño M en medios",
                    "Mención en evento",
                    "Merchandising básico",
                    "Agradecimiento oficial"
                  ],
                  badge: "Accesible",
                  popular: false
                }
              ].map((plan, idx) => (
                <div 
                  key={idx}
                  className={`relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all transform hover:scale-105 border-2 ${plan.borderColor} ${plan.popular ? 'md:-mt-4 md:scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                        MÁS ELEGIDO 2026
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-3">{plan.icon}</div>
                    <div className={`text-xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                      {plan.name}
                    </div>
                    <div className="text-xs text-slate-500">{plan.badge}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/51931981255?text=Hola%2C%20quiero%20ser%20patrocinador%20del%20IWD%202026%20%22Break%20The%20Pattern%22%20y%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-lg' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Elegir Plan
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 mb-3">
                ¿Necesitas un plan personalizado o apoyo en especie?
              </p>
              <a 
                href="https://wa.me/51931981255?text=Hola%2C%20quiero%20ser%20patrocinador%20del%20IWD%202026%20%22Break%20The%20Pattern%22%20y%20me%20interesa%20un%20plan%20personalizado%20%C2%BFPodemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-cyan-500 transition-colors"
              >
                <span>Hablemos de tu propuesta</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Testimonio con credibilidad */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-l-4 border-blue-600 shadow-xl mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💼</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-slate-700 italic mb-4 leading-relaxed">
                  &ldquo;La inversión de S/ 200 nos generó visibilidad que costaría S/ 1,000+ en publicidad tradicional. 
                  Conectamos con talento tech femenino que ahora trabaja con nosotros. 
                  <span className="font-semibold text-blue-700"> Lo más valioso: la seriedad del equipo organizador.</span>&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="h-4 w-px bg-slate-300"></div>
                  <p className="text-blue-600 font-semibold text-sm">
                    Gerente de Marketing, Sponsor IWD 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Garantías finales */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📊",
                title: "Transparencia Total",
                desc: "Reporte post-evento con métricas y evidencias fotográficas"
              },
              {
                icon: "🤝",
                title: "Sin Letra Chica",
                desc: "Proceso claro, factura disponible, cambios permitidos hasta 15 días antes"
              },
              {
                icon: "⚡",
                title: "Respuesta Rápida",
                desc: "Contacto VIP directo. Respondemos en máximo 24 horas"
              }
            ].map((guarantee, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-cyan-100">
                <div className="text-4xl mb-3">{guarantee.icon}</div>
                <h5 className="font-bold text-slate-800 mb-2">{guarantee.title}</h5>
                <p className="text-sm text-slate-600">{guarantee.desc}</p>
              </div>
            ))}
          </div>

          {/* Urgencia final */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="font-bold">⏰ Fecha límite: 20 Febrero 2026</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold mb-4">
              Los primeros 5 sponsors reciben bonus exclusivos
            </h4>
            <p className="text-lg mb-6 text-blue-50">
              Prioridad en ubicación de banners + Mención anticipada en campaña pre-evento
            </p>
            <a
              href="https://wa.me/51931981255?text=Hola%2C%20quiero%20ser%20patrocinador%20del%20IWD%202026%20%22Break%20The%20Pattern%22%20y%20quiero%20confirmar%20mi%20participaci%C3%B3n%20como%20uno%20de%20los%20primeros%205%20sponsors."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <span>Confirmar Ahora</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}