import React from "react";
import { motion } from "framer-motion";
const features = [
  {
    icon: "💻",
    title: "IT & Digital Solutions",
    desc: [
      "Website & software development",
      "AI tools & automation systems",
      "Mobile app development",
      "Digital growth strategies",
    ],
  },

  {
    icon: "⚖️",
    title: "Legal Consultation",
    desc: [
      "Professional legal advice",
      "Agreement & contract drafting",
      "Company registration support",
      "Documentation & compliance",
    ],
  },

  {
    icon: "🏢",
    title: "Property Consulting",
    desc: [
      "Residential property guidance",
      "Commercial property solutions",
      "Investment consultation",
      "Verified documentation support",
    ],
  },

  {
    icon: "🧘",
    title: "Spiritual Guidance",
    desc: [
      "Meditation & healing support",
      "Positive energy consultation",
      "Spiritual wellness guidance",
      "Life balance solutions",
    ],
  },

  {
    icon: "🛍️",
    title: "Retail & Marketplace",
    desc: [
      "Premium quality products",
      "Trusted online marketplace",
      "Affordable pricing solutions",
      "Customer-focused services",
    ],
  },

  {
    icon: "👗",
    title: "Fashion & Lifestyle",
    desc: [
      "Trendy apparel collections",
      "Premium fabric quality",
      "Comfortable lifestyle wear",
      "Modern fashion designs",
    ],
  },

  {
    icon: "🏥",
    title: "Health & Wellness",
    desc: [
      "Fitness & health guidance",
      "Lifestyle improvement support",
      "Wellness consultation",
      "Holistic health solutions",
    ],
  },

  {
    icon: "✈️",
    title: "Travel & Hospitality",
    desc: [
      "Luxury hotel bookings",
      "Travel planning assistance",
      "Holiday & honeymoon packages",
      "Premium hospitality support",
    ],
  },
];

const headingVariant = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    x: -120,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function ServicesCards() {
  return (
    <div className="w-full py-20 px-6">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headingVariant}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl  lg:text-4xl font-bold text-[#111827]">
          Why Choose ABC Developers
        </h2>

        <p className="mt-6 lg:text-xl text-lg w-[80%] mx-auto text-gray-500">
          We provide next-generation professional services combining technology,
          finance, consulting, spirituality & wellness for complete growth.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
  once: true,
  amount: 0.05,
}}
        className="mt-16 sm:grid sm:grid-cols-1 justify-center items-center gap-10 md:grid-cols-2 lg:grid-cols-3 "
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="sm:h-auto py-5 my-5 rounded-[22px] bg-white shadow-2xl overflow-hidden border border-[#f3f3f3] relative"
          >
            {/* Content */}
            <div className="p-2 flex flex-col justify-center items-center">
              {/* Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f8fafc] shadow-md text-2xl">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="mt-8 text-xl font-bold leading-tight text-[#111827]">
                {item.title}
              </h2>

              {/* Points */}
              <div className="mt-4 space-y-5">
                {item.desc.map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    {/* Tick */}
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0ea5e9] text-sm font-bold text-white">
                      ✓
                    </div>

                    {/* Text */}
                    <p className="text-[17px] leading-relaxed text-gray-600">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="mt-5 w-[90%] lg:w-1/2 cursor-pointer rounded-tl-2xl rounded-br-2xl py-2 font-semibold text-white bg-[#761b13] transition-all hover:-translate-y-2.5 duration-300 hover:scale-[1.02] hover:shadow-xl">
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ServicesCards;
