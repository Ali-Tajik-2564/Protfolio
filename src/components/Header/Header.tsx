'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [selectedValue, setSelectedValue] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // تشخیص سایز صفحه برای موبایل
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // بستن منو موبایل بعد از کلیک روی آیتم
  const handleMobileClick = (section: string) => {
    setSelectedValue(section);
    scrollToTop(section);
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const logovariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 },
    },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3 },
    },
  };

  const scrollToTop = (section: string) => {
    setSelectedValue(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-16 sm:h-20 sticky top-0 flex px-4 sm:px-8 md:px-12 lg:px-20 items-center justify-between bg-[#1A1A1A]/80 backdrop-blur-md border-b border-[#4C1D95] z-50">
        {/* لوگو */}
        <motion.p
          variants={logovariants}
          initial="hidden"
          animate="visible"
          className="text-xl bg-none sm:text-2xl md:text-3xl text-[#4C1D95]  cursor-pointer font-bold"
          onClick={() => scrollToTop('Home')}>
          Ali Tajik
        </motion.p>

        {/* دسکتاپ منو - فقط در سایزهای بزرگتر از موبایل */}
        <motion.ul
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex w-auto h-full items-center justify-between space-x-4 lg:space-x-6">
          {['Home', 'About Me', 'Projects', 'Skills', 'Contact Me'].map(
            (item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: '#4C1D95' }}
                className={`h-full flex items-center justify-center text-white cursor-pointer transition-colors duration-200 text-sm lg:text-base ${
                  selectedValue === item.replace(' ', '')
                    ? 'border-b-2 border-[#4C1D95] text-[#4C1D95]'
                    : ''
                }`}
                onClick={() => scrollToTop(item.replace(' ', ''))}>
                {item}
              </motion.li>
            ),
          )}
        </motion.ul>

        {/* دکمه رزومه - دسکتاپ */}
        <Link href="/" className="hidden md:block">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="w-28 sm:w-32 h-10 sm:h-12 bg-none flex items-center justify-center space-x-1.5 
              hover:bg-[#4C1D95] border-2 border-[#4C1D95] text-[#4C1D95] hover:text-white 
              rounded-full cursor-pointer group text-sm sm:text-base">
            <span>Resume</span>
            <motion.span
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <FaArrowRight className="fill-[#4C1D95] group-hover:fill-white text-xs sm:text-sm" />
            </motion.span>
          </motion.button>
        </Link>

        {/* دکمه منو موبایل */}
        <div className="md:hidden flex items-center space-x-3">
          {/* دکمه رزومه موبایل (نسخه کوچک) */}
          <Link href="/">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileTap="tap"
              className="w-20 h-9 bg-none flex items-center justify-center space-x-1 
                hover:bg-[#4C1D95] border-2 border-[#4C1D95] text-[#4C1D95] hover:text-white 
                rounded-full cursor-pointer group text-xs">
              <span>Resume</span>
              <FaArrowRight className="fill-[#4C1D95] group-hover:fill-white text-xs" />
            </motion.button>
          </Link>

          {/* همبرگر منو */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:text-[#4C1D95] transition-colors">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.div>

      {/* منوی موبایل (اسلاید از راست) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-16 right-0 w-full md:hidden bg-[#1A1A1A]/95 backdrop-blur-lg border-b border-[#4C1D95] z-40 shadow-2xl">
            <div className="flex flex-col items-center py-8 space-y-6">
              {['Home', 'About Me', 'Projects', 'Skills', 'Contact Me'].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, color: '#4C1D95' }}
                    onClick={() => handleMobileClick(item.replace(' ', ''))}
                    className={`text-white text-lg py-2 px-6 rounded-lg transition-all duration-200
                    ${
                      selectedValue === item.replace(' ', '')
                        ? 'bg-[#4C1D95]/20 text-[#4C1D95] border border-[#4C1D95]'
                        : 'hover:bg-white/10'
                    }`}>
                    {item}
                  </motion.button>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
