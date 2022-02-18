import React, {useState} from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    let handleEmailChange = (event) => {
        const target = event.target;
        const value = target.value;

        setEmail(value);
    };
    let handleUsernameChange = (event) => {
        const target = event.target;
        const value = target.value;

        setUsername(value);
    };
    let handlePasswordChange = (event) => {

        const target = event.target;
        const value = target.value;

        setPassword(value);
    };
    let handlePassword2Change = (event) => {
        const target = event.target;
        const value = target.value;

        setPassword2(value);
    };
    let handleSubmit = (event)=> {
        event.preventDefault();
        if (password !== password2){
            return console.log("Passwords do not match");
        }
        
        let data = {
            "username": username,
            "email": email,
            "password":password
        }

        axios.post('https://childtech.herokuapp.com/api/register',data)
        .then(response => {
            console.log(response)
            if(response.status === 200) {
                navigate("/login")
            } else if(response.status === 400){
                console.log("This user already exists")
            }
        })
        .catch((error) => {
            console.log("An error occured");
        })
        
    }

    return (
        <div>
            <Header />
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl" style={{ backgroundColor: '#F5F4F9' }}>                    
                    <div class="min-h-screen flex flex-row items-center justify-center bg-gray-100">
                       
                        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-6 w-50 max-w-md">
                            <div class="font-medium self-center text-xl sm:text-3xl text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#013fe2"><path d="M86,17.2c-19.00027,0 -34.4,15.39973 -34.4,34.4v5.73333c0,19.00027 15.39973,34.4 34.4,34.4c19.00027,0 34.4,-15.39973 34.4,-34.4v-5.73333c0,-19.00027 -15.39973,-34.4 -34.4,-34.4zM85.9888,108.93333c-22.96773,0 -52.43707,12.42324 -60.91667,23.44844c-5.24027,6.81693 -0.25182,16.68489 8.34245,16.68489h105.15964c8.59427,0 13.58271,-9.86796 8.34245,-16.68489c-8.4796,-11.01947 -37.96013,-23.44844 -60.92786,-23.44844z"></path></g></g></svg>
                            </div>

                            <div class="mt-10">
                                <form onSubmit={handleSubmit}>
                                    <div class="flex flex-col mb-2">
                                        <label for="email" class="mb-1 text-lg tracking-wide text-gray-900">E-mail address:</label>
                                        <div class="relative">
                                           
                                            <input id="email" type="email" name="email" value={email} onChange={handleEmailChange} class="text-sm pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"/>
                                        </div>
                                    </div>
                                    <div class="flex flex-col mb-2">
                                        <label for="phone" class="mb-1 text-lg tracking-wide text-gray-900">Username:</label>
                                        <div class="relative">
                                           
                                            <input id="phone" type="text" name="username" value={username} onChange={handleUsernameChange} class="text-sm pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"/>
                                        </div>
                                    </div>
                                    <div class="flex flex-col mb-6">
                                        <label for="password" class="mb-1 text-lg tracking-wide text-gray-900">Password:</label>
                                        <div class="relative">
                                            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                               
                                            </div>
                                            <input id="password" type="password" name="password" value={password} onChange={handlePasswordChange} class="text-sm pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "/>
                                        </div>
                                    </div>
                                    <div class="flex flex-col mb-6">
                                        <label for="password" class="mb-1 text-lg tracking-wide text-gray-900">Retype-password:</label>
                                        <div class="relative">
                                            <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                               
                                            </div>
                                            <input id="password" type="password" name="password" value={password2} onChange={handlePassword2Change} class="text-sm pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "/>
                                        </div>
                                    </div>

                                    <div class="flex w-full">
                                        <button type="submit" class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-md py-2 w-full transition duration-150 ease-in">
                                            <span class="mr-2">Register                                                                                     
                                            </span>

                                            <span>
                                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="flex justify-center items-center mt-6">
                                <Link to ='/login' target="_blank" class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                                    <span class="ml-2">You have an account?<Link to ='/login' class="text-xs ml-2 text-blue-500 font-semibold">Login here</Link></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
