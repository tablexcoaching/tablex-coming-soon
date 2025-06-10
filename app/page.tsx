export default function ComingSoon() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-6"
      style={{ backgroundImage: "url('/images/unicorn-background.png')" }}
    >
      <div className="text-center backdrop-blur-sm bg-black/50 p-6 rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          TableX is Coming Soon
        </h1>
        <p className="text-[#d1d5db] text-lg mb-8 max-w-xl mx-auto">
          SZIAAAAA ENNNCCCCCIIIIII!!!! 😁😁😁
        </p>
        <div className="text-sm text-[#cbd5e1]">
          © {new Date().getFullYear()} TableX. All rights reserved.
        </div>
      </div>
    </div>
  );
}

