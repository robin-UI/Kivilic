import './Home.css'
import Footer from "../Components/Footer/Footer"
import Form from "../Components/Form/Form"
import Header from "../Components/Navigation/Header"
import LandingSec from "../Components/LandingSec/LandingSec"
import background from '../assets/landingChair/background.svg'
import MobileHeader from '../Components/Navigation/MobileHeader'
import { useState } from 'react'

const Home = () => {
    const [mobNav, setMobNav] = useState(true)
    const setnavs = () => {
        setMobNav(mobNav => !mobNav)
    }
    return (
        <>
            <img src={background} alt="svg" className='curv' />
            <Header setnav={setnavs} />
            
            {mobNav ? "" : <MobileHeader setnav={setnavs}/>}
            
            <div className={mobNav ? "" : 'blur-sm'}>
                <LandingSec />
                <Form />
                <Footer />
            </div>

        </>
    )
}

export default Home