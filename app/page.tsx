import Header from "../components/Header"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <AboutMe />
      <Footer />
    </main>
  )
}

