import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-commerce 3D Experience",
    description:
      "Interactive 3D product visualization platform with AR capabilities and seamless checkout experience.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    tags: ["React", "Three.js", "WebGL", "AR"],
    category: "E-commerce",
    metrics: { conversion: "+45%", engagement: "+200%" },
  },
  {
    id: 2,
    title: "SaaS Dashboard Redesign",
    description:
      "Modern analytics dashboard with real-time data visualization and interactive charts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    tags: ["TypeScript", "React", "D3.js", "TailwindCSS"],
    category: "SaaS",
    metrics: { userSatisfaction: "+90%", taskCompletion: "+60%" },
  },
  {
    id: 3,
    title: "Brand Identity System",
    description:
      "Complete brand overhaul with interactive brand guidelines and design system documentation.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&crop=center",
    tags: ["Branding", "Design System", "Figma", "React"],
    category: "Branding",
    metrics: { brandRecognition: "+150%", consistency: "+80%" },
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile application with native performance and stunning animations.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
    tags: ["React Native", "TypeScript", "Firebase", "Expo"],
    category: "Mobile",
    metrics: { downloads: "100K+", rating: "4.8/5" },
  },
  {
    id: 5,
    title: "AI-Powered Platform",
    description:
      "Machine learning platform with intuitive interface for data analysis and predictive modeling.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&crop=center",
    tags: ["AI/ML", "Python", "React", "TensorFlow"],
    category: "AI/ML",
    metrics: { accuracy: "95%", processingSpeed: "+300%" },
  },
  {
    id: 6,
    title: "Virtual Event Platform",
    description:
      "Immersive virtual event experience with 3D environments and real-time networking.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
    tags: ["WebRTC", "Three.js", "Socket.io", "React"],
    category: "Virtual Events",
    metrics: { attendance: "10K+", networkingConnections: "+500%" },
  },
];

const categories = [
  "All",
  "E-commerce",
  "SaaS",
  "Branding",
  "Mobile",
  "AI/ML",
  "Virtual Events",
];

export const Portfolio = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="container mx-auto px-4">
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
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses
            transform their digital presence with innovative solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/10 text-gray-300 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
