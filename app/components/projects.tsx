import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Hjemmeside',
    description: 'Personlig portfolio bygget med Next.js, TypeScript og Tailwind CSS.',
    link: 'https://github.com/ReyHey/reysanccvv',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/projects/Site.PNG',
  },
  {
    title: 'Milo\'s Whisker Wonders',
    description: 'Samarbejdsprojekt vi lavede som vores projekt til Software Engineering-klassen på Cal State Fullerton.',
    link: 'https://miloswhiskerwonders.itch.io/milos-whisker-wonders',
    tech: [ 'C#', 'Unity'],
    image: '/images/projects/Milos.PNG',
  },
  {
    title: 'Mandelbrot Visualizer',
    description: 'En Mandelbrot-visualizer bygget med Python til mit seneste hackathon i Aalborg (Hackathon #32).',
    link: 'https://github.com/ReyHey/Hackathon-Projects/tree/main/MandelBrotVisualizer',
    tech: ['Python', 'NJit', 'PyGame', 'NumPy'],
    image: '/images/projects/Mandelbrot.jpg',
  },
  {
    title: 'World of Warcraft NPC navnegenerator',
    description: 'Dette lille projekt var et script til at generere tilfældige NPC-navne til World of Warcraft ved hjælp af store SQL dumps fra spillet.',
    link: 'https://github.com/ReyHey/NPCNamesGenerator',
    tech: ['Python'],
    image: '/images/projects/WoW.png',
  },
];



export function Projects() {
  return (
    <section className="mb-8">
      <h2 className="font-semibold text-2xl mb-6 tracking-tighter">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg border border-neutral-800 transition-all hover:bg-neutral-900/30"
          >
            <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJRwlHyUkLicnJycuMTQ0NDExNDEnJyg4PT5APT47Ozs7ODQ/REdP/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJRwlHyUkLicnJycuMTQ0NDExNDEnJyg4PT5APT47Ozs7ODQ/REdP/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJRwlHyUkLicnJycuMTQ0NDExNDEnJyg4PT5APT47Ozs7ODQ/REdP/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJRwlHyUkLicnJycuMTQ0NDExNDEnJyg4PT5APT47Ozs7ODQ/REdP/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJRwlHyUkLicnJycuMTQ0NDExNDEnJyg4PT5APT47Ozs7ODQ/REdP/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJRwlHyUkLicnJycuMTQ0NDExNDEnJyg4PT5APT47Ozs7ODQ/REdP/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJRwlHyUkLicnJycuMTQ0NDExNDEnJyg4PT5APT47Ozs7ODQ/REdP/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJRwlHyUkLicnJycuMTQ0NDExNDEnJyg4PT5APT47Ozs7ODQ/REdP/9k="
              />
            </div>
            <h3 className="text-lg font-medium mb-2">{project.title}</h3>
            <p className="text-neutral-400 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-neutral-900 text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}