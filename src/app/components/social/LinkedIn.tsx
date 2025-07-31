"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface LinkedInProps {
  className?: string;
}

const LinkedIn: React.FC<LinkedInProps> = ({ className = "w-6 h-6" }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="cursor-pointer"
  >
    <Linkedin className={className} />
  </motion.div>
);

export default LinkedIn;
