export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#05061a] flex flex-col justify-center items-center text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4 tracking-tight">
          TableX is Coming Soon
        </h1>
        <p className="text-[#8A8FA3] text-lg mb-8 max-w-xl mx-auto">
          We’re finalizing the AI that’s going to change table tennis forever.
          Get ready for next-level coaching, tactics, and mindset support.
        </p>
        <div className="text-sm text-[#6E738D]">
          © {new Date().getFullYear()} TableX. All rights reserved.
        </div>
      </div>
    </div>
  );
}
