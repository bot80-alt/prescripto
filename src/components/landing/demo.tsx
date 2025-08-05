import { PlayCircle } from "lucide-react";
import Image from "next/image";

export function Demo() {
  return (
    <section id="demo" className="py-12 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">See RxChain in Action</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Watch a quick demo to understand how our platform simplifies prescription management for everyone involved.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
          <Image
            src="https://placehold.co/1280x720.png"
            alt="Demo video thumbnail"
            layout="fill"
            objectFit="cover"
            data-ai-hint="medical technology"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
