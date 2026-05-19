import React from "react";
import ABCLogo from "../assets/ABCLogo.webp";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import footerbg from "../assets/footerbg.webp";
import { motion } from "framer-motion";

const leftToRight = {
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

const rightToLeft = {
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

const bottomToTopContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const bottomToTop = {
  hidden: {
    y: 80,
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

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundRepeat: "no-repeat",
      }}
      className="relative overflow-hidden  px-8 py-14"
    >
      {/* maps and form section  */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side - Map */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-[550px] rounded-[30px] overflow-hidden shadow-lg"
        >
          <iframe
            title="location-map"
            src="https://www.google.com/maps?q=ATS%20Bouquet%20Noida&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full rounded-[30px] px-8 py-12 md:px-14 md:py-16 shadow-lg"
        >
          {/* Top Curve */}
          <div className="relative mb-12">
            <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none"></div>
          </div>

          <div className="space-y-10">
            {/* Input */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-sky-300 bg-transparent outline-none py-3 text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Surname"
                className="w-full border-b border-sky-300 bg-transparent outline-none py-3 text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border-b border-sky-300 bg-transparent outline-none py-3 text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Your Message"
                className="w-full border-b border-sky-300 bg-transparent outline-none py-3 text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Captcha Mock */}
            <div className="space-y-5">
              <p className=" font-medium text-gray-800 leading-snug">
                Enter the characters shown below
              </p>

              <div className="flex items-center gap-4">
                <div className="bg-black text-white px-4 py-4 rounded-xl tracking-[6px]  font-bold">
                  TG78hU
                </div>

                <button
                  type="button"
                  className="w-12 h-12 rounded-full bg-[#ff6b5f] text-white flex items-center justify-center"
                >
                  ↻
                </button>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter CAPTCHA"
                  className="w-full border-b border-sky-300 bg-transparent outline-none py-3 text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 px-5 py-4 cursor-pointer rounded-full bg-[#ff6b5f] text-white  font-medium hover:opacity-90 transition"
            >
              Submit Request
            </button>
          </div>
        </motion.div>
      </div>

      {/* lower footer section  */}

      <motion.div
        variants={bottomToTopContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative my-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4"
      >
        {/* Logo + Socials */}
        <motion.div variants={bottomToTop} className="space-y-6">
          <img src={ABCLogo} alt="ABC Developers" className="w-[110px]" />

          <p className="text-xl text-gray-400">info@abcdevelopers.com</p>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-white">
              <FaWhatsapp />
            </div>

            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-white">
              <FaTwitter />
            </div>

            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-white">
              <FaInstagram />
            </div>

            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-white">
              <FaLinkedinIn />
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div variants={bottomToTop}>
          <h2 className="mb-8 text-xl font-bold text-gray-800">Services</h2>

          <ul className="space-y-5 text-gray-400">
            <li>IT & Digital Solutions</li>
            <li>Legal Consultation</li>
            <li>Property Consulting</li>
            <li>Financial Advice</li>
          </ul>
        </motion.div>

        {/* Wellness */}
        <motion.div variants={bottomToTop}>
          <h2 className="mb-8 text-xl font-bold text-gray-800">
            Wellness & Community
          </h2>

          <ul className="space-y-5 text-gray-400">
            <li>Spiritual Guidance</li>
            <li>Pure Ghee for Health</li>
            <li>Energy & Positivity</li>
            <li>Community Support</li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={bottomToTop} className="relative">
          <h2 className="mb-8 text-xl font-bold text-gray-800">Newsletter</h2>

          <p className="mb-8 text-gray-400">Get latest updates</p>

          <div className="flex overflow-hidden rounded-full bg-sky-500 shadow-lg">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-transparent px-6 py-4 text-white placeholder:text-white outline-none"
            />

            <button className="bg-orange-500 px-2 font-semibold text-white">
              Subscribe
            </button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
