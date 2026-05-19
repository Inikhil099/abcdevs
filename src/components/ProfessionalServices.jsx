import { motion } from "framer-motion";
import profserv from "../assets/profserv.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

const services = [
  {
    title: "Shreeshah Pure Ghee for Health, Energy & Positivity",
    desc: "Traditional methods se bana Shreeshaa Ghee, jo health, strength aur purity ka vishwas deta hai.",
    logo: "",
  },

  {
    title: "IT Services & Digital Solutions",
    desc: "Website Development, Software Solutions, Mobile Apps, Digital Marketing aur Complete IT Support jo aapke business ko digital growth deta hai.",
    logo: "",
  },

  {
    title: "Legal Consultation & Advisory",
    desc: "Legal Advice, Agreements, Company Registration, Case Guidance aur Complete Legal Documentation experienced professionals ke saath.",
    logo: "",
  },

  {
    title: "Property Consulting & Management",
    desc: "Property Buying, Selling, Leasing, Investment Consulting aur Property Documentation transparent aur secure deals ke liye.",
    logo: "",
  },

  {
    title: "Spiritual Guidance & Wellness",
    desc: "Spiritual Consultation, Meditation Guidance, Positive Energy Solutions aur Premium Products jaise Shreeshaa Ghee.",
    logo: "",
  },

  {
    title: "Health, Fitness & Wellness",
    desc: "Fitness Training, Health Consultation, Lifestyle Improvement Programs aur Holistic Wellness Support for a healthy life.",
    logo: "",
  },
];

export default function ProfessionalServices() {
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

  /* Cards Animation */
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
      y: 120,
      opacity: 0,
      scale: 0.9,
    },

    visible: {
      y: 0,
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full py-24 px-6 relative overflow-hidden">
      <img src={profserv} className="absolute" alt="" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <motion.h2
          variants={headingVariant}
          className="text-3xl md:text-5xl font-bold leading-tight text-[#222]"
        >
          Our <span className="text-[#1796e6]">Professional</span> Services For
          <br />
          <span className="text-[#ff6b63]">Complete Growth</span>
        </motion.h2>

        <motion.p
          variants={headingVariant}
          className="mt-6 text-2xl font-bold text-[#f5dede]"
        >
          ABC DEVELOPERS SERVICES
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="mt-20  w-full mx-auto z-10"
      >
        <Swiper
          pagination={true}
          className="mySwiper h-full w-full"
          modules={[Autoplay, Pagination]}
          slidesPerView={
            window.innerWidth > 1000 ? 3 : window.innerWidth > 700 ? 2 : 1
          }
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          loop={true}
        >
          {services.map(({ desc, logo, title }) => (
            <SwiperSlide>
              <motion.div
                key={title}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="rounded-[28px] bg-[#f8f8f8] shadow-xl border border-[#f1f1f1] px-10 py-12 text-center"
              >
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold leading-snug text-[#222]">
                  {title}
                </h3>

                {/* Icon/Image */}
                <div className="mt-10 flex justify-center">
                  <img
                    src={logo}
                    alt={title}
                    className="w-[90px] h-[90px] object-contain"
                  />
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#e6e6e6] my-10" />

                {/* Description */}
                <p className="md:text-lg leading-relaxed text-[#444]">{desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
