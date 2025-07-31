"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import GithubIcon from "./components/social/Github";
import LinkedInIcon from "./components/social/LinkedIn";
import TwitterIcon from "./components/social/Twitter";
import InstagramIcon from "./components/social/Instagram";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="bg-green-950/80 min-h-screen">
      <Navbar />

      <div className="md:flex relative min-h-screen items-center max-w-screen-xl mx-auto w-full">
        {/* Left Sidebar */}
        <motion.div
          className="fixed absolute left-5 hidden md:flex md:flex-col md:shrink-0 h-screen w-28 items-center z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-t from-[#c7ff5e]" />
          <motion.div
            className="w-2 h-2 rounded-full bg-[#c7ff5e]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="text-green-100">
            <ul className="h-52 flex flex-col justify-between items-center my-2 py-2 mx-auto px-auto [&_li:hover]:text-yellow-100">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://github.com/emetos05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://linkedin.com/in/danielemehin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#" aria-label="Twitter">
                  <TwitterIcon />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#" aria-label="Instagram">
                  <InstagramIcon />
                </Link>
              </motion.li>
            </ul>
          </div>
          <motion.div
            className="w-2 h-2 rounded-full bg-[#c7ff5e]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-b from-[#c7ff5e]" />
        </motion.div>

        {/* Main Content */}
        <main className="md:flex md:flex-col md:w-full max-w-7xl min-h-screen md:px-36 text-yellow-100 relative">
          {/* Hero Section */}
          <motion.section
            id="about"
            className="min-h-screen flex flex-col justify-center py-20 px-8 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4 text-lg md:text-xl">Hi, I'm</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-[#c7ff5e] text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
                Dan Emehin.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-green-100 text-4xl sm:text-6xl lg:text-7xl font-bold mb-8">
                I piece things together.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="mt-10 text-green-100 text-lg max-w-4xl leading-relaxed mb-8">
                I'm a software engineer focused on eliminating business and
                operations bottlenecks with software solutions. With experience
                in full-stack development, I specialize in creating scalable
                solutions using modern web technologies like React, Next.js,
                TypeScript and Node.js.
              </p>
            </motion.div>

            {/* Intro Component */}
            <Intro />
          </motion.section>

          {/* Experience Section */}
          <div id="experience">
            <Experience />
          </div>

          {/* Projects Section */}
          <div id="projects">
            <Projects />
          </div>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="py-20 px-8 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#c7ff5e] mb-4">
                Get In Touch
              </h2>
              <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you have a question or just want to
                say hi, I'll try my best to get back to you!
              </p>
              <motion.a
                href="mailto:dan.emehin@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#c7ff5e] text-green-950 font-semibold rounded-lg hover:bg-[#c7ff5e]/90 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Say Hello
              </motion.a>
            </div>
          </motion.section>
        </main>

        {/* Right Sidebar */}
        <motion.div
          className="fixed absolute right-5 hidden md:flex md:flex-col md:shrink-0 h-screen w-28 items-center z-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-t from-[#c7ff5e]" />
          <motion.div
            className="w-2 h-2 rounded-full bg-[#c7ff5e]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <div className="h-52 flex flex-col items-center my-2 py-2 mx-auto px-auto text-green-100 hover:text-yellow-100">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="mailto:dan.emehin@gmail.com"
                className="[writing-mode:tb] hover:text-[#c7ff5e] transition-colors duration-300"
              >
                dan.emehin@gmail.com
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="w-2 h-2 rounded-full bg-[#c7ff5e]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-b from-[#c7ff5e]" />
        </motion.div>
      </div>
    </div>
  );
}
