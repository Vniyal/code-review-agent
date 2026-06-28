import { GitPullRequest, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
            <GitPullRequest className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-base font-semibold text-white">
              CodeReview AI
            </h1>

            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Pull Request Intelligence
            </p>
          </div>
        </a>

        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
          <LogIn className="h-4 w-4" />
          GitHub Login
        </button>
      </nav>
    </header>
  );
}