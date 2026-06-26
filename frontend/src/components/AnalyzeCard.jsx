import { useState } from "react";
import { GitPullRequest, Sparkles } from "lucide-react";

export default function AnalyzeCard() {
  const [prUrl, setPrUrl] = useState("");

  return (
    <section className="max-w-5xl mx-auto px-6 mt-16">

      <div
        className="
          rounded-3xl
          border
          border-purple-500/40
          bg-white/5
          backdrop-blur-xl
          p-8
          shadow-2xl
          shadow-purple-500/10
        "
      >

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center">
            <GitPullRequest className="text-purple-400" size={30}/>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              GitHub Pull Request
            </h2>

            <p className="text-slate-400 mt-1">
              Paste a PR URL and let AI review your code.
            </p>
          </div>

        </div>

        <input
          type="text"
          placeholder="https://github.com/owner/repo/pull/123"
          value={prUrl}
          onChange={(e) => setPrUrl(e.target.value)}
          className="
            w-full
            bg-slate-950/70
            border
            border-slate-700
            rounded-2xl
            px-6
            py-5
            text-lg
            outline-none
            focus:border-purple-500
            transition
          "
        />

        <button
          className="
            mt-6
            w-full
            rounded-2xl
            py-5
            text-xl
            font-bold
            flex
            justify-center
            items-center
            gap-3
            bg-gradient-to-r
            from-purple-600
            via-violet-500
            to-blue-600
            hover:scale-[1.02]
            transition-all
            duration-300
            shadow-xl
            shadow-blue-500/20
          "
        >
          <Sparkles size={22}/>
          Analyze Pull Request
        </button>

      </div>

    </section>
  );
}