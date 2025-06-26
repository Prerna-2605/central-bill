import React from 'react'

import Header from './components/Header'
import Company from './components/Company'
import Testimonials from './components/Testimonials'
import Switch from './components/Switch'
import Comparisons from './components/Comparisons'
import SimpleSteps from './components/SimpleSteps'
import Utilities from './components/Utilities'
import TestimonialHead from './components/TestimonialHead'
import Footer from './components/Footer'
import Questions from './components/Questions'

function App() {
  return (
    <>
      <Header />
      <Company />
      <Switch />
      <Comparisons />
      <SimpleSteps />
      <Utilities />
      <TestimonialHead />
      <Testimonials />
      <Questions />
      <Footer />
    </>
  )
}

export default App