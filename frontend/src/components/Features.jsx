import {
    Bug,
    Shield,
    Zap,
    Code2,
  } from "lucide-react";
  
  const features = [
    {
      title: "Bug Detection",
      desc: "Identify bugs before they reach production.",
      icon: Bug,
      color: "text-pink-400",
    },
    {
      title: "Security Analysis",
      desc: "Detect vulnerabilities in your code.",
      icon: Shield,
      color: "text-violet-400",
    },
    {
      title: "Performance",
      desc: "Find slow and inefficient code paths.",
      icon: Zap,
      color: "text-blue-400",
    },
    {
      title: "Code Quality",
      desc: "Improve maintainability with AI suggestions.",
      icon: Code2,
      color: "text-emerald-400",
    },
  ];
  
  export default function Features() {
    return (
      <section className="mt-16 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
  
          {features.map((feature, index) => {
            const Icon = feature.icon;
  
            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-purple-500/60
                  hover:shadow-2xl
                  hover:shadow-purple-500/20
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-slate-900
                    border
                    border-white/10
                    mb-5
                  "
                >
                  <Icon
                    size={28}
                    className={`${feature.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>
  
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
  
                <p className="mt-3 text-slate-400 leading-7">
                  {feature.desc}
                </p>
              </div>
            );
          })}
  
        </div>
      </section>
    );
  }