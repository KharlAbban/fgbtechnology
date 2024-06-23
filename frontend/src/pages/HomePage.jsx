import { AboutUs, AskAQuestionCTA, Footer, FullScreenCTA, Header, HowWeDeliver, Navbar, Services } from '../components'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <FullScreenCTA />
      <HowWeDeliver />
      <AskAQuestionCTA />
      <Footer />
    </>
  )
}

export default Homepage
