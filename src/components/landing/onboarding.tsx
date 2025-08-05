import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Onboarding() {
  return (
    <section id="onboarding" className="py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="p-0">
              <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Hospital staff using dashboard" className="w-full h-auto" data-ai-hint="medical professional" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-headline">Hospitals & Clinics</CardTitle>
              <CardDescription className="mt-2">
                Access our powerful SaaS dashboard to manage prescriptions, streamline workflows, and enhance security.
              </CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started as Hospital
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden shadow-lg">
             <CardHeader className="p-0">
              <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Patient using a mobile app" className="w-full h-auto" data-ai-hint="patient phone" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-headline">Patients</CardTitle>
              <CardDescription className="mt-2">
                Take control of your prescriptions with our secure mobile app. Access your history and connect with pharmacies.
              </CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button size="lg" className="w-full md:w-auto">
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
