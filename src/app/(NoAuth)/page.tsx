import ContactSection from '@/components/Home/ContactSection'
import FAQSection from '@/components/Home/faq-section'
import Hero from '@/components/Home/Hero'
import ProjectsSection from '@/components/Home/ProjectsSection'
import SectionThree from '@/components/Home/SectionThree'
import SectionTwo from '@/components/Home/SectionTwo'
import ServicesSection from '@/components/Home/ServicesSection'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      <div className="bg-[#3E271E] h-20 -mt-20"></div>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <ServicesSection />
      <ProjectsSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
