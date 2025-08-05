import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline">
            Blockchain-powered digital prescriptions.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            A seamless and secure system for verified pharmacies, hospitals, and patients.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#onboarding">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute inset-0 -z-0 overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          data-ai-hint="abstract geometric"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-card to-background"></div>
      </div>
    </section>
  );
}
