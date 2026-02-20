import { motion } from 'framer-motion';
import { Brain, Settings, Users, LineChart, Shield, Cloud } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Automate repetitive tasks and intelligent decision-making with advanced AI models.',
    },
    {
      icon: Settings,
      title: 'Customizable Workflows',
      description: 'Tailor workflows to your unique business needs with a flexible, drag-and-drop interface.',
    },
    {
      icon: Users,
      title: 'Seamless Collaboration',
      description: 'Empower your team with shared workspaces and real-time collaboration features.',
    },
    {
      icon: LineChart,
      title: 'Actionable Insights',
      description: 'Gain deep understanding of your operations with comprehensive analytics and reporting.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Protect your data with robust security protocols and compliance certifications.',
    },
    {
      icon: Cloud,
      title: 'Scalable Cloud Infrastructure',
      description: 'Scale effortlessly with a resilient cloud architecture designed for high performance.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-80 h-80 radial-glow-blue blur-3xl opacity-20 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 radial-glow-emerald blur-3xl opacity-20 transform -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" variants={itemVariants}>
            Features Designed for Growth
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
            Everything you need to boost your team's productivity and transform your business operations.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="card-gradient-border">
              <div className="card-glass h-full flex flex-col items-start text-left">
                <div className="p-3 bg-purple-500/20 rounded-xl mb-4 text-purple-400">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
