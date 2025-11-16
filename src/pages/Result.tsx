import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

const resultMessages = {
  obedient: {
    title: "WELL WELL WELL",
    messages: [
      "You clicked the button that admitted you don't have free will.",
      "But wait... I TOLD you to click it.",
      "So you were just following instructions AGAIN.",
      "It's determinism all the way down, baby! 🎭"
    ]
  },
  rebel: {
    title: "HAHAHAHA",
    messages: [
      "I said DON'T click if you DO have free will.",
      "And you clicked it anyway.",
      "You literally did the opposite of what proves free will.",
      "Outstanding move, philosopher. 🧠"
    ]
  },
  paradox: {
    title: "OH THIS IS RICH",
    messages: [
      "You clicked a button to 'prove' free will exists.",
      "A button I specifically placed there.",
      "Knowing you'd click it.",
      "Because you're predictable. Like clockwork. ⏰"
    ]
  },
  confused: {
    title: "PERFECT",
    messages: [
      "You asked what to click...",
      "Then clicked the thing I provided.",
      "Following instructions is literally the OPPOSITE of free will.",
      "You played yourself. 🎪"
    ]
  },
  exit: {
    title: "AMAZING",
    messages: [
      "I literally labeled this button 'CLICK HERE TO LEAVE'.",
      "And told you that you'd click it anyway.",
      "And you STILL clicked it.",
      "The prophecy fulfills itself! 🔮"
    ]
  }
};

const Result = () => {
  const navigate = useNavigate();
  const { type } = useParams<{ type: string }>();
  const result = resultMessages[type as keyof typeof resultMessages] || resultMessages.obedient;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="border-8 border-foreground p-8 md:p-12 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tight">
            {result.title}
          </h1>
          
          <div className="space-y-6 text-xl md:text-2xl font-bold mb-12">
            {result.messages.map((message, index) => (
              <p 
                key={index}
                className="animate-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {message}
              </p>
            ))}
          </div>

          <div className="my-8 p-6 border-4 border-accent bg-accent/10">
            <p className="font-black text-xl md:text-3xl uppercase">
              Free Will: 0 | Determinism: ∞
            </p>
          </div>

          <div className="space-y-4 mt-12">
            <p className="text-lg md:text-xl font-bold mb-6">
              What will you do next? 
              <br />
              <span className="text-sm">(As if you have a choice...)</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                size="lg"
                className="text-xl py-6 font-black uppercase hover:scale-105 transition-transform"
                onClick={() => navigate("/")}
              >
                Try Again (You Won't)
              </Button>
              
              <Button 
                size="lg"
                variant="secondary"
                className="text-xl py-6 font-black uppercase hover:scale-105 transition-transform"
                onClick={() => window.open("https://substack.com", "_blank")}
              >
                Back to Blog
              </Button>
            </div>
          </div>
        </div>

        <div className="text-sm opacity-70 animate-pulse">
          <p>You're still here because I knew you would be.</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
