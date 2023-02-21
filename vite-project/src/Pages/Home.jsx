import Footer from "../Components/Footer/Footer"
import Form from "../Components/Form/Form"
import Header from "../Components/Header"
import LandingSec from "../Components/LandingSec/LandingSec"


const Home = () => {
    return (
        <>
            <Header className='z-10'/>
            <LandingSec/>
            <Form />
            <Footer />
        </>
    )
}

export default Home