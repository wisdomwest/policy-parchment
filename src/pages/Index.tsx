import { Building2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary rounded-xl shadow-md">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Urban Planning Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered feasibility and site selection analysis for urban development projects
          </p>
        </header>

        {/* Footer */}
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>Powered by advanced AI analysis for informed urban planning decisions</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
