import { motion } from "framer-motion";
import {
  Palette,
  Code,
  BarChart3,
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "3D Design & Animation",
    description:
      "Stunning 3D visuals and interactive animations that captivate your audience and bring your brand to life.",
    color: "from-pink-500 to-rose-500",
    features: ["3D Modeling", "Motion Graphics", "Interactive Experiences"],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
    color: "from-blue-500 to-cyan-500",
    features: ["React/Next.js", "TypeScript", "Progressive Web Apps"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that maximize ROI and drive meaningful engagement with your target audience.",
    color: "from-green-500 to-emerald-500",
    features: ["SEO Optimization", "Social Media", "Analytics"],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Experience",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    color: "from-purple-500 to-violet-500",
    features: ["iOS & Android", "React Native", "UI/UX Design"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Brand Strategy",
    description:
      "Comprehensive brand development that establishes your unique identity and market positioning.",
    color: "from-orange-500 to-amber-500",
    features: ["Brand Identity", "Logo Design", "Style Guidelines"],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description:
      "Advanced optimization techniques to ensure lightning-fast loading times and superior user experiences.",
    color: "from-indigo-500 to-blue-500",
    features: ["Speed Optimization", "Core Web Vitals", "CDN Setup"],
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Digital
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end digital services that
            transform your vision into powerful, engaging experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm group hover:scale-105">
                <CardHeader className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-blue-600 font-medium text-sm mt-4 group-hover:text-blue-700"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your vision to life with our
            comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
              glowColor="rgb(255, 255, 255)"
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </AnimatedButton>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-semibold border-2 border-white/30 rounded-md hover:bg-white/10 transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
