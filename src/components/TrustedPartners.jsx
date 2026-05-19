import { motion } from "framer-motion";

function TrustedPartners() {
  const partners = [
    {
      name: "ASHOK JEWELS",
      desc: "Premium Jewellery Brand",
      image: "https://dummyimage.com/300x180/7a0000/ffffff&text=ASHOK",
    },

    {
      name: "ALLheart Web",
      desc: "Digital Marketing & IT Solutions",
      image: "https://dummyimage.com/300x180/f4f4f4/1e3a5f&text=AllHeart+Web",
    },

    {
      name: "Sidharth Rajsekar",
      desc: "Personal Branding & Funnel Expert",
      image: "https://dummyimage.com/300x180/f97316/ffffff&text=SIDHARTH",
    },

    {
      name: "AFAI",
      desc: "Association of Financial Advisors of India",
      image: "https://dummyimage.com/300x180/f4f4f4/2563eb&text=AFAI",
    },

    {
      name: "UDAN Media & Communication",
      desc: "Advertising & Media Solutions",
      image: "https://dummyimage.com/300x180/ffffff/ef4444&text=UDAN",
    },

    {
      name: "SBKA",
      desc: "Business Consulting & Strategy",
      image: "https://dummyimage.com/300x180/f4f4f4/15803d&text=SBKA",
    },
  ];

  /* Heading Animation */
  const headingVariant = {
    hidden: {
      y: -80,
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

  /* Paragraph Animation */
  const paraVariant = {
    hidden: {
      y: 80,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  /* Card Container */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  /* Creative Card Animation */
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotate: -8,
      y: 80,
    },

    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full py-20 px-6 bg-gradient-to-br from-[#f7f2f6] via-[#f3edf3] to-[#edf7fb]">
      {/* Heading */}
      <motion.h2
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-[#111827]"
      >
        Our Trusted Partners
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        variants={paraVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 lg:text-xl text-lg w-[80%] mx-auto text-center text-gray-500"
      >
        We proudly collaborate with industry leaders in Digital Marketing, IT,
        Finance & Business Growth.
      </motion.p>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.05,
        }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
      >
        {partners.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -12,
              scale: 1.03,
              transition: {
                duration: 0.3,
              },
            }}
            className="sm:h-auto px-5 py-5 flex flex-col justify-center items-center rounded-[22px] bg-white shadow-2xl overflow-hidden border border-[#f3f3f3] relative group"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/0 via-pink-100/0 to-orange-100/0 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Logo */}
            <div className="relative z-10 rounded-[18px] bg-[#f8fafc] p-4 shadow-inner w-full flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[80px] object-contain"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-5 text-center">
              <h3 className="text-xl font-bold text-[#111827]">{item.name}</h3>

              <p className="mt-3 text-[17px] leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default TrustedPartners;
