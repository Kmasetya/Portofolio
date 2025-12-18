import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-[#F7F5F5] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 px-6 md:px-10">
        {/* LEFT CONTENT */}
        <motion.div
          className="max-w-xl w-full md:w-1/2 pt-6 md:pt-24 text-center md:text-left"
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
          <motion.h3
            className="uppercase tracking-widest text-black text-sm"
            variants={blurFadeUp}
          >
            Contact
          </motion.h3>

          <motion.h2
            className="text-3xl md:text-4xl mt-2 mb-6 font-medium leading-tight"
            variants={blurFadeUp}
          >
            <span className="font-bold">Let's create</span> something <br />
            amazing together.
          </motion.h2>

          <motion.p
            className="text-black leading-relaxed pb-6"
            variants={blurFadeUp}
          >
            Whether you have a specific project or just want to say hi, my inbox
            is always open. Let's turn your ideas into reality.
          </motion.p>

          {/* Email */}
          <motion.div
            className="flex items-start gap-4 text-left pb-4"
            variants={blurFadeUp}
          >
            <div className="w-12 h-12 rounded-full bg-[#0A4788] flex items-center justify-center">
              <MdEmail className="text-white" size={25} />
            </div>
            <div>
              <p className="text-sm text-black">Email</p>
              <p className="text-base font-medium">dwinataardi41@example.com</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-start gap-4 text-left"
            variants={blurFadeUp}
          >
            <div className="w-12 h-12 rounded-full bg-[#0A4788] flex items-center justify-center">
              <ImPhone className="text-white" size={25} />
            </div>
            <div>
              <p className="text-sm text-black">Phone Number</p>
              <p className="text-base font-medium">085158258499</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          className="bg-white p-8 rounded-xl shadow-md max-w-xl w-full space-y-5 mt-10 md:mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideFromRight}
        >
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Masukkan nama"
              className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tulis pesan..."
              className="w-full border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-1/2 bg-[#0A4788] text-white py-3 rounded-lg
    transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

/* VARIANT */
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
const slideFromRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
