'use client';
import React from 'react';
import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa';

export default function Landing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
  };

  const svgVariants = {
    hidden: { opacity: 0, x: 50, rotateY: 10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  const scrollTo = (section: string) => {
    if (section === 'Projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'Contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between 
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 
        bg-gradient-to-bl from-[#1A1A1A] via-[#221F2C] to-[#28223A] overflow-hidden">
      {/* بخش چپ - متن‌ها */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-1/2 flex flex-col items-start space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 
          mt-8 sm:mt-12 md:mt-16 lg:mt-0 px-2 sm:px-0">
        <motion.p
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] 
            font-semibold text-[#4C1D95] leading-tight">
          Ali Tajik
        </motion.p>

        <motion.p
          variants={textVariants}
          className="text-lg sm:text-xl md:text-2xl text-[#38BDF8] font-medium">
          Your go-to engineer for Next.js
        </motion.p>

        <motion.div
          variants={textVariants}
          className="flex flex-col items-start space-y-3 sm:space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            Building scalable, high-performance web applications with modern
            technologies. Specialized in Next.js, Nest.js, TypeScript, and clean
            architecture.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center gap-3 sm:gap-4">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-28 sm:w-32 h-10 sm:h-12 bg-none px-3 sm:px-4 py-2 flex items-center justify-center space-x-1.5 
                hover:bg-[#4C1D95] border-2 border-[#4C1D95] text-[#4C1D95] hover:text-white 
                rounded-full cursor-pointer group text-sm sm:text-base"
              onClick={() => scrollTo('Projects')}>
              <span>Projects</span>
              <motion.span
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}>
                <FaArrowRight className="fill-[#4C1D95] group-hover:fill-white text-xs sm:text-sm" />
              </motion.span>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-28 sm:w-32 h-10 sm:h-12 bg-none px-3 sm:px-4 py-2 flex items-center justify-center
                hover:bg-[#38BDF8] border-2 border-[#38BDF8] text-[#38BDF8] hover:text-white 
                rounded-full cursor-pointer group text-sm sm:text-base"
              onClick={() => scrollTo('Contact')}>
              <span>Contact Me</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* بخش راست - SVG کد (سایز ثابت و مناسب) */}
      <motion.div
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 500"
          width="340"
          height="425"
          className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[400px] h-auto">
          <defs>
            <filter
              id="purpleGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="cursorGrad" x1="0" y1="0" x2="0" y2="100">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>

          <rect width="400" height="500" fill="transparent" />

          {/* Large Curly Braces Background */}
          <motion.text
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            x="280"
            y="80"
            fontFamily="'Courier New', monospace"
            fontSize="180"
            fontWeight="300"
            fill="#7C3AED"
            filter="url(#purpleGlow)">
            {'{ }'}
          </motion.text>

          {/* Terminal Header */}
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}>
            <rect
              x="20"
              y="20"
              width="340"
              height="28"
              rx="6"
              fill="#1A1A1A"
              stroke="#7C3AED"
              strokeWidth="0.5"
            />
            <circle cx="32" cy="34" r="4" fill="#EF4444" opacity="0.7" />
            <circle cx="46" cy="34" r="4" fill="#F59E0B" opacity="0.7" />
            <circle cx="60" cy="34" r="4" fill="#10B981" opacity="0.7" />
            <text
              x="190"
              y="39"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fill="#A1A1AA"
              textAnchor="middle">
              portfolio/src/components/Hero.tsx
            </text>
          </motion.g>

          {/* Code Line 1 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.3 }}>
            <text
              x="20"
              y="75"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#38BDF8">
              import
            </text>
            <text
              x="85"
              y="75"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              {'{ useState, useEffect }'}
            </text>
            <text
              x="270"
              y="75"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#38BDF8">
              from
            </text>
            <text
              x="315"
              y="75"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#7DD3FC">
              'react'
            </text>
            <text
              x="365"
              y="75"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A1A1AA">
              ;
            </text>
          </motion.g>

          {/* Code Line 2 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}>
            <text
              x="20"
              y="105"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#38BDF8">
              const
            </text>
            <text
              x="65"
              y="105"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              Hero
            </text>
            <text
              x="105"
              y="105"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              = ()
            </text>
            <text
              x="135"
              y="105"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#38BDF8">
              =&gt;
            </text>
            <text
              x="165"
              y="105"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              {'{'}
            </text>
          </motion.g>

          {/* Code Line 3 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.3 }}>
            <text
              x="35"
              y="135"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#38BDF8">
              return
            </text>
            <text
              x="95"
              y="135"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              (
            </text>
          </motion.g>

          {/* Code Line 4 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}>
            <text
              x="50"
              y="165"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#7DD3FC">
              &lt;section
            </text>
            <text
              x="140"
              y="165"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              className
            </text>
            <text
              x="225"
              y="165"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              =
            </text>
            <text
              x="235"
              y="165"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#7DD3FC">
              "hero-section"
            </text>
            <text
              x="340"
              y="165"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              &gt;
            </text>
          </motion.g>

          {/* Code Line 5 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.3 }}>
            <text
              x="65"
              y="195"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              &lt;h1&gt;
            </text>
            <text
              x="115"
              y="195"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              Ali Tajik
            </text>
            <text
              x="210"
              y="195"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              &lt;/h1&gt;
            </text>
          </motion.g>

          {/* Code Line 6 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.3 }}>
            <text
              x="65"
              y="225"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              &lt;p&gt;
            </text>
            <text
              x="105"
              y="225"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#38BDF8">
              Your go-to engineer
            </text>
            <text
              x="270"
              y="225"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              &lt;/p&gt;
            </text>
          </motion.g>

          {/* Code Line 7 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.95, duration: 0.3 }}>
            <text
              x="65"
              y="255"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              &lt;button&gt;
            </text>
            <text
              x="145"
              y="255"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              View Projects
            </text>
            <text
              x="250"
              y="255"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#A78BFA">
              &lt;/button&gt;
            </text>
          </motion.g>

          {/* Code Line 8 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.3 }}>
            <text
              x="50"
              y="285"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#7DD3FC">
              &lt;/section&gt;
            </text>
          </motion.g>

          {/* Code Line 9 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.3 }}>
            <text
              x="35"
              y="315"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              );
            </text>
          </motion.g>

          {/* Code Line 10 */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.3 }}>
            <text
              x="20"
              y="345"
              fontFamily="'Courier New', monospace"
              fontSize="13"
              fill="#FFFFFF">
              {'}'}
            </text>
          </motion.g>

          {/* Blinking Cursor */}
          <motion.rect
            x="35"
            y="358"
            width="2"
            height="18"
            rx="1"
            fill="url(#cursorGrad)"
            animate={{ opacity: [0.7, 0.2, 0.7] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Floating Elements */}
          <motion.g
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 0.12, rotate: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}>
            <text
              x="340"
              y="130"
              fontFamily="'Courier New', monospace"
              fontSize="24"
              fill="#7C3AED">
              &lt;/&gt;
            </text>
          </motion.g>

          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6, type: 'spring' }}>
            <text
              x="370"
              y="250"
              fontFamily="'Courier New', monospace"
              fontSize="20"
              fill="#38BDF8">
              ⚛️
            </text>
          </motion.g>

          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}>
            <text
              x="50"
              y="430"
              fontFamily="'Courier New', monospace"
              fontSize="28"
              fill="#A78BFA">
              {'{ }'}
            </text>
          </motion.g>

          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.08, x: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}>
            <text
              x="370"
              y="410"
              fontFamily="'Courier New', monospace"
              fontSize="20"
              fill="#7DD3FC">
              →
            </text>
          </motion.g>

          {/* Decorative Dots */}
          <motion.circle
            cx="390"
            cy="80"
            r="2"
            fill="#A78BFA"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0.2, 0.3] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="330"
            cy="350"
            r="1.5"
            fill="#38BDF8"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0.15, 0.2] }}
            transition={{ delay: 1.7, duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="70"
            cy="490"
            r="2.5"
            fill="#7C3AED"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0.15, 0.2] }}
            transition={{ delay: 1.9, duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="360"
            cy="480"
            r="1.8"
            fill="#7DD3FC"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0.1, 0.15] }}
            transition={{ delay: 2.1, duration: 2, repeat: Infinity }}
          />

          {/* Vertical Line Decor */}
          <motion.g
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.05, scaleY: 1 }}
            transition={{ delay: 1.5, duration: 1 }}>
            <line
              x1="70"
              y1="80"
              x2="70"
              y2="480"
              stroke="#A78BFA"
              strokeWidth="1"
            />
            <line
              x1="68"
              y1="100"
              x2="72"
              y2="100"
              stroke="#A78BFA"
              strokeWidth="1"
            />
            <line
              x1="68"
              y1="130"
              x2="72"
              y2="130"
              stroke="#A78BFA"
              strokeWidth="1"
            />
            <line
              x1="68"
              y1="160"
              x2="72"
              y2="160"
              stroke="#A78BFA"
              strokeWidth="1"
            />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
