import { Building2, Globe2, GraduationCap, Handshake, Cpu } from "lucide-react";
import type { Stakeholder } from "../types";

export const stakeholders: Stakeholder[] = [
  {
    key: "principal-tech-owner",
    title: "Principal Tech Owner",
    description:
      "Collaboration with key technology owners for curriculum & industry standards.",
    icon: Cpu,
  },
  {
    key: "government-partner",
    title: "Government & Impact Partner",
    description:
      "Partner with public institutions for programmes of national scale and measurable impact.",
    icon: Building2,
  },
  {
    key: "industry-players",
    title: "Industry Players",
    description:
      "Collaboration with companies for talent channelling, real-world projects, and certification.",
    icon: Handshake,
  },
  {
    key: "universities",
    title: "Universities",
    description:
      "Synergy with campuses for learning, research, and talent development.",
    icon: GraduationCap,
  },
  {
    key: "community",
    title: "Community & Public Reach",
    description:
      "Strengthen community & awareness through consistent activities and content.",
    icon: Globe2,
  },
];
