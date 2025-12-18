import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      image: P1,
      title: "Revive Website",
      tags: ["Figma", "UI/UX Design"],
      description:
        "Platform kesehatan modern yang memudahkan pasien untuk konsultasi online, booking jadwal dokter, dan akses informasi medis terpercaya.",
    },
    {
      image: P2,
      title: "Eventify",
      tags: ["UI/UX", "Mobile App"],
      description:
        "aplikasi event dan konser yang menyatukan musik, artis, dan penggemar dalam satu gelombang pengalaman live. Temukan jadwal konser, beli tiket, dan dapatkan update real-time dari event favoritmu—lokal hingga internasional.",
    },
  ];

  return (
    <>
      {/* ===== TITLE ===== */}
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
          className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-6 px-4 md:px-0 text-white"
          variants={fadeUp}
        >
          Where ideas evolve into <br />
          iconic brand stories.
        </motion.h2>
      </motion.div>

      {/* ===== PROJECT GRID ===== */}
      <motion.div
        className="text-white px-4 md:px-16 py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={gridContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

/* ================= CARD ================= */
function ProjectCard({ image, title, tags, description }) {
  return (
    <motion.div
      className="overflow-hidden p-4 bg-gradient-to-r from-[#013267] to-black rounded-4xl pb-10"
      variants={card}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 160, damping: 22 }}
      style={{ willChange: "transform, opacity" }}
    >
      {/* IMAGE */}
      <motion.div
        className="overflow-hidden rounded-4xl"
        variants={imageVariants}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div variants={contentContainer}>
        <motion.div
          className="flex flex-wrap items-center gap-2 text-blue-100 text-sm pt-4 pb-1"
          variants={fadeUpSmall}
        >
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-[#0A4788] rounded-xl">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl font-bold"
          variants={fadeUpSmall}
        >
          {title}
        </motion.h2>

        <motion.p className="mt-2 text-sm sm:text-base" variants={fadeUpSmall}>
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

/* ================= VARIANTS ================= */

/* TITLE */
const titleContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

/* GRID */
const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

/* CARD */
const card = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* IMAGE */
const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* CONTENT */
const contentContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
};

/* TEXT */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUpSmall = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
