import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      text: "ABC Developers delivered our project with outstanding quality and professionalism. Their commitment and transparency truly impressed us.",
      name: "Rahul Mehta",
      role: "Real Estate Investor",
      color: "bg-blue-500",
      letter: "A",
    },

    {
      text: "The team at ABC Developers understands customer needs deeply. Their execution speed and design quality are remarkable.",
      name: "Neha Sharma",
      role: "Interior Consultant",
      color: "bg-orange-500",
      letter: "B",
    },

    {
      text: "From planning to delivery, ABC Developers maintained excellence. A reliable partner for premium construction projects.",
      name: "Amit Verma",
      role: "Business Owner",
      color: "bg-emerald-500",
      letter: "C",
    },

    {
      text: "Their innovative approach and timely delivery helped us achieve record satisfaction from our customers.",
      name: "Priya Kapoor",
      role: "Project Manager",
      color: "bg-indigo-500",
      letter: "D",
    },
  ];

  /* Heading Animation */
  const headingVariant = {
    hidden: {
      x: -120,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  /* Paragraph Animation */
  const paraVariant = {
    hidden: {
      x: 120,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  /* Card Variants */
  const topToBottom = {
    hidden: {
      y: -120,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const bottomToTop = {
    hidden: {
      y: 120,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full py-24 px-6 bg-gradient-to-b from-[#cf6666] via-[#a780a4] to-[#5d87c8]">
      {/* Heading */}
      <motion.h2
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-2xl md:text-3xl  lg:text-4xl  font-bold text-black"
      >
        What Our Clients Say
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        variants={paraVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 max-w-4xl mx-auto text-center text-xl leading-relaxed text-white"
      >
        See what our valued clients say about{" "}
        <span className="font-bold text-white">ABC Developers.</span> We build
        trust, quality, and long-term relationships.
      </motion.p>

      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? topToBottom : bottomToTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="sm:h-auto px-5 py-3 flex flex-col justify-center items-start rounded-[22px] bg-white shadow-2xl overflow-hidden border border-[#f3f3f3] relative"
          >
            {/* Text */}
            <p className="text-[17px] leading-relaxed text-gray-600">
              {item.text}
            </p>

            {/* Profile */}
            <div className="mt-4 flex items-center gap-4">
              {/* Avatar */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white ${item.color}`}
              >
                {item.letter}
              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg font-bold text-black">{item.name}</h3>

                <p className="text-lg text-gray-500">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
