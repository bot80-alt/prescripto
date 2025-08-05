import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { UserCategories } from "@/components/landing/user-categories";
import { Features } from "@/components/landing/features";
import { Onboarding } from "@/components/landing/onboarding";
import { Demo } from "@/components/landing/demo";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <UserCategories />
        <Features />
        <Onboarding />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}
