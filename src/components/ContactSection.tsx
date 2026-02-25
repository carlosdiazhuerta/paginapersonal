import React from 'react';
import { FiMail, FiLinkedin, FiGithub, FiInstagram, FiMonitor, FiCode, FiTrendingUp, FiSearch } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
            {/* Spectacular Background Glows */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-fuchsia-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="container relative z-10 px-6 mx-auto max-w-4xl">
                <motion.div
                    className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none"></div>

                    <div className="text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Consultoría & Desarrollo estratégico</h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Estoy disponible para nuevos retos y para digitalizar la operativa de tu ecosistema. ¿En qué te puedo ayudar?
                        </p>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12 text-left">
                            <motion.div
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10"
                                whileHover={{ y: -2 }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl mb-4">
                                    <FiMonitor />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Creación de Páginas Web</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Desarrollo a medida de sitios web profesionales corporativos atractivos para empresas, enfocados en proyectar confianza y captar clientes.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10"
                                whileHover={{ y: -2 }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center text-xl mb-4">
                                    <FiCode />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Desarrollo SaaS & Plataformas</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Arquitectura escalable para aplicaciones web (SaaS), e-commerce, integraciones de pago, Módulos y bases de datos robustas (Firebase).
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10"
                                whileHover={{ y: -2 }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center text-xl mb-4">
                                    <FiTrendingUp />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Consultoría Growth Hacking</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Estrategia de negocios adaptada al entorno B2B, digitalización operativa para ecosistemas turísticos y herramientas de conversión (CRO).
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10"
                                whileHover={{ y: -2 }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xl mb-4">
                                    <FiSearch />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">SEO Moderno (LLMs)</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Posicionamiento técnico en buscadores tradicionales y estructuración AI-friendly para aparecer en ChatGPT, Claude, Perplexity y Gemini.
                                </p>
                            </motion.div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <motion.a
                                href="mailto:franciscodiazhuerta97@gmail.com"
                                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 px-6 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto overflow-hidden"
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)" }}
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                    <FiMail />
                                </div>
                                <div className="flex flex-col text-left overflow-hidden">
                                    <span className="text-gray-300 group-hover:text-white font-bold">Email</span>
                                    <span className="text-sm text-gray-400 truncate w-full" title="franciscodiazhuerta97@gmail.com">franciscodiazhuerta97@gmail.com</span>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://wa.me/522217359367"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#25D366]/50 px-6 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto overflow-hidden"
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(37, 211, 102, 0.2)" }}
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] text-xl group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                                    <FaWhatsapp />
                                </div>
                                <div className="flex flex-col text-left overflow-hidden">
                                    <span className="text-gray-300 group-hover:text-white font-bold">WhatsApp</span>
                                    <span className="text-sm text-gray-400">+52 221 735 9367</span>
                                </div>
                            </motion.a>
                        </div>

                        <div className="flex items-center justify-center gap-4 border-t border-white/10 pt-8 mt-8">
                            {[
                                { icon: <FiGithub />, href: "https://github.com/carlosdiazhuerta", label: "GitHub", hoverClass: "hover:bg-gray-100 hover:text-black", borderHover: "hover:border-gray-100/50" },
                                { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/francisco-diaz-2a7075275/", label: "LinkedIn", hoverClass: "hover:bg-[#0077b5] hover:text-white", borderHover: "hover:border-[#0077b5]/50" },
                                { icon: <FiInstagram />, href: "https://instagram.com/_paco_diaz", label: "Instagram", hoverClass: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white", borderHover: "hover:border-fuchsia-500/50" }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-gray-400 transition-all duration-300 ${social.hoverClass} ${social.borderHover}`}
                                    aria-label={social.label}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-20 text-center text-gray-500 text-sm">
                <p className="mb-2">© {new Date().getFullYear()} Francisco Diaz. Desarrollado con React, TypeScript & Tailwind CSS.</p>
                <p className="text-cyan-500/80 font-medium">Viviendo en el Caribe, con ritmo Techno 🎵</p>
            </footer>
        </section>
    );
};

export default ContactSection;
