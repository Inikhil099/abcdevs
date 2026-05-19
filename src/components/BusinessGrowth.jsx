import { motion } from "framer-motion";
import socials from "../assets/socials.webp";
import socials2 from "../assets/socials2.webp";
import shreeshaghee2 from "../assets/shreeshaghee2.webp";
import lapmic from "../assets/laptopmic.webp";

const cards = [
  {
    icon: "🚀",
    title: "Complete Business Support",
    desc: "From planning and branding to marketing and operations, we manage every stage of your business journey.",
  },

  {
    icon: "📈",
    title: "Growth-Driven Strategies",
    desc: "Smart strategies designed to increase visibility, revenue, and long-term business growth.",
  },

  {
    icon: "🤝",
    title: "Trusted Business Partner",
    desc: "We work as your growth partner, helping all types of businesses succeed in competitive markets.",
  },
  {
    icon: "🤝",
    title: "Trusted Business Partner",
    desc: "We work as your growth partner, helping all types of businesses succeed in competitive markets.",
  },
];

const images = [socials, socials2, lapmic, shreeshaghee2];

/* Heading Animation */
const headingVariant = {
  hidden: {
    y: -100,
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
    y: -60,
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

/* Left Cards Animation */
const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* Right Images Animation */
const imageVariants = {
  hidden: {
    scale: 0.2,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function BusinessSolutionsSection() {
  return (
    <div className="w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* Small Heading */}
          <motion.p
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-[#ff4d7d] text-sm font-medium"
          >
            Built For Business Growth
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-2xl md:text-4xl font-bold leading-tight text-[#111827]"
          >
            All-in-One Business Solutions
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={paraVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-lg md:text-xl leading-relaxed text-[#222]"
          >
            We help businesses of every size and industry grow faster and
            smarter. From startups to established enterprises, we provide
            complete business solutions that turn ideas into profitable
            realities. Partner with us to scale your business with confidence,
            innovation, and long-term success.
          </motion.p>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="rounded-[24px] bg-[#63a8d6] px-6 py-10 text-center shadow-xl"
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ff4d7d] text-3xl">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold leading-snug text-[#111827]">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="mt-6 text-lg leading-relaxed text-[#111827]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.button
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
            className="mt-10 rounded-full cursor-pointer bg-black px-10 py-5 text-xl font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            Connect Now
          </motion.button>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 gap-6"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3,
                },
              }}
              className="overflow-hidden rounded-[24px] shadow-2xl"
            >
              <img
                src={img}
                alt="business"
                className="w-full h-[270px] object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default BusinessSolutionsSection;
