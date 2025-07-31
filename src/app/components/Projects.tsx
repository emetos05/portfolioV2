"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Code,
  Star,
  GitFork,
} from "lucide-react";
import { projects, featuredProjects } from "../../data/projects";
import { cn } from "../../lib/utils";

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col md:flex-row items-center gap-8 mb-16",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Project Image/Preview */}
      <div className="flex-1 relative">
        <div className="relative bg-gradient-to-br from-green-900/20 to-yellow-900/20 rounded-lg p-8 border border-green-800/30 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#c7ff5e]/20 rounded-full flex items-center justify-center">
              <Code className="w-8 h-8 text-[#c7ff5e]" />
            </div>
            <div className="text-2xl font-bold text-[#c7ff5e] mb-2">
              {project.name}
            </div>
            <div className="text-green-100 text-sm mb-4">
              {new Date(project.created_at).getFullYear()}
            </div>
            {project.language && (
              <div className="inline-block px-3 py-1 bg-green-800/30 text-green-100 text-xs rounded-full">
                {project.language}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex-1 space-y-4">
        <motion.div
          className="space-y-4"
          whileHover={{ x: isEven ? 10 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-[#c7ff5e] capitalize">
              {project.name.replace(/[-_]/g, " ")}
            </h3>
            {featuredProjects.includes(project.name) && (
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            )}
          </div>

          <div className="bg-green-950/50 backdrop-blur-sm border border-green-800/30 rounded-lg p-6">
            <p className="text-green-100 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-green-300">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(project.updated_at).toLocaleDateString()}</span>
            </div>
            {project.stargazers_count > 0 && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>{project.stargazers_count}</span>
              </div>
            )}
            {project.forks_count > 0 && (
              <div className="flex items-center gap-1">
                <GitFork className="w-4 h-4" />
                <span>{project.forks_count}</span>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <motion.a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-800/30 text-green-100 rounded-lg border border-green-700/50 hover:bg-green-700/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>

            {project.homepage && (
              <motion.a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#c7ff5e]/20 text-[#c7ff5e] rounded-lg border border-[#c7ff5e]/30 hover:bg-[#c7ff5e]/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#c7ff5e] mb-4">
            Featured Projects
          </h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack
            development, from concept to deployment.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/emetos05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-800/30 to-[#c7ff5e]/20 text-green-100 rounded-lg border border-green-700/50 hover:border-[#c7ff5e]/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View More Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
