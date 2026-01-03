import LlamaButton from "@/components/LlamaButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-llama-bg)] transition-colors duration-500">
      <div className="text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-llama-stroke)] tracking-tight">
            The Llama Button
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-llama-stroke)]/80 max-w-md mx-auto font-medium">
            Hover over the llama to see its ears wiggle!
            <br />
            <span className="text-sm opacity-70">(It's happy to see you)</span>
          </p>
        </div>

        <div className="p-12 bg-white/40 backdrop-blur-sm rounded-[3rem] shadow-xl border border-white/50">
          <LlamaButton 
            text="Home" 
            onClick={() => console.log("Llama clicked!")} 
            className="transform transition-transform active:scale-95"
          />
        </div>

        <div className="flex gap-8 justify-center opacity-60">
          <LlamaButton 
            text="About" 
            className="scale-75 origin-top"
          />
          <LlamaButton 
            text="Contact" 
            className="scale-75 origin-top"
          />
        </div>
      </div>
    </div>
  );
}
