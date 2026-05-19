import { motion } from "framer-motion";
import portfoliobg from "../assets/portfolio-bg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import healthandfitness from "../assets/healthandfitness.jpg";
import itdigital from "../assets/itdigital.webp";
import shreeshaghee2 from "../assets/shreeshaghee2.webp";
import legalconsultation from "../assets/legalconsultation.webp";
import propertyconsulting from "../assets/propertyconsulting.webp";
import transformative from "../assets/transformative.webp";
import hoverbg from "../assets/hover-bg.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const portfolioCardsContent = [
  {
    title: "Health & Fitness",
    des: "Wellness and Lifestyle Care",
    image: healthandfitness,
    link: "https://abcdevelopers.in/health-fitness.html",
  },
  {
    title: "Shreesha Ghee",
    des: "Pure A2 Desi Cow Ghee",
    image: shreeshaghee2,
    link: "https://abcdevelopers.in/ghee_products.html",
  },
  {
    title: "IT & Digital Solutions",
    des: "Web, Software & Technology",
    image: itdigital,
    link: "https://abcdevelopers.in/it-services.html",
  },
  {
    title: "Legal Consultation",
    des: "Advisory & Documentation",
    image: legalconsultation,
    link: "https://abcdevelopers.in/legal-services.html",
  },
  {
    title: "Property Consulting",
    des: "Buy, Sell & Invest",
    image: propertyconsulting,
    link: "https://abcdevelopers.in/property-services.html",
  },
  {
    title: "Spiritual Guidance",
    des: "Peace, Positivity & Wellness",
    image: transformative,
    link: "https://abcdevelopers.in/spiritual-services.html",
  },
];
function PortfolioCard() {
  const [currentCard, setcurrentCard] = useState("");
  const navigate = useNavigate();
  const headingVariant = {
    hidden: {
      y: -80,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const paraVariant = {
    hidden: {
      y: 80,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full relative px-6">
      <img src={portfoliobg} className="absolute top-5" alt="" />
      {/* Heading */}
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-[#111827] leading-tight">
          Our Core <span className="text-[#1796e6]">Business Services</span>
          <br />& <span className="text-[#ff695f] ">Success Solutions</span>
        </h2>

        <p className="mt-2 text-lg md:text-3xl text-[#ff695f] opacity-40 font-bold">
          ABC DEVELOPER PORTFOLIO
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative group w-full my-10 overflow-hidden mx-auto">
        {window.innerWidth > 900 ? (
          <Swiper
            pagination={true}
            className="mySwiper h-full w-full"
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {portfolioCardsContent.map(({ title, des, image, link }) => (
              <SwiperSlide>
                <div
                  key={title}
                  onMouseOver={() => {
                    setcurrentCard(title);
                  }}
                  onMouseLeave={() => {
                    setcurrentCard("");
                  }}
                  className="relative overflow-hidden rounded-[28px] mx-5 max-h-[350px] max-w-[420px] shadow-2xl"
                >
                  <img
                    src={image}
                    alt="card"
                    className="w-full h-105 object-fit"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute -translate-x-1/2 p-10 w-[80%] rounded-[28px] max-h-[420px] min-h-[300px] max-w-[420px]
              
             ${currentCard === title ? "-translate-y-[130%]" : ""}
              shadow-2xl
              transition-all
              duration-300
              bg-white/45
              text-black
             
              left-1/2
              `}
                  >
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl" />

                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold ">{title}</h3>

                      <p className="mt-5 text-xl">{des}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full flex flex-wrap justify-center items-center items-center gap-y-10">
            {portfolioCardsContent.map(({ title, des, image, link }) => (
              <div
                key={title}
                onClick={()=>{navigate(link)}}
                onMouseOver={() => {
                  setcurrentCard(title);
                }}
                onMouseLeave={() => {
                  setcurrentCard("");
                }}
                className="relative overflow-hidden rounded-[28px] mx-5  max-h-[350px] max-w-[420px] shadow-2xl"
              >
                <img
                  src={image}
                  alt="card"
                  className="w-full h-105 object-fit"
                />

                {/* Overlay */}
                <div
                  className={`absolute -translate-x-1/2 p-10 w-[80%] rounded-[28px] max-h-[420px] min-h-[300px] max-w-[420px]
              
             ${currentCard === title ? "-translate-y-[120%]" : ""}
              shadow-2xl
              transition-all
              duration-300
              bg-white/45
              text-black
             
              left-1/2
              `}
                >
                  {/* Decorative Blob */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold ">{title}</h3>

                    <p className="mt-5 text-xl">{des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Card */}

        {/* Floating Bottom Card */}
      </div>
    </div>
  );
}
export default PortfolioCard;
