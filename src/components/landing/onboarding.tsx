import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Onboarding() {
  return (
    <section id="onboarding" className="py-12 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden shadow-lg border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="p-0">
              <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Hospital staff using dashboard" className="w-full h-auto" data-ai-hint="medical professional" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-headline">Hospitals & Clinics</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">
                Access our powerful SaaS dashboard to manage prescriptions, streamline workflows, and enhance security.
              </CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started as Hospital
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden shadow-lg border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
             <CardHeader className="p-0">
              <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Patient using a mobile app" className="w-full h-auto" data-ai-hint="patient phone" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-headline">Patients</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">
                Take control of your prescriptions with our secure mobile app. Access your history and connect with pharmacies.
              </CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button size="lg" className="w-full md:w-auto" variant="secondary">
                Continue as Patient
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
