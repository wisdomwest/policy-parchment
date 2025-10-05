import { CheckCircle, Lightbulb, FileText } from "lucide-react";

interface ResponseData {
  summary: string;
  key_insights: string[];
  recommendations: string[];
}

interface ResponseDisplayProps {
  data: ResponseData;
}

const ResponseDisplay = ({ data }: ResponseDisplayProps) => {
  return (
    <div className="space-y-6 animate-slide-up">
      {/* Summary Section */}
      <div className="bg-card rounded-xl shadow-[var(--shadow-card)] p-6 border border-border hover:shadow-[var(--shadow-elevated)] transition-[var(--transition-smooth)]">
        <div className="flex items-start gap-3 mb-4">
          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <h2 className="text-xl font-semibold text-foreground">Executive Summary</h2>
        </div>
        <p className="text-foreground leading-relaxed">{data.summary}</p>
      </div>

      {/* Key Insights Section */}
      <div className="bg-card rounded-xl shadow-[var(--shadow-card)] p-6 border border-border hover:shadow-[var(--shadow-elevated)] transition-[var(--transition-smooth)]">
        <div className="flex items-start gap-3 mb-4">
          <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <h2 className="text-xl font-semibold text-foreground">Key Insights</h2>
        </div>
        <ul className="space-y-3">
          {data.key_insights.map((insight, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-foreground animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-secondary-foreground flex-shrink-0 mt-0.5">
                {index + 1}
              </span>
              <span className="leading-relaxed">{insight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendations Section */}
      <div className="bg-card rounded-xl shadow-[var(--shadow-card)] p-6 border border-border hover:shadow-[var(--shadow-elevated)] transition-[var(--transition-smooth)]">
        <div className="flex items-start gap-3 mb-4">
          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <h2 className="text-xl font-semibold text-foreground">Recommendations</h2>
        </div>
        <ul className="space-y-3">
          {data.recommendations.map((recommendation, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-foreground animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <span className="leading-relaxed">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponseDisplay;
