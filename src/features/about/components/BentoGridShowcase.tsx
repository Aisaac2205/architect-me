"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Animation variants for each grid item
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 14,
    },
  },
};

/**
 * Props for the BentoGridShowcase component.
 * Each prop represents a "slot" in the grid.
 */
interface BentoGridShowcaseProps {
  /** Slot for the tall card (spans 3 rows on desktop) */
  integration: React.ReactNode;
  /** Slot for the top-middle card */
  trackers: React.ReactNode;
  /** Slot for the top-right card */
  statistic: React.ReactNode;
  /** Slot for the middle-middle card */
  focus: React.ReactNode;
  /** Slot for the middle-right card */
  productivity: React.ReactNode;
  /** Slot for the wide bottom card (spans 2 cols on desktop) */
  shortcuts: React.ReactNode;
  /** Optional class names for the grid container */
  className?: string;
}

/**
 * A responsive, animated bento grid layout component.
 * It arranges six content slots in the specific layout
 * seen in the "Product Features" UI.
 */
export const BentoGridShowcase = ({
  integration,
  trackers,
  statistic,
  focus,
  productivity,
  shortcuts,
  className,
}: BentoGridShowcaseProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        // Core grid layout: 1 col on mobile, 3 on desktop
        "grid w-full grid-cols-1 gap-6 md:grid-cols-3",
        // Defines 3 explicit rows on medium screens and up
        "md:grid-rows-3",
        // Ensure cards have dynamic height but reasonable defaults
        "auto-rows-auto md:auto-rows-fr",
        className
      )}
    >
      {/* Slot 1: Integration (Spans all 3 rows on desktop) */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-3 h-full">
        {integration}
      </motion.div>

      {/* Slot 2: Trackers */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 h-full">
        {trackers}
      </motion.div>

      {/* Slot 3: Statistic */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 h-full">
        {statistic}
      </motion.div>

      {/* Slot 4: Focus */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 h-full">
        {focus}
      </motion.div>

      {/* Slot 5: Productivity */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 h-full">
        {productivity}
      </motion.div>

      {/* Slot 6: Shortcuts (Spans 2 columns, row 3 on desktop) */}
      <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1 h-full">
        {shortcuts}
      </motion.div>
    </motion.section>
  );
};
