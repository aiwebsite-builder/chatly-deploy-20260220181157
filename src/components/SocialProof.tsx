import { motion } from 'framer-motion';
import { Zap, Feather, Code, User, Rocket } from 'lucide-react';

export default function SocialProof() {
  const logos = [
    { name: 'Acme Corp', icon: Zap },
    { name: 'FeatherDev', icon: Feather },
    { name: 'SyntaxAI', icon: Code },
    { name: 'UserFlow', icon: User },
    { name: 'Rocketship', icon: Rocket },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          className="text-gray-400 text-lg mb-10"
          variants={itemVariants}
        >
          Trusted by leading teams worldwide
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center"
          variants={itemVariants}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center text-gray-500 hover:text-gray-300 transition-colors duration-300"
              variants={itemVariants}
            >
              <logo.icon className="h-8 w-8 mr-3 text-white/50" />
              <span className="text-xl font-semibold">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
