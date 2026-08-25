import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, Smartphone, Cloud, TrendingUp, Brain, Building2, Network } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export function Services({ dict }: { dict: Dictionary }) {
  const services = [
    { icon: Code2, ...dict.services.softwareDev },
    { icon: Globe, ...dict.services.webDesign },
    { icon: Smartphone, ...dict.services.mobileSolutions },
    { icon: Cloud, ...dict.services.cloudDevOps },
    { icon: TrendingUp, ...dict.services.itConsulting },
    { icon: Brain, ...dict.services.aiData },
    { icon: Building2, ...dict.services.erpCrm },
    { icon: Network, ...dict.services.integration },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">{dict.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
