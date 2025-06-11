export default function ComingSoon() {
  return (
    <div
      className="min-h-screen bg-[#05061a] flex flex-col justify-center items-center text-white px-6"
    >
      <div className="text-center backdrop-blur-sm bg-black/50 p-6 rounded-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          TableX is Coming Soon
        </h1>
        <p className="text-[#d1d5db] text-lg mb-8 max-w-xl mx-auto">
          Built for serious players. TableX blends expert coaching with AI precision — from tactics to training, it’s here to elevate your game.
        </p>
        <div className="text-sm text-[#cbd5e1]">
          © {new Date().getFullYear()} TableX. All rights reserved.
        </div>
      </div>
    </div>
  );
}