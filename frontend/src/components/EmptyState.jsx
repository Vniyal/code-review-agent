import { FileText } from "lucide-react";

export default function EmptyState() {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-10 mb-20">

      <div
        className="
          rounded-3xl
          border
          border-dashed
          border-slate-700
          bg-white/5
          backdrop-blur-xl
          py-16
          px-8
          text-center
        "
      >

        <div
          className="
            w-24
            h-24
            mx-auto
            rounded-full
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-purple-600/40
            to-blue-600/40
            shadow-xl
            shadow-purple-500/20
          "
        >
          <FileText
            size={46}
            className="text-blue-300"
          />
        </div>

        <h2 className="text-4xl font-bold mt-8">
          Nothing Analyzed Yet
        </h2>

        <p className="mt-5 text-slate-400 text-lg max-w-xl mx-auto leading-8">
          Paste a GitHub Pull Request URL above and click
          <span className="text-white font-semibold">
            {" "}Analyze Pull Request
          </span>
          {" "}to receive a detailed AI-powered review.
        </p>

      </div>

    </section>
  );
}