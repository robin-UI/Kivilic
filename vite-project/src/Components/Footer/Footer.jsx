import './footer.css'
import facebook from '../../assets/Socialmedia/facebook.png'
import instagram from '../../assets/Socialmedia/instagram.png'
import twitter from '../../assets/Socialmedia/twitter.png'
import youtube from '../../assets/Socialmedia/youtube.png'
import gPlay from '../../assets/Socialmedia/Group 245.png'
import iStore from '../../assets/Socialmedia/Group 244.png'
import footerlogo from '../../assets/footerlogo.png'
import arrow from '../../assets/Path 832.png'

const Footer = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-3 bg-gray-100 py-32 px-20'>
                <div className="description">
                    <img
                        src={footerlogo}
                        className="h-6 mr-3 sm:h-9 mb-8"
                        alt="Flowbite Logo"
                    />
                    <p className='text-base font-normal leading-7 not-italic text-left para'>
                        KIVLIK is a mobile steam car wash company, which offers premium car wash and detailing services at your doorstep.
                        Conveniently book a car wash with a few taps on your phone. KIVLIK has several packages to meet your budget and requirements.
                        Conveniently book a carwash with a few taps using the KIVLIK App or website. You can pick a time,
                        location and package from the App or web. KIVLIK washes each vehicle using our Steam Cleaning system.
                    </p>
                </div>
                <div className="company flex justify-center">
                    <div>
                        <h2 className="mb-6 text-xl font-semibold text-gray-500 uppercase dark:text-gray-400 footTitle">
                            COMPANY
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Who we are
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Blog
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Currier
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Report fraud
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Investor Relation
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="gotQuestions">
                    <div>
                        <h2 className="mb-6 text-xl font-semibold text-gray-500 uppercase dark:text-gray-400">
                            Got Questions?
                        </h2>
                        <h1 className='text-3xl'>Help Center</h1>
                        <div className='flex my-4 justify-end'>
                            <img src={arrow} alt="arrowmdrk" className='h-4' />
                        </div>
                        <h4 className='text-[#20404a]'> Follow Us </h4>
                        <div className='sociallinks my-5'>
                            <ul className='flex'>
                                <li><img
                                    src={facebook}
                                    className="h-7 w-4 mr-4 "
                                    alt="FaceBook"
                                />
                                </li>
                                <li><img
                                    src={twitter}
                                    className="h-7 w-8 mr-4 "
                                    alt="Twitter"
                                />
                                </li>
                                <li><img
                                    src={instagram}
                                    className="h-7 w-7 mr-4 "
                                    alt="Instagram"
                                />
                                </li>
                                <li><img
                                    src={youtube}
                                    className="h-7 w-10 mr-4 "
                                    alt="Youtube"
                                />
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='flex'>
                        <div className="appstore">
                            <img
                                src={iStore}
                                className=" mr-3 h-14 w-44"
                                alt="Apple Store"
                            />
                        </div>
                        <div className="gplay">
                            <img
                                src={gPlay}
                                className="mr-3 h-14 w-44"
                                alt="Google Play"
                            />
                        </div>

                    </div>

                </div>
            </div>
            <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-lg font-normal leading-7 not-italic text-left text-gray-800 ">
                    ©2021 Kivlik. All rights reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="mr-3 hover:underline text-gray-800 font-normal">Privicy</a>
                    </li>
                    |
                    <li>
                        <a href="/" className="mr-3 ml-3 hover:underline text-gray-800 font-normal">Terms</a>
                    </li>
                    |
                    <li>
                        <a href="/" className="mr-3 ml-3 hover:underline text-gray-800 font-normal">Security </a>
                    </li>
                    |
                    <li>
                        <a href="/" className="ml-3 hover:underline text-gray-800 font-normal">Sitemap</a>
                    </li>
                </ul>
            </footer>

        </div>
    )
}

export default Footer