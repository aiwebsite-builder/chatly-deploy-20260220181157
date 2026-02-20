import { motion } from 'framer-motion';

export default function CallToAction() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
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
      className="py-24 md:py-32 relative text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute w-[800px] h-[800px] radial-glow-purple blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Join thousands of innovators who are already leveraging AI Precision to drive efficiency and growth.
          Start your free trial today.
        </motion.p>
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <button className="btn-primary-gradient">
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
