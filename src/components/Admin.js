import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import axios from 'axios'



function Admin() {

    const [data, setData] = useState({
		courses: 0,
		enrolls: 0,
		appointments: 0,
	});

	useEffect(() => {
		axios.get("https://childtech.herokuapp.com/api/data/").then((response) => {
			console.log(response.data);
			setData(response.data);
		});

		// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);

    return (
        <div>
            <Header />
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="min-w-full max-w-4xl" style={{ backgroundColor: '#F5F4F9' }}>

                    <div class="min-h-screen flex mt-16">
                        <div class="py-12 px-10 w-1/4">
                            <div class="flex space-2 items-center border-b-2 pb-4">
                                <div class="ml-3">
                                    <h1 class="text-3xl font-bold text-blue-500">ChildTech</h1>
                                    <p class="text-center text-sm text-blue-500 mt-1 font-serif">DASHBOARD</p>
                                </div>
                            </div>
                            <div class="mt-8">
                                <ul class="space-y-10">
                                    <li>
                                        <Link to="/" class="flex items-center text-sm font-semibold text-gray-500 hover:text-blue-500 transition duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-400 hover:text-blue-500 transition duration-200" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                            </svg>
                                            Courses</Link>
                                    </li>
                                    <li>
                                        <Link to="/appointments" class="flex items-center text-sm font-semibold text-gray-500 hover:text-blue-500 transition duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-400 hover:text-blue-500 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                            Appointments</Link>
                                    </li>

                                    <li>
                                        <Link to="/" class="flex items-center text-sm font-semibold text-gray-500 hover:text-blue-500 transition duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-400 hover:text-blue-500 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Schedules</Link>
                                    </li>
                                    <li>
                                        <Link to="/" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-blue-500 transition duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-400 hover:text-blue-500 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Payouts</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex mt-20 space-x-4 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-blue-500 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                <Link to="/" class="block font-semibold text-gray-500 hover:text-blue-500 transition duration-200">Logout</Link>
                            </div>
                        </div>
                        <div class="bg-indigo-50 flex-grow py-12 px-10">
                            <div class="flex justify-between">
                                <div>
                                    <h1 class="text-4xl font-bold text-blue-700">Welcome to ChildTech!</h1>
                                </div>
                                <div>
                                    <div class="flex items-center border rounded-lg bg-white w-max py-2 px-4 space-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <input type="text" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex space-x-10">
                                    <div class="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                                        <div>
                                            <span class="text-lg font-semibold text-gray-900">Uploaded Courses</span>
                                            <h1 class="text-2xl font-bold">{data.courses}</h1>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                                        <div>
                                            <span class="text-lg font-semibold text-gray-900">Paid Courses</span>
                                            <h1 class="text-2xl font-bold">{data.enrolls}</h1>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                                        <div>
                                            <span class="text-lg font-semibold text-gray-900">Monthly paid</span>
                                            <h1 class="text-2xl font-bold">$682.5</h1>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                                        <div>
                                            <span class="text-md font-semibold text-gray-900">Appointments</span>
                                            <h1 class="text-2xl font-bold">{data.appointments}</h1>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex mt-10 space-x-10">
                                    <div class="bg-white w-2/3 p-8 flex items-center justify-around rounded-xl shadow-lg">
                                        <div class="space-y-2">
                                            <h3 class="text-sm font-semibold text-gray-900">Total Anual paid</h3>
                                            <h1 class="text-4xl font-bold text-blue-500">$6082.5</h1>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-40 w-40 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex-grow bg-white rounded-xl shadow-lg">
                                        <h1>Statistics</h1>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Admin