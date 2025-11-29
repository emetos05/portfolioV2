"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const Intro: React.FC = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl"
      >
        {/* <p className="text-lg text-green-100 leading-relaxed mb-8">
          I'm a software engineer building modern apps that eliminate business
          pain points. With experience in full-stack development, I specialize
          in creating scalable solutions using modern technologies like React,
          Next.js, TypeScript, Python and Node.js.
        </p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <p className="text-green-100">
            Currently, I'm passionate about building intuitive user experiences
            and robust backend systems. Whether it's job management application
            for tradespeople or loan eligibility checker for newcomers, I love
            turning complex problems into simple, elegant solutions.
          </p>

          <p className="text-green-100">
            When I'm not coding, you'll find me reading a book, playing
            volleyball, watching live sports or at a nearby sports bar, going
            for walks around the waterfront, exploring new technologies and
            staying up to date with trends in AI and web development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.button
            onClick={handleScrollToProjects}
            className="flex items-center gap-2 px-6 py-3 bg-[#c7ff5e] text-green-950 font-semibold rounded-lg hover:bg-[#c7ff5e]/90 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </motion.button>

          <motion.a
            href="mailto:dan.emehin@gmail.com"
            className="flex items-center gap-2 px-6 py-3 border border-green-700 text-green-100 rounded-lg hover:bg-green-800/30 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-l-4 border-[#c7ff5e] pl-6"
        >
          <p className="text-sm text-green-300 mb-3">Currently working with:</p>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Node.js",
              "Express",
              "ASP.Net",
              "PostgreSQL",
              "Tailwind CSS",
              "Python",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className="px-3 py-1 bg-green-800/30 text-green-100 text-sm rounded-full border border-green-700/50"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
