"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Hero3D } from "./hero-3d";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicHero3D = dynamic(() => import("./hero-3d").then((mod) => mod.Hero3D), {
  ssr: false,
});


export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-xl text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline"
              variants={itemVariants}
            >
              Blockchain-powered digital prescriptions.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground"
              variants={itemVariants}
            >
              A seamless and secure system for verified pharmacies, hospitals, and patients.
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center md:justify-start gap-4"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#onboarding">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="h-64 md:h-[400px] w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <DynamicHero3D />
          </motion.div>
        </motion.div>
      </div>
       <div className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
