"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building,
  Code,
  Database,
  Globe,
} from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    location: "Toronto, ON",
    period: "2022 - Present",
    description: [
      "Developed full-stack web applications using modern technologies",
      "Built responsive user interfaces with React, NextJS, and TypeScript",
      "Implemented backend solutions with NodeJS and database integration",
      "Collaborated with clients to deliver scalable business solutions",
      "Created invoice tracking applications for tradespeople",
    ],
    technologies: [
      "React",
      "NextJS",
      "TypeScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "Software Engineer",
    company: "Transport Canada",
    location: "Toronto, ON",
    period: "2024 - Present",
    description: [
      "Developed scalable, secure APIs with versioning, documentation, and OAuth2 authentication",
      "Enhanced application security by centralizing secrets and credentials with Key Vaults and policy-based authorization",
      "Optimized app performance with distributed caching reducing API latency by over 40%",
      "Implemented CI/CD pipelines integrating gated builds, automated tests, artifact promotion, and multi-environment deployments",
      "Integrated open telemetry logs for better app performance insights and monitoring",
    ],
    technologies: [
      "NodeJS",
      "JavaScript",
      "Bootstrap",
      "PostgreSQL",
      "Redis",
      "Azure DevOps",
    ],
  },
  {
    title: "Software Developer",
    company: "ISM Canada",
    location: "Regina, SK",
    period: "2021 - 2024",
    description: [
      "Developed scalable APIs with RESTful principles, leveraging CQRS, versioning, and JWT authentication",
      "Designed modular frontend components using React, enabling reusable and maintainable UI systems",
      "Integrated 3rd-party APIs and built service orchestration layers for business logic and data processing",
      "Optimized database interactions with compiled queries and intelligent batching strategies",
      "Instrumented applications with structured logging, monitoring, and diagnostic tools to ensure reliability and observability", 
    ],
    technologies: ["JavaScript", "React", "HTML5", "CSS3", "MongoDB"],
  },
];

const skills = [
  {
    name: "Frontend",
    icon: Globe,
    items: ["React", "NextJS", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: Database,
    items: ["NodeJS", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    name: "Tools",
    icon: Code,
    items: ["Git", "Docker", "Vercel", "Netlify", "Render"],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-20" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#c7ff5e] mb-4">
            Experience
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Building digital solutions with modern technologies and best
            practices.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c7ff5e] via-green-600 to-[#c7ff5e] transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#c7ff5e] rounded-full transform -translate-x-1/2 border-4 border-green-950 z-10"></div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                } ml-16 md:ml-0`}
              >
                <motion.div
                  className="bg-green-950/50 backdrop-blur-sm border border-green-800/30 rounded-lg p-6"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-5 h-5 text-[#c7ff5e]" />
                    <h3 className="text-xl font-bold text-[#c7ff5e]">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="text-green-100 font-semibold mb-2">
                    {exp.company}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-green-300 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-green-100 text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#c7ff5e] rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-800/30 text-green-100 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-[#c7ff5e] text-center mb-12">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-green-950/50 backdrop-blur-sm border border-green-800/30 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#c7ff5e]/20 rounded-full flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-[#c7ff5e]" />
                </div>
                <h4 className="text-lg font-semibold text-[#c7ff5e] mb-3">
                  {category.name}
                </h4>
                <div className="space-y-2">
                  {category.items.map((skill, i) => (
                    <div key={i} className="text-green-100 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
