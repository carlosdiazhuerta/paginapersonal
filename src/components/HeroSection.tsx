import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#050505]">
            {/* Spectacular Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/20 to-fuchsia-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-12 md:mt-0">

                {/* Text Content */}
                <motion.div
                    className="flex-1 text-center lg:text-left flex flex-col gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p
                        className="text-cyan-400 font-bold tracking-widest text-sm md:text-base uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >HOLA, SOY</motion.p>

                    <motion.h1
                        className="text-5xl md:text-7xl font-black tracking-tighter text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >Francisco Diaz</motion.h1>

                    <motion.h2
                        className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >Desarrollador y Emprendedor Digital.</motion.h2>

                    <motion.p
                        className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Con base en Quintana Roo, México. <strong className="text-white">Consultor estratégico</strong> y especialista en crear soluciones tecnológicas inspiradas en <strong className="text-white">Growth Hacking</strong> para conectar negocios físicos con el mundo digital.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href="#experience" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] w-full sm:w-auto justify-center">
                            Ver Proyectos <FiArrowRight className="text-xl" />
                        </a>
                        <a href="#contact" className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold hover:bg-white/10 transition-all hover:scale-105 hover:border-cyan-500/50 w-full sm:w-auto text-center">
                            Hablemos
                        </a>
                    </motion.div>
                </motion.div>

                {/* Spectacular Visual Element */}
                <motion.div
                    className="flex-1 w-full max-w-[500px] lg:max-w-none relative"
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 rounded-3xl blur-3xl"></div>

                    <div className="relative bg-[#0d1117] border border-white/10 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] overflow-hidden">
                        {/* Windows controls mock */}
                        <div className="flex gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>

                        <pre className="text-sm md:text-base font-mono leading-loose overflow-x-auto text-gray-300">
                            <code>
                                <span className="text-fuchsia-400">const</span> <span className="text-cyan-400">developer</span> = {'{'}
                                <br />
                                &nbsp;&nbsp;name: <span className="text-green-400">'Francisco Diaz'</span>,
                                <br />
                                &nbsp;&nbsp;location: <span className="text-green-400">'Bacalar, MX'</span>,
                                <br />
                                &nbsp;&nbsp;skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Firebase'</span>],
                                <br />
                                &nbsp;&nbsp;passion: <span className="text-green-400">'Techno & Code'</span>
                                <br />
                                {'};'}
                            </code>
                        </pre>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
