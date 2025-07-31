"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github as GithubIcon } from "lucide-react";

interface GithubProps {
  className?: string;
}

const Github: React.FC<GithubProps> = ({ className = "w-6 h-6" }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="cursor-pointer"
  >
    <GithubIcon className={className} />
  </motion.div>
);

export default Github;
