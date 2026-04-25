import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Zap, ArrowRight, CheckCircle, 
  Sparkles, Send, Star, ExternalLink, Users, Target, Award,
  Rocket, Shield, Clock
} from 'lucide-react';

export default function PolarisDevDark() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const beneficios = [
    {
      icon: <Code2 size={40} />,
      titulo: "Código de Calidad",
      descripcion: "Desarrollo profesional con las mejores prácticas y estándares de la industria"
    },
    {
      icon: <Rocket size={40} />,
      titulo: "Entrega Rápida",
      descripcion: "Proyectos listos en tiempo récord sin comprometer la calidad"
    },
    {
      icon: <Shield size={40} />,
      titulo: "Soporte Continuo",
      descripcion: "Acompañamiento 24/7 antes, durante y después del lanzamiento"
    }
  ];

  // PROYECTOS DE PORTFOLIO - PERSONALIZA AQUÍ CON TUS PROYECTOS REALES
  const proyectos = [
    {
      id: 1,
      nombre: "E-Commerce Fashion",
      cliente: "Boutique Style",
      categoria: "E-Commerce",
      descripcion: "Tienda online de moda con más de 500 productos, carrito de compras inteligente, pasarela de pagos segura y sistema de inventario en tiempo real.",
      resultados: "+350% incremento en ventas online",
      tecnologias: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "https://ejemplo-ecommerce.com", // ← CAMBIA POR TU URL REAL
      año: "2024"
    },
    {
      id: 2,
      nombre: "App Delivery Pro",
      cliente: "FoodExpress MX",
      categoria: "App Móvil",
      descripcion: "Aplicación móvil iOS/Android para delivery de comida con tracking GPS en tiempo real, múltiples restaurantes y sistema de calificaciones.",
      resultados: "15,000+ descargas en 2 meses",
      tecnologias: ["React Native", "Firebase", "Google Maps"],
      link: "https://ejemplo-app.com",
      año: "2024"
    },
    {
      id: 3,
      nombre: "Portal Inmobiliario",
      cliente: "Premium Properties",
      categoria: "Plataforma Web",
      descripcion: "Plataforma completa para búsqueda y publicación de propiedades con tours virtuales 360°, filtros avanzados y sistema de citas.",
      resultados: "+200 propiedades vendidas",
      tecnologias: ["Next.js", "PostgreSQL", "AWS", "Matterport"],
      link: "https://ejemplo-inmobiliaria.com",
      año: "2023"
    },
    {
      id: 4,
      nombre: "Sistema de Reservas",
      cliente: "Hotel Boutique Querétaro",
      categoria: "Web App",
      descripcion: "Sistema de reservas y gestión hotelera con calendario dinámico, pagos online y panel administrativo completo.",
      resultados: "+250% ocupación promedio",
      tecnologias: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      link: "https://ejemplo-hotel.com",
      año: "2024"
    },
    {
      id: 5,
      nombre: "Dashboard Analytics",
      cliente: "DataTech Solutions",
      categoria: "Business Intelligence",
      descripcion: "Dashboard interactivo para análisis de datos en tiempo real con gráficas dinámicas, reportes automatizados y exportación a PDF/Excel.",
      resultados: "Ahorro de 50hrs/mes en reportes",
      tecnologias: ["React", "D3.js", "Python", "MongoDB"],
      link: "https://ejemplo-dashboard.com",
      año: "2024"
    },
    {
      id: 6,
      nombre: "App Fitness & Wellness",
      cliente: "FitLife Gym",
      categoria: "App Móvil",
      descripcion: "Aplicación de fitness con rutinas personalizadas, seguimiento de nutrición, métricas de salud y comunidad de usuarios.",
      resultados: "8,000+ usuarios activos mensuales",
      tecnologias: ["Flutter", "Firebase", "HealthKit", "Node.js"],
      link: "https://ejemplo-fitness.com",
      año: "2023"
    }
  ];

  const valores = [
    {
      icon: <Target size={32} />,
      titulo: "Enfoque en Resultados",
      descripcion: "Nos comprometemos con el éxito medible de cada proyecto"
    },
    {
      icon: <Users size={32} />,
      titulo: "Equipo Experto",
      descripcion: "Desarrolladores certificados con años de experiencia"
    },
    {
      icon: <Award size={32} />,
      titulo: "Calidad Garantizada",
      descripcion: "Código limpio, escalable y fácil de mantener"
    },
    {
      icon: <Clock size={32} />,
      titulo: "Cumplimiento de Plazos",
      descripcion: "Entregas puntuales sin sacrificar la calidad"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.nombre}! Te contactaremos pronto a ${formData.email}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 bg-blue-600" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 bg-slate-600" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/40"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/90 backdrop-blur-xl border-b border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              {/* Logo */}
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 to-slate-800" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Polaris Dev</span>
                <p className="text-xs text-blue-400">Software Development</p>
              </div>
            </motion.div>

            <div className="hidden md:flex gap-6">
              <a href="#nosotros" className="text-gray-300 hover:text-blue-500 transition-colors">Nosotros</a>
              <a href="#portfolio" className="text-gray-300 hover:text-blue-500 transition-colors">Portfolio</a>
              <a href="#contacto" className="text-gray-300 hover:text-blue-500 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="px-6 py-3 rounded-full text-sm font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                ⭐ Desarrollo de Software Premium en Querétaro, México
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <motion.span
                className="block bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Transformamos Ideas
              </motion.span>
              <motion.span
                className="block mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                en <span className="text-blue-400">Soluciones Digitales</span>
              </motion.span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Desarrollamos aplicaciones web y móviles de clase mundial que impulsan 
              el crecimiento de tu negocio con tecnología de vanguardia
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-blue-500/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicita tu Cotización
                <ArrowRight size={24} />
              </motion.a>
              
              <motion.a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-bold text-lg border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-16 flex items-center justify-center gap-12 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-500">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-500">Clientes Satisfechos</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <span className="text-gray-400">5.0 Calificación</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-blue-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">Polaris Dev</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-400">
              Somos un equipo de desarrolladores apasionados ubicados en Querétaro, México, 
              especializados en crear soluciones digitales innovadoras
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Nuestra Misión</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-400">
                Transformar ideas innovadoras en soluciones tecnológicas de clase mundial que 
                impulsen el crecimiento de nuestros clientes. Creemos en el poder de la tecnología 
                para cambiar negocios y vidas.
              </p>
              <p className="text-lg leading-relaxed text-gray-400">
                Nos especializamos en desarrollo web, aplicaciones móviles, e-commerce y sistemas 
                empresariales, utilizando las tecnologías más avanzadas del mercado.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Nuestra Visión</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-400">
                Ser la empresa de desarrollo de software líder en México, reconocida por la 
                excelencia en nuestras soluciones y el impacto positivo en los negocios de 
                nuestros clientes.
              </p>
              <p className="text-lg leading-relaxed text-gray-400">
                Construimos relaciones a largo plazo basadas en la confianza, la transparencia 
                y resultados medibles. Tu éxito es nuestro éxito.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, i) => (
              <motion.div
                key={valor.titulo}
                className="p-6 rounded-2xl text-center bg-slate-900/50 border border-slate-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="inline-block mb-4 text-blue-400"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {valor.icon}
                </motion.div>
                <h4 className="text-lg font-bold mb-2">{valor.titulo}</h4>
                <p className="text-sm text-gray-500">{valor.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              ¿Por qué <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">Elegirnos?</span>
            </h2>
            <p className="text-xl text-gray-400">Excelencia, innovación y compromiso con tu éxito</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, i) => (
              <motion.div
                key={beneficio.titulo}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="inline-block mb-4 text-blue-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {beneficio.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-400">{beneficio.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Proyectos <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">Exitosos</span>
            </h2>
            <p className="text-xl text-gray-400">Casos reales de éxito que transformaron negocios</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((proyecto, i) => (
              <motion.div
                key={proyecto.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setSelectedProject(proyecto)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-90" />
                
                <div className="relative p-6 h-72 flex flex-col justify-between text-white">
                  <div>
                    <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs font-semibold border border-blue-400/30">
                      {proyecto.categoria}
                    </span>
                    <span className="ml-2 text-xs opacity-75">{proyecto.año}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{proyecto.nombre}</h3>
                    <p className="text-sm opacity-90 mb-3">{proyecto.cliente}</p>
                    <div className="flex items-center gap-2 text-xs opacity-75">
                      <ExternalLink size={14} />
                      <span>Ver proyecto</span>
                    </div>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                      <ExternalLink size={20} />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                >
                  <div className="text-center p-6">
                    <p className="text-white text-sm mb-4 line-clamp-3">{proyecto.descripcion}</p>
                    <motion.button
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm hover:bg-blue-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Detalles
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="max-w-3xl w-full rounded-2xl overflow-hidden bg-slate-900"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8 text-white">
                <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs font-semibold border border-blue-400/30">
                  {selectedProject.categoria}
                </span>
                <h3 className="text-4xl font-bold mt-4 mb-2">{selectedProject.nombre}</h3>
                <p className="text-xl opacity-90">{selectedProject.cliente}</p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Code2 size={20} className="text-blue-400" />
                    Descripción del Proyecto
                  </h4>
                  <p className="leading-relaxed text-gray-400">{selectedProject.descripcion}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Award size={20} className="text-green-500" />
                    Resultados Obtenidos
                  </h4>
                  <p className="text-green-500 font-semibold text-lg">
                    ✓ {selectedProject.resultados}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Zap size={20} className="text-blue-400" />
                    Tecnologías Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.link && (
                  <div className="mb-6">
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      Visitar Proyecto
                    </motion.a>
                  </div>
                )}

                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-3 rounded-xl font-semibold bg-slate-800 hover:bg-slate-700"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cerrar
                  </motion.button>
                  <motion.a
                    href="#contacto"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar Similar
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Lo que <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">Incluimos</span>
            </h2>
            <p className="text-xl text-gray-400">Paquete completo para el éxito de tu proyecto</p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto p-10 rounded-2xl bg-slate-900/50 border border-slate-800"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Diseño UI/UX Profesional',
                'Código Limpio y Documentado',
                'Optimización SEO Avanzada',
                'Certificados SSL Incluidos',
                'Hosting por 1 Año',
                'Responsive Design',
                'Soporte Técnico 24/7',
                'Capacitación del Sistema',
                'Integración de Redes Sociales',
                'Google Analytics & Métricas',
                'Velocidad Optimizada',
                'Dominio .com Gratis',
                'Panel Administrativo',
                'Múltiples Revisiones',
                'Código Fuente Incluido',
                'Garantía de 6 Meses'
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className="text-lg font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              ¡Trabajemos <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">Juntos!</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Respuesta garantizada en menos de 24 horas
            </p>
          </motion.div>

          <motion.div
            className="p-8 md:p-12 rounded-2xl bg-slate-900/50 border border-slate-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-semibold text-lg">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl text-lg bg-slate-800 border-slate-700 focus:border-blue-500 text-white border-2 outline-none transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-lg">Teléfono *</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl text-lg bg-slate-800 border-slate-700 focus:border-blue-500 text-white border-2 outline-none transition-all"
                    placeholder="+52 442 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-lg">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl text-lg bg-slate-800 border-slate-700 focus:border-blue-500 text-white border-2 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-lg">Cuéntanos sobre tu proyecto *</label>
                <textarea
                  rows="6"
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl text-lg bg-slate-800 border-slate-700 focus:border-blue-500 text-white border-2 outline-none transition-all resize-none"
                  placeholder="Describe tu idea, necesidades y objetivos del proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/50"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensaje
                <Send size={24} />
              </motion.button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">📞 También puedes llamarnos directamente:</p>
                <a href="tel:+524421234567" className="block text-xl font-bold text-blue-500 hover:text-blue-600">
                  +52 442 123 4567
                </a>
                <p className="text-sm text-gray-500">
                  📧 O envíanos un email: <a href="mailto:hola@polarisdev.mx" className="text-blue-500 hover:text-blue-600">hola@polarisdev.mx</a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-800 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <span className="text-2xl font-bold">Polaris Dev</span>
                  <p className="text-xs text-blue-400">Software Development</p>
                </div>
              </div>
              <p className="mb-6 text-gray-400">
                Transformando ideas en soluciones digitales innovadoras desde Querétaro, México.
              </p>
              <div className="text-sm text-gray-500">
                <p className="mb-2">📍 Querétaro, México</p>
                <p className="mb-2">📞 +52 442 123 4567</p>
                <p>📧 hola@polarisdev.mx</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Desarrollo Web</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Apps Móviles</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">E-Commerce</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Consultoría Tech</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#nosotros" className="hover:text-blue-500 transition-colors">Nosotros</a></li>
                <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
                <li><a href="#contacto" className="hover:text-blue-500 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-gray-500">
            <p>© 2026 Polaris Dev. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">Hecho con ❤️ en Querétaro, México</p>
          </div>
        </div>
      </footer>
    </div>
  );
}