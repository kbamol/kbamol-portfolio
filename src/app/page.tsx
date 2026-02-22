import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

// Using a custom Medium SVG since lucide-react doesn't have an official Medium icon
const MediumIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42zm2.81 0c0 3.13-.53 5.67-1.18 5.67-.66 0-1.18-2.54-1.18-5.67 0-3.14.52-5.67 1.18-5.67.65 0 1.18 2.53 1.18 5.67z" />
  </svg>
);

export default function Home() {
  return (
    <main className="flex items-center justify-center p-6 z-10 w-full h-full">
      <div className="max-w-3xl w-full text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center justify-center space-x-2 text-sm font-medium px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground mb-8">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Site Under Construction
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-outfit">
          Something awesome is <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            coming soon.
          </span>
        </h1>
        <p className="text-blue-400 font-outfit text-xl mb-6 tracking-wide font-semibold">
          Hi, I'm Amol...
        </p>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
          Cybersecurity professional crafting this platform from the ground up
          full-stack engineering, AWS infrastructure, and real-world DevOps in action.
        </p>

        <p className="text-muted-foreground text-base max-w-xl mx-auto mb-12">
          While I put the finishing touches on it, you can find me across the web below.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-full px-6 gap-2 bg-[#2b3137] hover:bg-[#2b3137]/80 text-white" asChild>
            <a href="https://github.com/kbamol" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>

          <Button size="lg" className="rounded-full px-6 gap-2 bg-[#0077b5] hover:bg-[#0077b5]/80 text-white" asChild>
            <a href="https://www.linkedin.com/in/amol-bhavar/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button size="lg" className="rounded-full px-6 gap-2 bg-white text-black hover:bg-white/90" asChild>
            <a href="https://medium.com/@amolbhavar" target="_blank" rel="noopener noreferrer">
              <MediumIcon className="w-5 h-5" />
              Medium
            </a>
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>Or drop me an email at <a href="mailto:hello@kbamol.dev" className="text-blue-400 hover:underline">amol.bhavar1995@gmail.com</a></p>
        </div>
      </div>
    </main>
  );
}
