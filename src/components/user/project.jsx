"use client";
import { motion } from "framer-motion";

export default function ProjectTitle() {
  return (
    <motion.div
      className="max-w-xl pt-6 md:pt-10 text-center md:text-left pl-0 md:pl-16 mx-auto md:mx-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={titleContainer}
    >
      <motion.h3
        className="text-sm uppercase tracking-widest text-gray-400"
        variants={fadeUp}
      >
        My Projects
      </motion.h3>

      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold mt-2  px-4 md:px-0 text-white"
        variants={fadeUp}
      >
        Where ideas evolve into <br />
        iconic brand stories.
      </motion.h2>
    </motion.div>
  );
}

/* ===== VARIANTS ===== */
const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
