export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Purple Glow */}
      <div
        className="
          absolute
          -top-52
          -left-52
          h-[700px]
          w-[700px]
          rounded-full
          bg-purple-700/20
          blur-[180px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          top-1/4
          -right-40
          h-[650px]
          w-[650px]
          rounded-full
          bg-blue-600/15
          blur-[180px]
        "
      />

      {/* Bottom Purple */}
      <div
        className="
          absolute
          bottom-[-250px]
          left-1/2
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-700/15
          blur-[200px]
        "
      />

      {/* Small Accent Glow */}
      <div
        className="
          absolute
          top-[40%]
          right-[15%]
          h-[250px]
          w-[250px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:42px_42px]
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#050816]/10
          to-[#050816]/60
        "
      />
    </div>
  );
}