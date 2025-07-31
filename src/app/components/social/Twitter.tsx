"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter as TwitterIcon } from "lucide-react";

interface TwitterProps {
  className?: string;
}

const Twitter: React.FC<TwitterProps> = ({ className = "w-6 h-6" }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="cursor-pointer"
  >
    <TwitterIcon className={className} />
  </motion.div>
);

export default Twitter;
