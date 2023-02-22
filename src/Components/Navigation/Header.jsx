import './Header.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Header = () => {

    const [header, setHeader] = useState(false)
    const scrollheader = () => {
        if(window.innerWidth <= 375 ){
            window.scrollY >= 63 ? setHeader(true) : setHeader(false)
        }else{
            window.scrollY >= 235 ? setHeader(true) : setHeader(false)
        }
        
    }

    window.addEventListener('scroll', scrollheader)
    return (
        <header className='fixed w-full'>
            <nav className={` px-2 sm:px-4 py-2.5 naver ${header ? 'active' : ''}`}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img
                            src={logo}
                            className="h-6 mr-3 sm:h-9"
                            alt="Flowbite Logo"
                        />
                    </a>
                    <div className="lg:flex lg:order-2">
                        <ul className="lg:flex flex-col p-4 mt-4 border md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 hidden dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="/"
                                    className=" block py-2 pl-3 pr-4 text-white font-normal text-lg hover:text-gray-100"
                                    aria-current="page"
                                >
                                    Login
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className=" block py-2 pl-3 pr-4 text-white font-normal text-lg hover:text-gray-100 "
                                >
                                    SignUp
                                </a>
                            </li>
                        </ul>
                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-white font-bold text-lg hover:text-gray-100"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-white font-normal text-lg hover:text-gray-100"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-white font-normal text-lg hover:text-gray-100"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-white font-normal text-lg hover:text-gray-100"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header