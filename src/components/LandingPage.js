import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import learn from '../assets/africa.png'
import robo from '../assets/robo.png'
import learney from '../assets/LearnerY.png'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './style.css'
import { useState, useEffect } from 'react';


function LandingPage() {
    const [spinner, setSpinner] = useState(true);

    // It will be executed before rendering

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
    }, []);
    return !spinner && (
        <div >
            <Header />
            <div className="flex flex-col md:flex-col lg:flex-row w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl mt-16" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="flex flex-row sm:flex-col md:flex-col" id='homepage' >
                        <div className="flex flex-col text-black space-y-16 w-1/2" id='ifoto' >
                            <span className="text-xl  md:text-2xl lg:text-4xl ml-8 mr-28 md:mr-4 lg:mr-auto font-bold mt-16 ">Our Children, Our future</span>
                            <p className="flex text-md md:text-xl lg:text-2xl ml-8 leading-relaxed py-4">
                                Ever thought of improving your children’s education?
                                ChildTech teaches your child to love technology,
                                improve creativity, logical thinking and problem solving
                                all at a young age.
                            </p>
                            <div className="flex space-x-12 pb-32 justify-center ">
                                <span><Button className=" text-lg ml-6  bg-white text-blue-700 hover:bg-blue-400 rounded-lg p-3 ring-2 ring-blue-300 md:ring-blue-500"> <Link to='/coursepage'> Start now </Link> </Button> </span>
                                <span className="animate-pulse inline-flex rounded-lg"><Button className="text-lg  p-3 leading-tight hover:text-white "><Link to='/booking'>  Book an appointment </Link>  </Button></span>
                            </div>
                        </div>
                        <div className="relative w-1/2 -mt-2 h-screen bg-landp right-0">
                            <span className='w-4/6 absolute right-0'><img src={learney} alt="pict" className='mt-10'/> </span>
                        </div>
                    </div>
                {/*starting  2nd section */}
                    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                        style={{
                            minHeight: "75vh"
                        }}>
                        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-childdren">
                            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                        </div>
                        <div className="container relative mx-auto">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                    <div className="pr-12">
                                        <h1 className="text-white text-3xl">
                                            ChildTech is a company that is going to teach children about technology.
                                        </h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }} >
                            <svg className="absolute bottom-0 overflow-hidden bg-blue-400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                <polygon className="text-blue-400 fill-current"
                                    points="2560 0 2560 100 0 100"></polygon>
                            </svg>
                        </div>
                    </div>

                    <section className="pb-20 bg-gray-300 -mt-24">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap">
                                <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-award"></i>
                                            </div>
                                            <h6 className="text-xl font-bold">School program</h6>
                                            <p className="mt-2 mb-4 text-gray-900">
                                                In this program we are going to teach children from their schools where they will be dealing with practical courses.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div>
                                            <h6 className="text-xl font-bold">
                                                Weekend program
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-900">
                                                We shall be teaching children during weekend to allow them to play while learning to be creative in what they do.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div>
                                            <h6 className="text-xl font-bold">
                                                Online program
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-900">
                                                This program is going to help parents and children to learn from their homes or anywhere convenient.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-fingerprint"></i>
                                            </div>
                                            <h6 className="text-xl font-bold">
                                                Holiday program
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-900">
                                                Children will join holiday intake to learn about tech, share teamwork with different children and create their own works.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-wrap items-center mt-32">
                                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-50">
                                        <i className="fas fa-user-friends text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl mb-2 font-bold leading-normal">
                                        Working with ChildTech is a pleasure
                                    </h3>
                                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-900">
                                        ChildTech is looking forward to getting children on their best level of technology
                                        and that is going to change the education system to a better one.
                                    </p>
                                    <p className="text-lg leading-relaxed mt-0 mb-4 text-gray-900">
                                        ChildTech will be having several courses including the coding part,
                                        the practical science part and the engineering part, through different
                                        programs: school program, afterschool program, weekend program and holiday program.
                                    </p>
                                </div>

                                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-400">
                                        <img
                                            alt="..."
                                            src={learn}
                                            className="w-full align-middle rounded-t-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="relative py-20">
                        <div
                            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                            style={{ height: "80px" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="text-blue-400 fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>

                        <div className="container mx-auto px-4">
                            <div className="items-center flex flex-wrap">
                                <div className="md:w-4/12 ml-auto mr-auto px-4">
                                    <img
                                        alt="..."  className="h-full"
                                        src={robo} />
                                </div>
                                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400">
                                            <i className="fas fa-rocket text-xl"></i>
                                        </div>
                                        <h3 className="text-3xl font-bold">
                                            ChildTech main actions
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-900 text-lg">
                                            In school children will first be taught how to code in their schools.
                                            And create their own interactive stories, animations and games.
                                        </p>
                                        <ul className="list-none mt-6">
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="text-xs inline-block py-1 px-2 rounded-full text-white bg-blue-400 mr-3">
                                                            <i className="fas fa-fingerprint"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-900 text-lg">
                                                            Teach children programming
                                                        </h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="text-xs inline-block py-1 px-2 rounded-full text-white bg-blue-400 mr-3">
                                                            <i className="fab fa-html5"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-900 text-lg">Engineering/Robotics</h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="text-xs inline-block py-1 px-2 rounded-full text-white bg-blue-400 mr-3">
                                                            <i className="far fa-paper-plane"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-900 text-lg">Practical science</h4>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            {/* <div class="lds-facebook"><div></div><div></div><div></div></div> */}
            <Footer />
        </div>

    )
}
export default LandingPage