import { Projects } from './components/projects'

export default function Page() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Lidt om mig
        </h1>
        <p className="mb-4">
          {`Hej! Mit navn er Rey og jeg er en softwareudvikler med en passion for at skabe innovative løsninger. Jeg har erfaring inden for webudvikling, mobilapps og cloud computing. Udover mit arbejde elsker jeg at rejse, læse bøger og udforske nye teknologier.`}
        </p>
      </section>
      
      <Projects />
    </div>
  )
}
