import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { InteractiveScene } from "@/components/3d/InteractiveScene";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />

      {/* 3D Scene Background */}
      <div className="absolute inset-0 opacity-30">
        <InteractiveScene />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 text-blue-400"
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">
                Next-Gen Digital Marketing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Digital Presence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Elevate your brand with cutting-edge 3D experiences, innovative
              marketing strategies, and data-driven results that captivate your
              audience and drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <AnimatedButton
                size="lg"
                className="px-8 py-4 text-lg"
                glowColor="rgb(59, 130, 246)"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </AnimatedButton>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-semibold text-white border-2 border-purple-400 rounded-md hover:bg-purple-400/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">5x</div>
                <div className="text-sm text-gray-400">ROI Average</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block h-[600px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
              <InteractiveScene />
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <Zap className="w-6 h-6 text-yellow-400 mb-2" />
              <div className="text-sm text-white font-medium">
                Real-time Analytics
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <Sparkles className="w-6 h-6 text-blue-400 mb-2" />
              <div className="text-sm text-white font-medium">
                3D Experiences
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};
