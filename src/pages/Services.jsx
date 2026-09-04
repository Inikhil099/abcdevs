import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "📧",
    title: "Email Marketing",
    desc: "Build strong customer relationships with powerful email campaigns.",
    points: ["Email Newsletter Setup", "Email Sequences", "Email Monetization"],
    color: "bg-red-500",
  },

  {
    icon: "📊",
    title: "Paid Advertising",
    desc: "Run high-converting paid ad campaigns across multiple platforms.",
    points: ["Google Ads", "Facebook Ads", "LinkedIn & Twitter Ads"],
    color: "bg-blue-500",
  },

  {
    icon: "🔍",
    title: "SEO",
    desc: "Improve rankings and drive organic traffic with SEO strategies.",
    points: ["SEO Audits", "On-Page SEO", "Off-Page SEO"],
    color: "bg-yellow-500",
  },

  {
    icon: "🧩",
    title: "Funnel Optimization",
    desc: "Optimize customer journeys and improve conversion rates.",
    points: ["Analytics Analysis", "A/B Testing", "Conversion Optimization"],
    color: "bg-purple-500",
  },

  {
    icon: "▶️",
    title: "Content Marketing",
    desc: "Create engaging content that builds trust and grows your brand.",
    points: ["Articles & Written Content", "Video Content", "Infographics"],
    color: "bg-orange-500",
  },

  {
    icon: "👍",
    title: "Social Media Marketing",
    desc: "Grow your audience and engagement through social platforms.",
    points: ["Content Creation", "Community Management", "Social Media Growth"],
    color: "bg-cyan-500",
  },
];

/* Animation */
const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    y: 80,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Services() {
  return (
    <div className="w-full py-20 px-6">
      {/* Heading */}
      <motion.div
        initial={{
          y: -80,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="text-center"
      >
        <p className="text-[#ff4d6d] text-3xl font-semibold">Our Services</p>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#111827]">
          High-impact marketing
          <br />
          services
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
              transition: {
                duration: 0.3,
              },
            }}
            className="rounded-[28px] border border-[#f1f1f1] bg-white shadow-lg p-8"
          >
            {/* Icon */}
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg ${item.color}`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-bold text-[#111827]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-gray-500 leading-relaxed">{item.desc}</p>

            {/* Points */}
            <div className="mt-6 space-y-4">
              {item.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-sm text-white ${item.color}`}
                  >
                    ✓
                  </div>

                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="flex justify-center mt-16"
      >
        <button className="rounded-full cursor-pointer bg-[#ff695f] px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">
          Get In Touch →
        </button>
      </motion.div>
    </div>
  );
}

export default Services;
