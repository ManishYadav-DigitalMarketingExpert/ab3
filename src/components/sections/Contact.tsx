import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/ui/animated-button";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "hello@digitalagency.com",
    detail: "We'll respond within 24 hours",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "+1 (555) 123-4567",
    detail: "Mon-Fri 9AM-6PM EST",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    description: "123 Innovation Street",
    detail: "San Francisco, CA 94107",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Office Hours",
    description: "Mon-Fri 9AM-6PM",
    detail: "Weekend support available",
  },
];

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" },
  { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
];

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 25%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 25%)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-blue-400 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Next Project
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? We'd love to hear about
            your project and discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Send us a message
                </CardTitle>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Company
                  </label>
                  <Input
                    placeholder="Your Company Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:border-blue-400 focus:outline-none">
                    <option value="" className="bg-slate-800">
                      Select project type
                    </option>
                    <option value="web-development" className="bg-slate-800">
                      Web Development
                    </option>
                    <option value="mobile-app" className="bg-slate-800">
                      Mobile App
                    </option>
                    <option value="3d-design" className="bg-slate-800">
                      3D Design
                    </option>
                    <option value="branding" className="bg-slate-800">
                      Branding
                    </option>
                    <option value="marketing" className="bg-slate-800">
                      Digital Marketing
                    </option>
                    <option value="other" className="bg-slate-800">
                      Other
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                  />
                </div>

                <AnimatedButton
                  className="w-full"
                  size="lg"
                  glowColor="rgb(59, 130, 246)"
                >
                  Send Message <Send className="ml-2 w-5 h-5" />
                </AnimatedButton>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {info.title}
                          </h3>
                          <p className="text-blue-400 font-medium">
                            {info.description}
                          </p>
                          <p className="text-gray-400 text-sm">{info.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-48 flex items-center justify-center"
            >
              <div className="text-center text-gray-400">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">Click to view our location</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-300 mb-8">
            Have questions? Check out our comprehensive FAQ section or reach out
            directly.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10"
          >
            View FAQ
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
