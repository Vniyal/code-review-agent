export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Soft Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      {/* Top Left Glow */}
      <div
        className="
          absolute
          -top-44
          -left-44
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-violet-600/10
          blur-[180px]
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
          absolute
          -bottom-52
          -right-44
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-blue-600/10
          blur-[190px]
        "
      />

      {/* Center Fade */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,.15)_70%,#050816_100%)]
        "
      />

    </div>
  );
}