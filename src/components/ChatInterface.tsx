import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";
import LoadingState from "./LoadingState";
import ResponseDisplay from "./ResponseDisplay";

interface ResponseData {
  summary: string;
  key_insights: string[];
  recommendations: string[];
}

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ResponseData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsLoading(true);
    setResponse(null);

    try {
      const res = await fetch("https://spaceappsnasa.app.n8n.cloud/webhook/87b1e908-826b-4b9e-a9cb-422d1e2d78b3/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error("Failed to get response");
      }

      const data = await res.json();
      
      // Extract the text content from the n8n response structure
      const content = data.content?.parts?.[0]?.text;
      if (content) {
        const parsedContent = JSON.parse(content);
        setResponse(parsedContent);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to get analysis. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-card rounded-xl shadow-[var(--shadow-card)] p-6 border border-border transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elevated)]">
          <label htmlFor="query" className="block text-sm font-medium text-muted-foreground mb-3">
            Enter your urban planning query
          </label>
          <Textarea
            id="query"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe the area, project, or analysis you need..."
            className="min-h-[120px] resize-none border-input focus:border-primary transition-[var(--transition-smooth)]"
            disabled={isLoading}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full sm:w-auto bg-[var(--gradient-primary)] hover:opacity-90 transition-[var(--transition-smooth)] shadow-[var(--shadow-card)]"
        >
          {isLoading ? (
            "Processing..."
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Analyze
            </>
          )}
        </Button>
      </form>

      {isLoading && <LoadingState />}
      {response && <ResponseDisplay data={response} />}
    </div>
  );
};

export default ChatInterface;
