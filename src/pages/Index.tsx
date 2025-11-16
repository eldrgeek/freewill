import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useReturnUrl } from "@/hooks/useReturnUrl";

const Index = () => {
  const navigate = useNavigate();
  const defaultBlogUrl = "https://70yearswtf.substack.com/p/click-if-youve-got-free-will";
  const returnUrl = useReturnUrl(defaultBlogUrl);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="border-8 border-foreground p-8 md:p-12 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tight">
            CONGRATULATIONS!
          </h1>
          
          <div className="text-xl md:text-3xl font-bold space-y-4 mb-8">
            <p>You just proved you DON'T have free will.</p>
            <p className="text-lg md:text-2xl">
              A blog post told you to click a button...
            </p>
            <p className="text-2xl md:text-4xl">...and you did it.</p>
          </div>

          <div className="my-8 p-4 border-4 border-accent bg-accent/10">
            <p className="font-bold text-lg md:text-xl">
              Like a good little deterministic meat robot. 🤖
            </p>
          </div>

          <p className="text-base md:text-lg mb-8">
            But hey, maybe you can prove me wrong? 
            <br />
            Go ahead, make a "choice"...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Button 
              size="lg" 
              className="text-lg py-8 font-black uppercase hover:scale-105 transition-transform whitespace-normal h-auto"
              onClick={() => navigate("/result/obedient")}
            >
              Click this if you DON'T have free will
            </Button>
            
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg py-8 font-black uppercase hover:scale-105 transition-transform whitespace-normal h-auto"
              onClick={() => navigate("/result/rebel")}
            >
              Don't click this if you DO have free will
            </Button>
            
            <Button 
              size="lg"
              className="text-lg py-8 font-black uppercase hover:scale-105 transition-transform whitespace-normal h-auto"
              onClick={() => navigate("/result/paradox")}
            >
              Click here to prove free will exists
            </Button>
            
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg py-8 font-black uppercase hover:scale-105 transition-transform whitespace-normal h-auto"
              onClick={() => navigate("/result/confused")}
            >
              I'm confused, what do I click?
            </Button>
          </div>

          <div className="mt-12 space-y-4">
            <Button 
              size="lg"
              className="text-lg py-8 font-black uppercase w-full hover:scale-105 transition-transform whitespace-normal h-auto"
              onClick={() => navigate("/result/exit")}
            >
              CLICK HERE TO LEAVE
            </Button>
            
            <p className="text-sm">
              (Watch them click it anyway)
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={returnUrl}
            className="text-foreground underline hover:no-underline font-bold text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            ← Back to the blog that controls your actions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
