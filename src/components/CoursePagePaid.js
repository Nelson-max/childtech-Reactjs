import React, {useEffect, useState} from 'react'
import { img } from 'react-bootstrap'
import Footer from './layout/Footer'
import Header from './layout/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const token = localStorage.getItem("token")
console.log(token)
const token1 = `Bearer ${token}`
const config = {
    headers: {
        Authorization: token1,
    }
}

function CoursePage() {
    const navigate = useNavigate();

    const [courses, setCourses] = useState([])
    const [isLoading,setIsloading] = useState(true);

    useEffect(() => {
        console.log("starting")
        axios.get('http://childtech.herokuapp.com/api/courses/', config)
        .then(response =>{ 
            console.log(response)
            setIsloading(false)
            setCourses(response.data)
        })
            .catch((error) => {
                if(error){
                    // navigate("/login")
                    console.log(error)
                } else {
                    navigate("/coursepagepaid")
                }
            })
        },[])

    return (
        <div>
            <Header />
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl" style={{ backgroundColor: '#F5F4F9' }}>
                <div class="flex relative mx-auto w-1/4 mt-16 max-w-md">
                        <input class="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg " type="search" name="search" placeholder="Search" />
                        <button type="submit" class="absolute right-2 top-3 mr-4">
                            <svg class="text-black h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div class="text-center pb-12">
                            <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-gray-900">
                                Welcome to our courses, choose your favorite video or videoseries
                            </h1>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {  
                                courses.map((course, key) => {
                                     return isLoading=== true  ? <div>Loading..</div>:  (<div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div class="object-center object-cover h-auto w-full">                                    
                                    <img width='560' height='315' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAACtCAMAAAAu7/J6AAAAM1BMVEW4uLj///+7u7u0tLTv7+/S0tLExMTq6urHx8fs7Ozm5ubGxsbKysrCwsLk5OT8/Pz19fUGOsqZAAADxElEQVR4nO3d23arIBRGYYXUY0z6/k9bMWLUgC4MSln883rvDv1GDqAEswwhhBBCCCGEEEIIIYQQQgghhBBCCCGEENLJtpWhj+G/V5R5Xhahj+JfVzT5UAMmS6IdiQamVoQ+nn+YKB75okcBplVFk3+EN90iExGYFtmIwDSlvvS3woBAtvU2kapOenhJIkqbSVZEooGpSpLJhejFFPqIL+++83FtqryHPupLqw4QDUzJvJoWczTX0pjTia2hI4mJ/5yu+5JoYOpCn8Wp+SBiztQd/Lg2VfJk2pujOTPxm9NRJyAu1W3os/Ka6+iazMRn3HQWESOm+4lEA1P8k5UjczTX4p7TiSuIXkzRjsKvInoxhT7bQx2d6R9miu8j/GqiCJlCEMXF5HTt2neRXAu/38IRqW4xvJrOHjzuK0UxHAj5dosGKZNtyLdcJEg9UxGOKRokxXTxm67u4kO6mKkupIwRSTFdNcEt+tFRpEjZ9gItX40LveJFyrJv7teSiPSV7piRFNPzLKFn874ZEDdSP7w8h+nZzKcgsSOdwrQk4oDk//LJx2URDkh+mQxXjngg+buPa7x3ywXJz/ByGDoa/jYDJDEe+7dMeqGEWFswQBI/t2o8+m9WKemVSaK6/awwWCD1LwL9UXKUaVq81fYvR6ZIs0VF3WPDwtJDE73esWyRvmBaEbFGmn1/uzBNRO9RBGukN5OgMj268cTnAy3mSLObY5TrTdMPA6vFhXP2SDOmdu9HgfrdWa3uLSSA1J+MXi2zxTQRfd4YTgLpzSRtTKX+MaDp3nkiSDMm02RlmqOZlxckg6TWhb7OSa4/wpuRSNgWFySE9GZaTFamOZp9/UVSSLMFj3rcNA0dt5ZdJoa0YiIRJYg0W7Ne6KHj3kKnBJHUN93sgqPcXzCXJNKMiUCULFKe/yomef+l/NtkkRQTjShpJHpAAhKQLAGJEJAIAYkQkAgBiRCQCAGJEJAIAYkQkAgBiRCQCAGJlN/fdX1uxMUCyeembqYt3Zgg+WIy73rHBskHk21jQEZImdhbtbVDZN3XlROSWqh+mKms7AK8kLKje3Vsb9/GDukI094OdwyRXLc02d8rkSWSy0ZLlG2ReCKRHzdBe9gEVyQSE/V5HHyRsr05HX2zZNZIW7+dcHmUEnMkG5Pb06bYI5mer+D6xAT+SB9P6nB/9kYKSIupr30aay8NpEz/YKk8tK99Mkhqj7PavDfC/n/Nn0M1e6T+XA/vyyrHfB4NQgghhBBCCCGEEEIIIYQQQgghhBBCCKHQ/QHULDF6a+yYzgAAAABJRU5ErkJggg==' alt=" "/>
                                </div>
                                <div class="text-center py-8 sm:py-6">
                                    <p class="text-xl text-gray-700 font-bold">{course.name}</p>
                                    {/* <h3 class="text-blue-600 text-3xl" id="whoobe-upam2">
                                        <small>RWF </small>
                                        <b>{course.price}</b>
                                    </h3> */}
                                    <button value="button" class="bg-blue-400 text-base text-white px-4 py-2 rounded hover:bg-blue-700 mt-8" id="whoobe-t9t5l">Click to view</button>
                                </div>
                            </div>)
                                })
                            }
                            
                        </div>
                    </section>
                    
                    {/* <section class="w-full pt-16 pb-20">
                        <div class="px-10 mx-auto text-center max-w-7xl">
                            <h2 class="text-5xl font-bold text-blue-600">
                                Unlimited <span class="text-gray-800">Access</span>
                            </h2>
                            <p class="mt-3 text-lg text-gray-500">Our Unlimited access are designed to meet the needs of everybody.</p>
                            <div class="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">

                                
                                <div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">

                                    <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-50 rounded"></div>
                                    <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                                    <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                                        <svg class="w-16 h-16 text-blue-400 rounded-2xl" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><rect x="0" y="0" width="150" height="150" rx="15"></rect></defs><g fill="none" fill-rule="evenodd"><mask fill="#fff"><use xlinkHref="#plan1"></use></mask><use fill="currentColor" xlinkHref="#plan1"></use><circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50"></circle><path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z"></path></g></svg>
                                        <div class="relative flex flex-col items-start">
                                            <h3 class="text-xl font-bold">Online program</h3>
                                            <p class="tracking-tight text-gray-500">
                                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                                <span class="text-3xl font-bold text-gray-800">10</span>
                                                <span class="text-sm -translate-y-0.5 inline-block transform">/ individual</span>
                                            </p>
                                        </div>
                                    </div>

                                    <ul class="relative py-12 space-y-3">
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>Basics &amp; Features</span>
                                        </li>
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>Limited access to Courses</span>
                                        </li>
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>Priority Email Support</span>
                                        </li>
                                    </ul>

                                    <a href="#_" class="relative flex items-center justify-center w-full px-5 py-4 text-lg font-medium text-white rounded-xl group">
                                        <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
                                        <span class="absolute inset-0 w-full h-full rounded-xl"></span>
                                        <span class="relative">Choose program</span>
                                        <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>

                                </div>
                                
                                <div class="relative p-8 lg:p-6 xl:p-8 rounded-2xl">

                                    <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-50 rounded-xl"></div>
                                    <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                                    <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                                        <svg class="w-16 h-16 text-blue-400 rounded-2xl" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><rect x="0" y="0" width="150" height="150" rx="15"></rect></defs><g fill="none" fill-rule="evenodd"><mask fill="#fff"><use xlinkHref="#plan1"></use></mask><use fill="currentColor" xlinkHref="#plan1"></use><circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50"></circle><path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z"></path></g></svg>
                                        <div class="relative flex flex-col items-start">
                                            <h3 class="text-xl font-bold">Weekend program</h3>
                                            <p class="tracking-tight text-gray-500">
                                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                                <span class="text-3xl font-bold text-gray-800">25</span>
                                                <span class="text-sm -translate-y-0.5 inline-block transform">/ individual</span>
                                            </p>
                                        </div>
                                    </div>

                                    <ul class="relative py-12 space-y-3">
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>introduction to new technology</span>
                                        </li>
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>Courses &amp; Features</span>
                                        </li>
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>Access to all Components</span>
                                        </li>
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>Priority Email &amp; Chat Support</span>
                                        </li>
                                    </ul>

                                    <a href="#_" class="relative flex items-center justify-center w-full px-5 py-4 text-lg font-medium text-white rounded-xl group">
                                        <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
                                        <span class="absolute inset-0 w-full h-full rounded-xl"></span>
                                        <span class="relative">Choose program</span>
                                        <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>

                                </div>
                                
                                <div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl md:col-span-2 lg:col-span-1">

                                    <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-50 rounded-xl"></div>
                                    <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                                    <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                                        <svg class="w-16 h-16 text-blue-400 rounded-2xl" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><rect x="0" y="0" width="150" height="150" rx="15"></rect></defs><g fill="none" fill-rule="evenodd"><mask fill="#fff"><use xlinkHref="#plan1"></use></mask><use fill="currentColor" xlinkHref="#plan1"></use><circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50"></circle><path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z"></path></g></svg>
                                        <div class="relative flex flex-col items-start">
                                            <h3 class="text-xl font-bold">Holiday program</h3>
                                            <p class="tracking-tight text-gray-500">
                                                <span class="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                                                <span class="text-3xl font-bold text-gray-800">35</span>
                                                <span class="text-sm -translate-y-0.5 inline-block transform">/ individual</span>
                                            </p>
                                        </div>
                                    </div>

                                    <ul class="relative py-12 space-y-3">
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>All courses &amp; Features</span>
                                        </li>
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>Access to all Components</span>
                                        </li>
                                        <li class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                            <span>Priority Phone Support</span>
                                        </li>
                                    </ul>

                                    <a href="#_" class="relative flex items-center justify-center w-full px-5 py-4 text-lg font-medium text-white rounded-xl group">
                                        <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
                                        <span class="absolute inset-0 w-full h-full rounded-xl"></span>
                                        <span class="relative">Choose program</span>
                                        <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>

                                </div>
                               

                            </div>
                        </div>
                    </section> */}
                </div>
            </div>

            <Footer />
        </div >
    )
}
export default CoursePage