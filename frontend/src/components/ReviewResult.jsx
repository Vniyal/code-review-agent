import { FileSearch } from "lucide-react";

const sectionMap = [
  ["Critical Issues", ["criticalIssues", "critical_issues", "critical"]],
  ["Security", ["security"]],
  ["Performance", ["performance"]],
  ["Suggestions", ["suggestions"]],
];

function readValue(source, keys) {
  if (!source || typeof source !== "object") return null;

  for (const key of keys) {
    if (source[key] !== undefined && source[key] !== null) {
      return source[key];
    }
  }

  return null;
}

function renderInlineValue(value) {
  if (value === null || value === undefined) return "None reported.";

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(renderInlineValue).join(", ");
  }

  return Object.entries(value)
    .map(
      ([key, entry]) =>
        `${key.replaceAll("_", " ")}: ${renderInlineValue(entry)}`
    )
    .join(" • ");
}

function renderValue(value) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <p className="text-slate-500">None reported.</p>;
    }

    return (
      <ul className="space-y-3">
        {value.map((item, index) => (
          <li key={index} className="text-slate-300 leading-7">
            • {renderInlineValue(item)}
          </li>
        ))}
      </ul>
    );
  }

  if (value && typeof value === "object") {
    return (
      <div className="space-y-4">
        {Object.entries(value).map(([key, entry]) => (
          <div key={key}>
            <p className="font-medium text-white capitalize">
              {key.replaceAll("_", " ")}
            </p>

            <p className="mt-1 text-slate-400 leading-7">
              {renderInlineValue(entry)}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return <p className="text-slate-300 leading-7">{String(value)}</p>;
}

export default function ReviewResult({
  review,
  isLoading,
  error,
}) {
  const summary = readValue(review, [
    "summary",
    "reviewSummary",
    "review_summary",
  ]);

  const score = readValue(review, [
    "overallScore",
    "overall_score",
    "score",
  ]);

  return (
    <section className="mx-auto w-full max-w-2xl pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-xl">
        {!review && !isLoading && (
          <div className="flex flex-col items-center px-8 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <FileSearch className="h-7 w-7 text-slate-400" />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-white">
              Nothing analyzed yet
            </h2>

            <p className="mt-3 max-w-sm leading-7 text-slate-400">
              Paste a GitHub Pull Request URL above and we'll generate a
              structured AI review.
            </p>

            {error && (
              <p className="mt-5 text-red-400">
                {error}
              </p>
            )}
          </div>
        )}

        {isLoading && (
          <div className="space-y-5 p-8">
            <div className="h-5 w-40 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-full animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-4/5 animate-pulse rounded-full bg-white/10" />
            <div className="h-3 w-3/5 animate-pulse rounded-full bg-white/10" />
          </div>
        )}

        {review && (
          <div className="p-8">
            <div className="border-b border-white/10 pb-6">
              <h2 className="text-2xl font-semibold text-white">
                Review Summary
              </h2>

              <div className="mt-4 text-slate-300 leading-8">
                {summary ? (
                  renderValue(summary)
                ) : (
                  <p>No summary provided.</p>
                )}
              </div>

              {score !== null && (
                <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                  <span className="text-slate-400">
                    Overall Score
                  </span>

                  <span className="text-lg font-semibold text-white">
                    {score}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8 space-y-8">
              {sectionMap.map(([label, keys]) => {
                const value = readValue(review, keys);

                return (
                  <section key={label}>
                    <h3 className="mb-3 text-lg font-semibold text-white">
                      {label}
                    </h3>

                    <div className="text-slate-300 leading-7">
                      {value ? (
                        renderValue(value)
                      ) : (
                        <p className="text-slate-500">
                          None reported.
                        </p>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}