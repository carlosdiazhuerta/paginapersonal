import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Sobre mí', href: '#about' },
        { name: 'Experiencia', href: '#experience' },
        { name: 'Habilidades', href: '#skills' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'}`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:opacity-80 transition-opacity z-50 relative">
                    &lt;FD /&gt;
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Contactar
                    </a>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden relative z-50 p-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0 w-full h-screen bg-[#0a0a0a]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 z-40 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold text-gray-300 hover:text-cyan-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Hablemos
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
