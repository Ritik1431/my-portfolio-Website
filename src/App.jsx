import React from 'react'
import Header from './Components/Header/Header.jsx';
import Nav from'./Components/Nav/Nav.jsx';
import About from './Components/About/About.jsx';
import Experience from './Components/Experience/Experience.jsx'
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer.jsx';
function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
