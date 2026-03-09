import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Research } from "@/components/research"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90" aria-hidden>
        <div className="absolute top-0 left-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-[30%] right-0 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[18%] h-[20rem] w-[20rem] rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
