import { useEffect, useState } from "react";

const urbanPlanningFacts = [
  "The first urban planning occurred in the Indus Valley Civilization around 2600 BCE.",
  "Barcelona's superblock model reduces traffic by 21% and pollution by 20%.",
  "Singapore uses 3D city modeling to simulate urban heat and optimize building placement.",
  "Tokyo's urban density of 6,000 people per km² is sustainable through efficient transit.",
  "Copenhagen's green wave traffic system prioritizes cyclists at 20 km/h.",
  "Curitiba pioneered the Bus Rapid Transit system in the 1970s.",
  "The 15-minute city concept ensures all amenities are within walking distance.",
  "Vienna has been ranked the world's most liveable city multiple times.",
  "Green roofs can reduce building energy use by up to 75%.",
  "Mixed-use developments reduce vehicle miles traveled by 20-40%.",
];

const LoadingState = () => {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % urbanPlanningFacts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-xl shadow-[var(--shadow-card)] p-8 border border-border animate-slide-up">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-[var(--gradient-primary)] rounded-full opacity-20 animate-pulse-soft"></div>
          <div className="absolute inset-2 bg-[var(--gradient-primary)] rounded-full opacity-40 animate-pulse-soft" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute inset-4 bg-primary rounded-full"></div>
        </div>
        
        <div className="text-center space-y-3">
          <p className="text-lg font-medium text-foreground">Analyzing your query...</p>
          <div className="h-20 flex items-center justify-center px-4">
            <p 
              key={currentFact} 
              className="text-sm text-muted-foreground max-w-md animate-fade-in italic"
            >
              {urbanPlanningFacts[currentFact]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
