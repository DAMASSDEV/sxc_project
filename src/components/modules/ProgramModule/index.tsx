"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { programs } from "./data/program_data";
import ChatbotFAB from "../ChatbotModule";
import BackToTopButton from "../LandingPageModules/sections/BackToTopButton";
import { ProgramCard } from "./section/ProgramCard";

export const ProgramModule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Structured Pathways to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Success
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive programs designed to connect academic potential with
            corporate excellence.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="max-w-7xl mx-auto grid gap-8 mb-16">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.title}
              description={program.description}
              image={program.image}
              icon={program.icon}
              month={program.month}
              targetAudience={program.targetAudience}
              index={index}
            />
          ))}
        </div>
      </div>
      <ChatbotFAB />
      <BackToTopButton />
    </section>
  );
};
