import './LandingSce.css'
import chair from '../../assets/landingChair/Group 542.png'

const LandingSec = () => {
  return (
    <div className="main flex md:justify-between flex-col lg:flex-row px-20 pt-14 sm:pt-32 mb-10">
       <div className='chair lg:hidden flex justify-center mb-6'>
            <img src={chair} alt="chair" className='chairImage lg:hidden w-40' />
        </div>
        <div className="textArea flex md:justify-end flex-col md:mb-24 ">
            <h2 className='font-bold text-4xl text-center md:mb-40 text-[#20404A] lg:text-white mb-5'>Carrers</h2>
            <div>
                <h1 className='text-[30px] sm:text-[40px] text-[#20404A] font-bold '>Submit Your Resume</h1>
                <p className='text-[#20404A] sm:text-3xl font-normal '>Become discoverable for all of our roles</p>
            </div>
            
        </div>
        <div className='chair mr-10 flex justify-end flex-col mb-10'>
            <img src={chair} alt="chair" className='chairImage hidden lg:block lg:w-80' />
        </div>
    </div>
  )
}

export default LandingSec