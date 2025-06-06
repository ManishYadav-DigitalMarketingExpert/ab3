import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedButton } from "@/components/ui/animated-button";

const stats = [
  {
    number: "500+",
    label: "Projects Delivered",
    icon: <Target className="w-6 h-6" />,
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    icon: <Award className="w-6 h-6" />,
  },
  { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
  {
    number: "5+",
    label: "Years Experience",
    icon: <Lightbulb className="w-6 h-6" />,
  },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We push boundaries with cutting-edge technologies and creative solutions.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our priority. We build lasting partnerships, not just projects.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Quality Driven",
    description:
      "Every line of code, every design element is crafted with precision and care.",
    icon: <Award className="w-8 h-8" />,
  },
  {
    title: "Results Focused",
    description:
      "We measure success by the impact we create for your business growth.",
    icon: <Target className="w-8 h-8" />,
  },
];

const achievements = [
  "Industry-leading 98% client retention rate",
  "Award-winning designs recognized globally",
  "500+ successful project deliveries",
  "Expertise across 15+ industries",
  "24/7 support and maintenance",
  "ISO certified development processes",
];

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50">
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
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and strategists
            dedicated to creating exceptional digital experiences that drive
            real business results.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Ideas Into Digital Reality
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded on the belief that great design and technology can solve
              real problems, we've been helping businesses of all sizes achieve
              their digital goals through innovative solutions and strategic
              thinking.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our multidisciplinary team combines creativity with technical
              expertise to deliver products that not only look amazing but
              perform exceptionally well in the real world.
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <AnimatedButton className="mt-8" size="lg">
              Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
            </AnimatedButton>
          </motion.div>

          {/* Right Content - Image with overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                >
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                </motion.div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg border"
            >
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg border"
            >
              <div className="text-2xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and define how we work with
            our clients and each other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm group hover:scale-105">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
