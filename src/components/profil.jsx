import Foto from "../assets/profil/1.png";

export default function Profil() {
  return (
    <div
      className="
      flex
      flex-col
      md:flex-row
      mt-10
      p-6
      md:p-10
      text-white
      justify-center
      gap-10
      md:gap-20
    "
    >
      <img
        src={Foto}
        alt="profil"
        className="
          w-full
          max-w-[450px]
          h-auto
          mx-auto
          grayscale
          transition
          duration-300
          hover:grayscale-0
        "
      />

      <div className="max-w-xl pt-6 md:pt-24 text-center md:text-left">
        <h3 className="text-sm uppercase tracking-widest text-gray-400">
          About
        </h3>

        <h2 className="text-3xl font-bold mt-2 mb-6">My Journey</h2>

        <p className="text-gray-300 leading-relaxed">
          Greetings! I started my studies at Universitas Muhammadiyah Surakarta
          (UMS), where I was first introduced to the world of front-end
          development and UI/UX design. What began as simple curiosity quickly
          grew into a strong interest in how visuals, structure, and interaction
          come together to create meaningful user experiences.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4">
          Throughout my time at UMS, I strengthened my skills through various
          projects, assignments, and explorations both inside and outside the
          classroom. Every challenge became an opportunity to learn and grow,
          helping me build a solid foundation as a front-end developer and UI/UX
          enthusiast who is committed to continuous improvement in the digital
          world.
        </p>
      </div>
    </div>
  );
}
