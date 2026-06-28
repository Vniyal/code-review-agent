export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20 pb-14">

      {/* Small Label */}
      <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
        <span className="text-xs font-medium tracking-wide text-slate-400 uppercase">
          AI reviews for GitHub Pull Requests
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

        <span className="block">
          AI-Powered
        </span>

        <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Code Reviews
        </span>

      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        Paste a GitHub Pull Request and receive an AI-powered review that
        highlights bugs, security issues, performance problems and code quality
        improvements before you merge.
      </p>

    </section>
  );
}