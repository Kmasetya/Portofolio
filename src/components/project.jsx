import P1 from "../assets/p1.png";

export default function Project() {
  return (
    <>
      {/* Judul */}
      <div className="max-w-xl pt-6 md:pt-10 text-center md:text-left pl-0 md:pl-16 mx-auto md:mx-0">
        <h3 className="text-sm uppercase tracking-widest text-gray-400">
          My Projects
        </h3>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-6 px-4 md:px-0 text-white">
          Where ideas evolve into <br />
          iconic brand stories.
        </h2>
      </div>

      {/* Grid Projects */}
      <div className="text-white px-4 md:px-16 py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="overflow-hidden p-4 bg-gradient-to-r from-[#013267] to-black rounded-4xl pb-10">
            <div className="overflow-hidden rounded-4xl">
              <img
                src={P1}
                alt=""
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm pt-4 pb-1">
              <div className="flex items-center justify-center px-3 py-1 bg-[#0A4788] rounded-xl">
                Figma
              </div>
              <div className="flex items-center justify-center px-3 py-1 bg-[#0A4788] rounded-xl">
                UI/UX Design
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Revive Website</h2>
            <p className="mt-2 text-sm sm:text-base">
              Platform kesehatan modern yang memudahkan pasien untuk konsultasi
              online, booking jadwal dokter, dan akses informasi medis
              terpercaya.
            </p>
          </div>

          {/* Project Card 2 */}
          <div className="overflow-hidden p-4 bg-gradient-to-r from-[#013267] to-black rounded-4xl pb-10">
            <div className="overflow-hidden rounded-4xl">
              <img
                src={P1}
                alt=""
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm pt-4 pb-1">
              <div className="flex items-center justify-center px-3 py-1 bg-[#0A4788] rounded-xl">
                Figma
              </div>
              <div className="flex items-center justify-center px-3 py-1 bg-[#0A4788] rounded-xl">
                UI/UX Design
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Revive Website</h2>
            <p className="mt-2 text-sm sm:text-base">
              Platform kesehatan modern yang memudahkan pasien untuk konsultasi
              online, booking jadwal dokter, dan akses informasi medis
              terpercaya.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
