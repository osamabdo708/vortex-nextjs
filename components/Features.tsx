import { Zap, Users, HeadphonesIcon, Award } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function Features({ dict }: { dict: Dictionary }) {
  const features = [
    { icon: Zap, ...dict.features.innovation, gradient: "from-primary to-primary/80" },
    { icon: Users, ...dict.features.expertise, gradient: "from-secondary to-secondary/80" },
    { icon: HeadphonesIcon, ...dict.features.support, gradient: "from-primary to-primary/80" },
    { icon: Award, ...dict.features.quality, gradient: "from-secondary to-secondary/80" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">{dict.features.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-muted/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
              >
                <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
