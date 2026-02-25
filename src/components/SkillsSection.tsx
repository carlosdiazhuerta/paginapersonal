import React from 'react';
import { FiCode, FiDatabase, FiSettings, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
    // ...skillCategories array...
    const skillCategories = [
        {
            title: 'Frontend & UI',
            icon: <FiCode />,
            skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vanilla CSS', 'HTML5']
        },
        {
            title: 'Backend & Cloud',
            icon: <FiDatabase />,
            skills: ['Firebase (Firestore, Auth, Functions)', 'Node.js', 'GraphQL', 'Bases de Datos Relacionales (SQL)', 'Bases de Datos No Relacionales (NoSQL)', 'REST APIs', 'Serverless Architecture']
        },
        {
            title: 'Herramientas & Ecosistema',
            icon: <FiSettings />,
            skills: ['Git / GitHub', 'Vercel (CI/CD)', 'Figma', 'Stripe Integration', 'SEO Técnico', 'i18n']
        },
        {
            title: 'Aptitudes (Soft Skills)',
            icon: <FiStar />,
            skills: ['Autogestión', 'Trabajo Remoto', 'Visión de Producto', 'Resolución de Problemas', 'Comunicación Asíncrona']
        }
    ];

    return (
        <section id="skills" className="relative py-24 bg-[#050505] overflow-hidden">
            {/* Spectacular Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="container relative z-10 px-6 mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Habilidades & Aptitudes</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } },
                        hidden: {}
                    }}
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-[#111111]/90 backdrop-blur-xl border border-white/5 p-8 rounded-3xl group relative overflow-hidden flex flex-col items-center text-center"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }}
                        >
                            {/* Animated Border Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center text-3xl text-cyan-400 mb-6 group-hover:text-fuchsia-400 group-hover:scale-110 transition-all duration-300 relative z-10 shadow-lg"
                                whileHover={{ rotate: 10 }}
                            >
                                {category.icon}
                            </motion.div>

                            <h3 className="text-xl font-bold text-white mb-6 relative z-10">{category.title}</h3>

                            <div className="flex flex-wrap justify-center gap-2 relative z-10">
                                {category.skills.map(skill => (
                                    <motion.span
                                        key={skill}
                                        className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-black/50 border border-white/10 rounded-lg whitespace-nowrap"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.1)", color: "#22d3ee", borderColor: "rgba(6, 182, 212, 0.3)" }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
