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
    title: "Erhvervserfaring",
    items: [
      {
        title: "Praktikant",
        company: "Iqniter",
        period: "Okt. 2025 – Nov. 2025",
        description: [
          "Udvikling og levering af addon-funktionalitet til World of Warcraft",
          "Arbejder med guideoptimering, performance, UX og kvalitetssikring i et internationalt team"
        ]
      },
      {
        title: "Praktikant",
        company: "Plain Insure",
        location: "Aalborg",
        period: "Feb. 2023 – Maj 2023",
        description: [
          "Automatisering af forsikringsprocesser i en InsurTech-platform",
          "Udviklede og dokumenterede workflows sammen med teamet, som reducerede manuel behandling og forbedrede effektiviteten i platformen",
        ]
      },
      {
        title: "Avisbud",
        company: "Nordjyske,",
        location: "Aalborg",
        period: "Sep. 2025 – Nov. 2025",
        description: [
          "Omdeling af aviser og reklamer.",
          "Opnåede komtencer inden for selvstændigt arbejde."
        ]
      }
    ]
  },
  {
    title: "Uddannelse",
    items: [
      {
        title: "Professionsbachelor i Softwareudvikling",
        company: "UCN",
        location: "Aalborg",
        period: "Sep. 2024 – Jan. 2026",
        description: [
          "Softwaredesign, mikroservices, databasearkitektur, systemintegration og software sikkerhed"
        ]
      },
      {
        title: "Datamatiker",
        company: "UCN",
        location: "Aalborg",
        period: "Sep. 2022 – Jul. 2024",
        description: [
          "Praktisk softwareudvikling, objektorienteret programmering, API-design og projektarbejde i agile teams"
        ]
      },
      {
        title: "Software Engineering",
        company: "Aalborg Universitet",
        period: "Sep. 2020 – Jul. 2022",
        description: [
          "Tidligt fokus på imperativ programmering, datastruktur og algoritmer, og linear algebra"
        ]
      },
      {
        title: "Gametech",
        company: "Aalborg Tekniske Gymnasium",
        period: "Jul. 2017 – Jun. 2020",
        description: [
          "Spiludvikling, digitalt design og praktisk anvendt programmering"
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