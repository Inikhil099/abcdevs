import { motion } from "framer-motion";
import aboutimg from "../assets/aboutimg.webp";

function AboutSection() {
  const stats = [
    {
      icon: "🎉",
      number: "320",
      title: "Projects Completed",
      desc: "Successfully delivered IT, business and professional service projects across multiple industries.",
    },

    {
      icon: "🚀",
      number: "640",
      title: "Legal & Finance Projects",
      desc: "Successfully handled legal consultations, financial planning and finance recovery projects for businesses and individuals.",
    },

    {
      icon: "💰",
      number: "1200",
      title: "Satisfied Clients",
      desc: "ABC Developer delivers reliable, result-driven, and all-in-one business solutions that build long-term trust and complete client satisfaction.",
    },
  ];

  /* Left Image Animation */
  const imageVariant = {
    hidden: {
      x: -100,
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

  /* Right Content Animation */
  const contentVariant = {
    hidden: {
      x: 100,
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

  return (
    <div className="w-full mb-10  px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-[45%_55%_60%_40%/45%_40%_60%_55%] " />

            {/* Image */}
            <img
              src={aboutimg}
              alt="Business Growth"
              className="relative z-10 w-full max-w-[450px] h-[450px] object-cover rounded-[45%_55%_60%_40%/45%_40%_60%_55%]"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] leading-tight">
            Build, Manage And Grow Your
            <br />
            Business In Any Domain With
            <br />
            ABC Developers
          </h2>

          {/* Paragraph */}
          <p className="mt-5 text-md md:text-xl lg:text-2xl leading-relaxed text-[#333]">
            Looking to expand your business in any industry? ABC Developer
            provides all-in-one professional solutions to help you grow faster.
            Connect with us today and turn your vision into success.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  y: 80,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
              >
                {/* Icon */}
                <div className="text-lg md:text-3xl my-2 text-[#ff8b6a]">
                  {item.icon}
                </div>

                {/* Number */}
                <h3 className="text-3xl font-bold text-[#222]">
                  {item.number}
                </h3>

                {/* Title */}
                <p className="text-2xl text-[#ff6b63] font-medium">
                  {item.title}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-200 my-3" />

                {/* Description */}
                <p className="text-lg leading-relaxed text-[#333]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default AboutSection;
