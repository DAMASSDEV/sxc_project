"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { programs } from "./program_data";
import ChatbotFAB from "../ChatbotModule";
import BackToTopButton from "../LandingPageModules/sections/BackToTopButton";

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
            Structured Pathways to <span className="text-primary">Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive programs designed to connect academic potential with
            corporate excellence.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="max-w-7xl mx-auto grid gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-row bg-white border border-gray-200 overflow-hidden rounded-md shadow-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                {/* Image Section */}
                <div className="relative w-1/3 h-auto min-h-[400px] overflow-hidden bg-black/30 shrink-0">
                  <div className="absolute top-4 left-4 z-20 bg-primary px-4 py-1.5 text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-md">
                    {program.month}
                  </div>

                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                    {program.title}
                  </h3>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5 flex-1 font-light">
                    {program.description}
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-primary font-black mb-2">
                      Target Audience
                    </p>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-5">
                      {program.targetAudience}
                    </p>

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfezJ4fESoXGCyr1UXkG1gqIif6f2ZylEfuNm2IPkNctmD_lQ/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors group/btn">
                      Join Program
                      <div className="relative flex h-8 w-8 items-center justify-center bg-primary transition-all duration-300 group-hover/btn:w-10 rounded-sm">
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <ChatbotFAB />
      <BackToTopButton />
    </section>
  );
};
