import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnalyzeCard from "./components/AnalyzeCard";
import ReviewResult from "./components/ReviewResult";
import Footer from "./components/Footer";
import BackgroundGlow from "./components/BackgroundGlow";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "";

function App() {
  const [review, setReview] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const analyzePullRequest = async (prUrl) => {
    setStatus("loading");
    setError("");
    setReview(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pr_url: prUrl,
          prUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to analyze this pull request right now.");
      }

      const data = await response.json();

      setReview(data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Unable to analyze this pull request right now."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <BackgroundGlow />

      <Navbar />

      <main className="relative mx-auto w-full max-w-5xl px-6">

        <Hero />

        <AnalyzeCard
          onAnalyze={analyzePullRequest}
          isLoading={status === "loading"}
        />

        <ReviewResult
          review={review}
          error={error}
          isLoading={status === "loading"}
        />

      </main>

      <Footer />
    </div>
  );
}

export default App;