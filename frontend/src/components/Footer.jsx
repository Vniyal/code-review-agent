function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">

        <p className="tracking-wide">
          Built with React • FastAPI • OpenAI • GitHub API
        </p>

        <p>
          © 2026 CodeReview AI
        </p>

      </div>
    </footer>
  );
}

export default Footer;