import kama from "../assets/awal.png";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A4788] text-white rounded-b-4xl">
      {/* Radial circle */}
      <div
        className="
          absolute
          top-1/2
          left-[30%]
          -translate-x-1/2
          -translate-y-1/2
          w-[1100px]
          h-[1000px]
          bg-[#B2B1B4]
          rounded-full
          blur-[150px]
        "
      />

      <main
        className="
          relative
          min-h-screen
          w-full
          flex
          flex-col
          md:flex-row
          items-center
          overflow-hidden
          pt-[100px]
          md:pt-0
        "
      >
        {/* TEKS UTAMA */}
        <div
          className="
            relative
            z-20
            text-center
            md:text-left
            px-6
            md:pl-14
          "
        >
          <div className="text-[20px] md:text-[30px] leading-tight">
            Hello, I'm a
          </div>

          <div className="text-[42px] md:text-[90px] font-medium leading-tight">
            Kamasetya
          </div>

          <div className="text-[42px] md:text-[90px] font-medium leading-tight md:pl-32">
            Dwi Dzaka
          </div>
        </div>

        {/* TEKS FRONTEND */}
        <div
          className="
            relative
            mt-4
            md:mt-0
            md:absolute
            md:top-[70%]
            md:left-[70%]
            md:-translate-y-1/2
            z-20
            text-center
            md:text-left
          "
        >
          <div className="text-[18px] md:text-[27px] font-semibold leading-tight">
            <div>I’m a front-end</div>
            <div>developer and UI/UX</div>
          </div>

          <div className="text-[14px] md:text-[16px] mt-2 text-gray-200">
            <div>Enthusiast focused on creating clean,</div>
            <div>intuitive, and accessible designs</div>
          </div>
        </div>

        {/* FOTO */}
        <img
          src={kama}
          alt="foto"
          className="
            relative
            mt-6
            md:mt-0
            md:absolute
            md:top-1/2
            md:left-1/2
            md:-translate-x-1/2
            md:-translate-y-1/2
            w-[320px]
            sm:w-[380px]
            md:w-[600px]
            h-auto
            z-10
            grayscale
            opacity-90
          "
          style={{ pointerEvents: "none" }}
        />
      </main>
    </div>
  );
}
