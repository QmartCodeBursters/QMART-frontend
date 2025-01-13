import Cta from "../../components/Hero/Cta"
import Hero from "../../components/Hero/Hero"
import About from "../About/About"
import Contactpage from "../Contactpage/Contactpage"


const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Cta/>
        <About/>
        <Contactpage/>
    </div>
  )
}

export default Homepage