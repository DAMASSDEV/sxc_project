import type { PartnershipProgramDTO } from "../types";

export const partnershipPrograms: PartnershipProgramDTO[] = [
  {
    id: "program-1",
    title: "Career Readiness Program",
    partner: "Partner Consortium",
    description:
      "Intensive programmes to prepare talents with in-demand skills, certifications, and capstone projects.",
    tags: ["Intensive", "Certification", "Capstone"],
    href: "#",
  },
  {
    id: "program-2",
    title: "Scholarship Coding Camp",
    partner: "Foundation Partner",
    description:
      "Technology training scholarships with a combination of technical and supporting skills (soft skills & readiness).",
    tags: ["Scholarship", "Mentoring"],
    href: "#",
  },
  {
    id: "program-3",
    title: "Back-End Academy",
    partner: "Cloud Provider Partner",
    description:
      "Structured back-end training: fundamentals, industry practices, and portfolio strengthening.",
    tags: ["Backend", "Cloud"],
    href: "#",
  },
];
