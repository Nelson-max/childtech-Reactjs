import React from 'react'
import { Link } from 'react-router-dom'
import logooo from '../logooo.PNG'


function Header(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <div>
                <nav className={(props.transparent) +
                    " fixed w-full flex flex-wrap z-50 items-center justify-between bg-white mb-6 "}>
                    <div className="container mt-2 p-2 px-4 mx-auto flex flex-wrap items-center justify-between">                        
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <Link to='/' className={(props.transparent ? "text-white" : "text-blue-600") +
                                " text-sm leading-relaxed inline-block mr-4 py-2 "
                            }>
                                <img src={logooo} width="100" className="d-inline-block align-top" alt="logo" />
                            </Link>
                            <button
                                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}>
                                <i
                                    className={
                                        (props.transparent ? "text-white" : "text-blue-600") +
                                        " fas fa-bars"}>
                                </i>
                            </button>
                        </div>
                        <div className={"lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-none" : " hidden")} id="example-navbar-warning">
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="flex items-center">
                                    <Link to='/' className={(props.transparent ? "lg:text-white lg:hover:text-white text-blue-600"
                                        : "text-blue-600 hover:text-blue-400") +
                                        " px-4 py-2 flex items-center  text-lg leading-snug text-blue-600 hover:opacity-75"}>
                                        Home
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <Link to='/about' className={(props.transparent ? "lg:text-white lg:hover:text-white text-blue-600"
                                        : "text-blue-600 hover:text-blue-400") +
                                        " px-4 py-2 flex items-center  text-lg leading-snug text-blue-600 hover:opacity-75"}>
                                        About
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <Link to='/services' className={(props.transparent ? "lg:text-white lg:hover:text-white text-blue-600"
                                        : "text-blue-600 hover:text-blue-400") +
                                        " px-4 py-2 flex items-center  text-lg leading-snug text-blue-600 hover:opacity-75"}>Services

                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <Link to='/events' className={(props.transparent ? "lg:text-white lg:hover:text-white text-blue-600"
                                        : "text-blue-600 hover:text-blue-400") +
                                        " px-4 py-2 flex items-center  text-lg leading-snug text-blue-600 hover:opacity-75"}>Events

                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <button className="ring-1 ring-blue-600 text-lg mr-6 hover:bg-gray-300 text-blue-800  px-8 pt-2 pb-2 rounded-md lg:mb-0">
                                        <Link to='/login'>Login </Link>
                                    </button>
                                </li>
                                <li className="flex items-center">
                                    <button className="text-lg mr-6 bg-blue-600 hover:bg-gray-300 text-white px-8 pt-2 pb-2 rounded-md  lg:mb-0" >
                                        <Link to='/signup'>SignUp </Link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        </>
    )
}
export default Header
