import React from 'react';
import { FiMusic, FiMapPin, FiCpu, FiCoffee } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
            {/* Spectacular Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="container relative z-10 px-6 mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Sobre mí</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        className="lg:w-1/3 bg-[#111111]/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 text-gray-300 space-y-6 text-lg leading-relaxed">
                            <p>
                                Soy un desarrollador por convicción. Me apasiona el ritmo y la estructura, tanto en la música como en el código.
                                Disfruto vivir en el Caribe conectando la tecnología con la economía local.
                            </p>
                            <p>
                                Mi enfoque integra una metodología inspirada en el <strong className="text-cyan-400">Growth Hacking</strong>: construir experiencias digitales que aporten un crecimiento
                                exponencial a los negocios, optimizando sus operaciones con una visión de producto táctica.
                            </p>
                        </div>
                    </motion.div>

                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                            className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:bg-[#161616] transition-colors group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)" }}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                                <FiMapPin />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Base en Bacalar</h3>
                            <p className="text-gray-400 text-sm">Inmerso en el ecosistema de Quintana Roo, combinando el trabajo remoto con la promoción del turismo local.</p>
                        </motion.div>

                        <motion.div
                            className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:bg-[#161616] transition-colors group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(255, 0, 127, 0.1)" }}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                                <FiMusic />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Techno & Vibra</h3>
                            <p className="text-gray-400 text-sm">El ritmo del Techno me impulsa cuando escribo código. La música es la gasolina para esas largas sesiones.</p>
                        </motion.div>

                        <motion.div
                            className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:bg-[#161616] transition-colors group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)" }}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                                <FiCpu />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Consultoría & Growth</h3>
                            <p className="text-gray-400 text-sm">Especialista en Growth Hacking y creación de SaaS conectando negocios físicos con lo digital.</p>
                        </motion.div>

                        <motion.div
                            className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:bg-[#161616] transition-colors group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(255, 165, 0, 0.1)" }}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                                <FiCoffee />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Arte de la Mixología</h3>
                            <p className="text-gray-400 text-sm">Me apasiona preparar cócteles. Ponerle un toque humano, creativo y refinado a cada bebida, igual al código.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
