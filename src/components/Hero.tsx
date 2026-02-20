import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="relative overflow-hidden py-24 md:py-32 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background radial glows and blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 radial-glow-purple blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 radial-glow-blue blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.p
          className="inline-flex items-center gap-2 text-sm md:text-base text-purple-300 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-800/50"
          variants={itemVariants}
        >
          <Sparkles className="h-4 w-4 text-purple-400" />
          Introducing our latest innovation
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text"
          variants={itemVariants}
        >
          Transform Your Workflow <br className="hidden md:block" /> with AI Precision
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Unleash the power of intelligent automation to streamline tasks, boost productivity,
          and achieve unparalleled efficiency in every aspect of your business.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-20" variants={itemVariants}>
          <button className="btn-primary-gradient">
            Get Started Free
          </button>
          <button className="btn-secondary-outline">
            Learn More
          </button>
        </motion.div>

        {/* Mockup with 3D depth and subtle float */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[550px] perspective-1200"
          variants={itemVariants}
        >
          <div
            className="absolute inset-0 flex items-center justify-center
                       [transform:rotateX(20deg)_rotateY(-10deg)_translateZ(0px)]
                       md:[transform:rotateX(15deg)_rotateY(-15deg)_translateZ(0px)]
                       group-hover:[transform:rotateX(10deg)_rotateY(-5deg)_translateZ(20px)]
                       transition-transform duration-700 ease-out animate-float"
          >
            {/* Blurred glow behind mockup */}
            <div className="absolute inset-x-10 inset-y-20 bg-purple-500/30 blur-3xl rounded-3xl z-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-x-10 inset-y-20 bg-blue-500/30 blur-3xl rounded-3xl z-0 group-hover:opacity-60 transition-opacity duration-300 animation-delay-2000"></div>

            {/* Mockup card */}
            <div className="relative w-full h-full bg-white/5 backdrop-blur-2xl rounded-3xl
                          border border-white/10 shadow-2xl shadow-purple-900/50
                          flex items-center justify-center p-8 overflow-hidden z-10">
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <p className="text-gray-300 text-3xl font-bold">Your Dashboard Here</p>
              <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
