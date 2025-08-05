import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, BadgeCheck, Trash2, Lock } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Secure Blockchain Storage",
    description: "Prescriptions are immutably stored on the blockchain, ensuring tamper-proof records and ultimate security.",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-primary" />,
    title: "Verified Pharmacy Onboarding",
    description: "Only licensed and verified pharmacies can join our network, guaranteeing authenticity and patient safety.",
  },
  {
    icon: <Trash2 className="w-10 h-10 text-primary" />,
    title: "Waste Disposal Compliance",
    description: "Track and manage the disposal of controlled substances, ensuring full compliance with environmental regulations.",
  },
  {
    icon: <Lock className="w-10 h-10 text-primary" />,
    title: "Patient Data Privacy",
    description: "Patient confidentiality is paramount. Our system is built with robust privacy controls from the ground up.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose RxChain?</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our platform is built on a foundation of security, trust, and innovation to revolutionize the prescription process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center flex flex-col items-center p-6 border-2 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-lg">
              <CardHeader className="p-0 mb-4">
                {feature.icon}
              </CardHeader>
              <CardTitle className="mb-2 text-xl font-headline">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
