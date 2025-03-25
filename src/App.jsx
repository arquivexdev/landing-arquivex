
import Carousel from './components/apresentation-landing/carousel-client'
import Header from './components/apresentation-landing/header'
import CompletePlataform from './components/apresentation-landing/complete-platform';
import WhyChoose from './components/apresentation-landing/why-choose';
import CompanyNumbers from './components/apresentation-landing/company-numbers';
import GedSolutions from './components/apresentation-landing/ged-solutions';
import Aproveite from './components/apresentation-landing/ged-solutions/guardaDF';
import TechnologicalSolutions from './components/apresentation-landing/technological-solutions'
import Footer from './components/apresentation-landing/footer'
import ModalCookie from './components/modal'
import TypebotChat from './components/typeBot'


function App() {

  // style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:'center'}}
  return (
    <div  >
      <Header />
      <TypebotChat />
      <CompletePlataform />
      <ModalCookie />
      <WhyChoose />
      <Carousel />
      <CompanyNumbers />
      <GedSolutions />
      {/* <TechnologicalSolutions /> */}
      {/* <Footer /> */}

    </div>
  )
}

export default App
