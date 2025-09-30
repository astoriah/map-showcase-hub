import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface MapOptionProps {
  title: string;
  children: ReactNode;
}

const MapOption = ({ title, children }: MapOptionProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <Card className="overflow-hidden shadow-[var(--shadow-card)] border-border transition-[var(--transition-smooth)] hover:shadow-lg">
        <div className="aspect-[4/3] bg-muted">
          {children}
        </div>
      </Card>
      <div className="flex items-center justify-center md:justify-start">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MapOption;
