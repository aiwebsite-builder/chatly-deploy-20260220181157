import { motion } from 'framer-motion';
import { Command } from 'lucide-react';

export default function Showcase() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="py-24 md:py-32 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background blobs for visual interest */}
      <div className="absolute -top-40 -left-40 bg-blob-indigo"></div>
      <div className="absolute -bottom-40 -right-40 bg-blob-pink"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" variants={itemVariants}>
          See It In Action
        </motion.h2>
        <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16" variants={itemVariants}>
          Experience the intuitive interface and powerful capabilities that will revolutionize your daily tasks.
        </motion.p>

        {/* Product Mockup */}
        <motion.div
          className="relative w-full max-w-5xl mx-auto h-[350px] md:h-[600px] perspective-1200"
          variants={itemVariants}
        >
          <div
            className="absolute inset-0 flex items-center justify-center
                       [transform:rotateX(20deg)_rotateY(10deg)_translateZ(0px)]
                       md:[transform:rotateX(15deg)_rotateY(8deg)_translateZ(0px)]
                       group-hover:[transform:rotateX(10deg)_rotateY(5deg)_translateZ(20px)]
                       transition-transform duration-700 ease-out"
          >
            {/* Soft glow behind the mockup */}
            <div className="absolute inset-x-10 inset-y-20 bg-emerald-500/30 blur-3xl rounded-3xl z-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-x-10 inset-y-20 bg-blue-500/30 blur-3xl rounded-3xl z-0 group-hover:opacity-60 transition-opacity duration-300 animation-delay-2000"></div>

            {/* Main Mockup Container */}
            <div className="relative w-full h-full bg-white/5 backdrop-blur-2xl rounded-3xl
                          border border-white/10 shadow-2xl shadow-emerald-900/50
                          flex flex-col overflow-hidden z-10">
              {/* Top bar */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="text-sm text-gray-400">dashboard.app.com</span>
                <Command className="w-5 h-5 text-gray-500" />
              </div>

              {/* Mockup content area */}
              <div className="flex-grow p-8 text-gray-300 flex items-center justify-center text-xl">
                <p>Advanced AI Dashboard - Data Visualizations Here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
