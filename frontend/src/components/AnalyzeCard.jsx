import { useState } from "react";
import { ArrowRight, GitPullRequest, Loader2 } from "lucide-react";

export default function AnalyzeCard({ isLoading, onAnalyze }) {
  const [prUrl, setPrUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = prUrl.trim();

    if (!url || isLoading) return;

    onAnalyze(url);
  };

  return (
    <section className="-mt-4 pb-16">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-2xl"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl">

          <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#050816]/80 px-5">

            <GitPullRequest
              className="h-5 w-5 text-slate-500"
            />

            <input
              type="url"
              placeholder="Paste your GitHub Pull Request URL..."
              value={prUrl}
              onChange={(e) => setPrUrl(e.target.value)}
              className="
                h-16
                flex-1
                bg-transparent
                text-white
                outline-none
                placeholder:text-slate-500
              "
            />

          </div>

          <button
            type="submit"
            disabled={!prUrl.trim() || isLoading}
            className="
              mt-3
              flex
              h-14
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-blue-600
              font-semibold
              text-white
              transition
              duration-200
              hover:brightness-110
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze Pull Request
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>

        </div>
      </form>
    </section>
  );
}