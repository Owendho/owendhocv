import React from 'react';

interface TimelineItem {
  title: string;
  company?: string;
  location?: string;
  period: string;
  description: string[];
}

interface TimelineSection {
  title: string;
  items: TimelineItem[];
}

const timelineData: TimelineSection[] = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Lua Developer",
        company: "RestedXP",
        period: "Oct. 2025 – Present",
        description: [
          "Development and delivery of addon functionality for World of Warcraft",
          "Working on guide optimization, performance, UX, and quality assurance with an international team"
        ]
      },
      {
        title: "Lua Intern",
        company: "RestedXP",
        period: "Jul. 2025 – Oct. 2025",
        description: [
          "Developed functions and scripts for automating and setting up leveling flows",
          "Contributed to debugging and improving user experience"
        ]
      },
      {
        title: "Software Consultant",
        company: "Outlier.ai",
        period: "Mar. 2025 – Oct. 2025",
        description: [
          "Evaluating generative AI and LLM output, performing code review, and co-developing production-ready code",
          "Contributing to dataset and prompt design to improve model quality"
        ]
      },
      {
        title: "Intern",
        company: "Plain",
        location: "Aalborg",
        period: "Feb. 2023 – May 2023",
        description: [
          "Automation of insurance processes in an InsurTech platform",
          "Developed and documented workflows that reduced manual processing",
          "Worked in an agile team"
        ]
      },
      {
        title: "Youth Employee",
        company: "IKEA",
        location: "Aalborg",
        period: "Mar. 2017 – Nov. 2019",
        description: [
          "Customer service and operations in a fast-paced environment",
          "Developed strong communication and collaboration skills"
        ]
      }
    ]
  },
  {
    title: "Education",
    items: [
      {
        title: "Bachelor in Software Development",
        company: "UCN",
        location: "Aalborg",
        period: "Sep. 2024 – Jun. 2026",
        description: [
          "Software design, microservices, database architecture, system integration, and agile project management"
        ]
      },
      {
        title: "Exchange Semester",
        company: "California State University",
        location: "Fullerton (USA)",
        period: "Jun. 2023 – Dec. 2023",
        description: [
          "Courses in Python, Software Engineering, Professional Ethics, and Databases",
          "Focus on teamwork and technical communication"
        ]
      },
      {
        title: "Computer Science",
        company: "UCN",
        location: "Aalborg",
        period: "Sep. 2022 – Jul. 2024",
        description: [
          "Practical software development, object-oriented programming, API design, and project work in agile teams"
        ]
      },
      {
        title: "Software Engineering",
        company: "Aalborg University",
        period: "Sep. 2020 – Jul. 2022",
        description: [
          "Early focus on system modeling, requirements specification, and software architecture"
        ]
      },
      {
        title: "Gametech",
        company: "Aalborg Technical High School",
        period: "Jul. 2017 – Jun. 2020",
        description: [
          "Game development, digital design, and practical applied programming"
        ]
      }
    ]
  }
];

export function Timeline() {
  return (
    <section className="mb-8">
      <div className="space-y-12">
        {timelineData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="font-semibold text-2xl mb-6 tracking-tighter">{section.title}</h2>
            <div className="space-y-8">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="relative pl-6 border-l border-neutral-800">
                  <div className="absolute w-3 h-3 bg-neutral-800 rounded-full -left-[6.5px] top-2" />
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-x-2">
                      <h3 className="font-medium">
                        {item.title}
                        {item.company && (
                          <span className="text-neutral-400">
                            {" "}
                            · {item.company}
                            {item.location && `, ${item.location}`}
                          </span>
                        )}
                      </h3>
                      <span className="text-neutral-400 text-sm whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}