import Foto from "../assets/profil/1.png";
import { motion } from "framer-motion";

export default function Profil() {
  return (
    <div className="flex flex-col md:flex-row mt-10 p-6 md:p-10 text-white justify-center gap-10 md:gap-20">
      {/* FOTO (tanpa animasi scroll) */}
      <img
        src={Foto}
        alt="profil"
        className="block mx-auto w-full max-w-[360px] sm:max-w-[420px] md:max-w-[450px] h-auto grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-105"
      />

      {/* TEKS */}
      <motion.div
        className="max-w-xl pt-6 md:pt-24 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* ABOUT */}
        <motion.h3
          className="text-sm uppercase tracking-widest text-gray-400"
          variants={blurFadeUp}
        >
          About
        </motion.h3>

        {/* MY JOURNEY */}
        <motion.h2
          className="text-3xl font-bold mt-2 mb-6"
          variants={blurFadeUp}
        >
          My Journey
        </motion.h2>

        {/* PARAGRAPH 1 */}
        <motion.p
          className="text-gray-300 leading-relaxed"
          variants={blurFadeUp}
        >
          Greetings! I started my studies at Universitas Muhammadiyah Surakarta
          (UMS), where I was first introduced to the world of front-end
          development and UI/UX design. What began as simple curiosity quickly
          grew into a strong interest in how visuals, structure, and interaction
          come together to create meaningful user experiences.
        </motion.p>

        {/* PARAGRAPH 2 */}
        <motion.p
          className="text-gray-300 leading-relaxed mt-4"
          variants={blurFadeUp}
        >
          Throughout my time at UMS, I strengthened my skills through various
          projects, assignments, and explorations both inside and outside the
          classroom. Every challenge became an opportunity to learn and grow,
          helping me build a solid foundation as a front-end developer and UI/UX
          enthusiast who is committed to continuous improvement in the digital
          world.
        </motion.p>
      </motion.div>
    </div>
  );
}

const blurFadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
