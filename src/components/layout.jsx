import kama from "../assets/awal.PNG";
import Foto1 from "./foto1";
export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A4788] text-white rounded-b-4xl">
      {/* Radial circle */}
      <div
        className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2
                      w-[1100px] h-[1000px]
                      bg-[#B2B1B4] rounded-full blur-[150px]"
      />

      <main className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Container teks utama kiri */}
        <div className="relative z-20 text-left pl-14">
          <div
            className="text-[30px] leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Hello, I'm a
          </div>
          <div
            className="text-[90px] font-medium leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Kamasetya
          </div>
          <div
            className="text-[90px] font-medium leading-tight pl-32"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Dwi Dzaka
          </div>
        </div>

        {/* Foto di tengah */}
        <img
          src={kama}
          alt="foto"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto z-10 grayscale opacity-90"
          style={{ pointerEvents: "none" }}
        />

        {/* Teks dekat gambar di kanan tengah */}
        <div
          className="absolute top-[70%] left-[70%] -translate-y-1/2 text-white z-20 text-lg flex flex-col items-start gap-"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          <div
            className="text-[27px] leading-tight font-semibold"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <div>I’m a front-end</div>
            <div>developer and UI/UX</div>
          </div>
          <div
            className="text-[16px] leading-tight font-semibold"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <div>I’enthusiast focused on creating clean, </div>
            <div>intuitive, and accessible designs</div>
          </div>
        </div>
      </main>
    </div>
  );
}
