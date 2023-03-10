import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Workexperiance from './components/Workexperiance'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
      <Head>Ravindu</Head>
      <Header />

      <section id="hero" className=' snap-start'>
        <Hero />
      </section>

      <section id="about" className=' snap-center'>
        <About />
      </section>

      <section id="experiance" className=' snap-center'>
        <Workexperiance />
      </section>

      <section id="skills" className=' snap-start'>
        <Skills />
      </section>

      <section id="project" className=' snap-start'>
        <Projects />
      </section>

      <section id="contact" className=' snap-start'>
        <Contact />
      </section>

    </div>
  )
}
