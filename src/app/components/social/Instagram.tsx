"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram as InstagramIcon } from "lucide-react";

interface InstagramProps {
  className?: string;
}

const Instagram: React.FC<InstagramProps> = ({ className = "w-6 h-6" }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="cursor-pointer"
  >
    <InstagramIcon className={className} />
  </motion.div>
);

export default Instagram;
