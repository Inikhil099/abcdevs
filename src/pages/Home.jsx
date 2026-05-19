import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "react-responsive-carousel";
import abcimage from "../assets/abcimage.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CarouselCard from "../components/CarouselCard";
import { motion } from "framer-motion";
import Legal from "../assets/Legal.webp";
import shreesha from "../assets/Shreeshaa.webp";
import itservices from "../assets/ITServices.webp";
import "swiper/css";
import ServicesCards from "../components/ServicesCards";
import Testimonials from "../components/Testimonials";

const CardText = [
  {
    title: "Smart IT Solutions for Digital Growth",
    des: "Comprehensive digital solutions including Website Development, Software Engineering, Mobile App Development, Digital Marketing, and Full-Scale IT Support to accelerate your business growth.",
    buttonTitle: "IT Services",
  },
  {
    title: "Trusted Legal Advice & Documentation",
    des: "Legal Consultancy, Agreements, Case Guidance, Company Registration aur Legal Documentation – sab kuch expert professionals ke saath.",
    buttonTitle: "Legal Consultation",
  },

  {
    title: "Reliable Property Services & Consulting",
    des: "Property Buying, Selling, Leasing, Investment Advice aur Complete Property Documentation – safe aur transparent deals ke liye.",
    buttonTitle: "Property Services",
  },

  {
    title: "Peaceful Spiritual Guidance for Life Balance",
    des: "Spiritual Consultation, Meditation Guidance, Positive Energy Solutions aur Premium Products jaise Shreeshaa Ghee.",
    buttonTitle: "Spiritual Services",
  },
  {
    title: "Healthy Body & Mind for Better Life",
    des: "Fitness Guidance, Health Consultation, Lifestyle Improvement, Wellness Programs aur Holistic Health Support – fit aur active rehne ke liye.",
    buttonTitle: "Health & Fitness",
  },

  {
    title: "Powerful PR & Branding for Your Identity",
    des: "Public Relations, Brand Promotion, Media Management, Influencer Marketing aur Reputation Building – aapke brand ko ek strong pehchaan dene ke liye.",
    buttonTitle: "PR & Branding",
  },

  {
    title: "Trendy Apparel Collection for Every Style",
    des: "Premium Quality Clothing, Latest Fashion Trends, Men & Women Apparels, Custom Designs aur Affordable Pricing – style ke saath comfort.",
    buttonTitle: "Explore Apparels",
  },

  {
    title: "Luxury Hotels & Stays for Comfort Living",
    des: "Budget Hotels, Luxury Resorts, Business Stays aur Family Hotels – best comfort, best price aur memorable experience ke saath.",
    buttonTitle: "Hotel Booking",
  },
  {
    title: "Smart Travel Planning with Make My Trip",
    des: "Flight Booking, Hotel Packages, Holiday Tours, Honeymoon & Family Trips – hassle-free travel planning trusted partners ke saath.",
    buttonTitle: "Plan Your Trip",
  },
];
const companyProfileCards = [
  {
    title: "Shreeshaa Ghee",
    image: shreesha,
    link: "#",
  },
  {
    title: "IT Services",
    image: itservices,
    link: "#",
  },
  {
    title: "Legal Consultancy",
    image: Legal,
    link: "../assets/Legal.webp",
  },
];

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
    x: -80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  },
};
function Home() {
  // #c3581b
  return (
    <div className="w-full ">
      <div className="justify-between min-h-[80vh] items-center  relative">
        <div className="absolute top-10 left-5 w-full">
          <Swiper
            pagination={true}
            className="mySwiper h-full w-full"
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {CardText.map((card) => (
              <SwiperSlide key={card.title}>
                <CarouselCard
                  buttonTitle={card.buttonTitle}
                  desc={card.des}
                  title={card.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          style={{
            backgroundImage: `url(${abcimage})`,
          }}
          className="w-full min-h-screen absolute bg-no-repeat right-0"
        />
      </div>
      <div className="w-full py-10 px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#14213d]">
            Our Company Profile
          </h2>

          <p className="mt-5 text-2xl text-[#6b7280]">
            ABC Developers – Delivering Excellence Across Multiple Business
            Domains
          </p>
        </div>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {companyProfileCards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="rounded-[20px] asp overflow-hidden bg-white shadow-md"
          >
            {/* Image */}
            <div className="h-[280px] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="py-5 px-6 text-center">
              <h3 className="text-xl font-medium text-[#14213d]">
                {card.title}
              </h3>

              <a
                href={card.link}
                className="inline-flex mt-4 Shadows px-4 py-2 rounded-xl transition-all duration-300 bg-[#e89a00] buttonAnimation text-white font-medium hover:opacity-90 "
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* feature cards  */}

      <ServicesCards />
      <Testimonials />
    </div>
  );
}

export default Home;
