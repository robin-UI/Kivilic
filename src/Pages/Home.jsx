import './Home.css'
import Footer from "../Components/Footer/Footer"
import Form from "../Components/Form/Form"
import Header from "../Components/Navigation/Header"
import LandingSec from "../Components/LandingSec/LandingSec"
import background from '../assets/landingChair/background.svg'

const Home = () => {
    return (
        <>
            <img src={background} alt="svg" className='curv' />
            <Header />
            <LandingSec />
            <Form />
            <Footer />


        </>
    )
}

export default Home