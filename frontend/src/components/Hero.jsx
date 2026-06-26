export default function Hero() {
  return (
    <section className="text-center pt-24 pb-16 px-6">
      <h1
        className="
          text-5xl
          sm:text-6xl
          lg:text-7xl
          xl:text-8xl
          font-extrabold
          leading-tight
        "
      >
        AI-Powered{" "}
        <span className="bg-gradient-to-r from-purple-500 via-violet-400 to-blue-500 bg-clip-text text-transparent">
          Code Reviews
        </span>
      </h1>

      <p className="mt-8 text-slate-300 text-xl leading-8 max-w-4xl mx-auto">
        Review GitHub Pull Requests like a senior engineer. Detect bugs,
        security vulnerabilities, performance bottlenecks, and code smells
        before merging.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <span className="px-5 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-200">
          Bug Detection
        </span>

        <span className="px-5 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-200">
          Security
        </span>

        <span className="px-5 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-200">
          Performance
        </span>

        <span className="px-5 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-200">
          AI Suggestions
        </span>
      </div>
    </section>
  );
}