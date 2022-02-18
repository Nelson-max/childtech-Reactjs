import React, {useState} from 'react'
import axios from 'axios'
import Header from './layout/Header'
import Footer from './layout/Footer'
import jwt_decode from 'jwt-decode'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
	const [username, SetUsername] = useState("");
	const [password, SetPassword] = useState("");
	const navigate = useNavigate();

	let handleUsernameChange = (event) => {
		const target = event.target;
		const value = target.value;

		SetUsername(value);
	};
	let handlePasswordChange = (event) => {
		const target = event.target;
		const value = target.value;

		SetPassword(value);
	};

	let handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("https://childtech.herokuapp.com/api/token/", {
				username: username,
				password: password,
			})
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					window.localStorage.setItem("token", response.data.access);
					const decoded = jwt_decode(response.data.access);
					if (decoded["is_staff"]) {
						navigate("/admin");
					} else {
						navigate("/coursepagepaid");
					}
				} else {
					alert("Entered data is incorrect");
				}
			})
			.catch((error) => {
				alert("You entered wrong data");
			});
	};

	return (
		<div>
			<Header />
			<div
				className="flex w-full min-h-full justify-center items-center"
				style={{ backgroundColor: "#F5F4F9" }}
			>
				<div
					className="min-w-full max-w-4xl"
					style={{ backgroundColor: "#F5F4F9" }}
				>
					<div class="min-h-screen flex flex-row items-center justify-center bg-gray-100">
						<div class="flex flex-col -pt-8 bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-6 w-50 max-w-md ">
							<div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="90"
									height="90"
									viewBox="0 0 172 172"
								>
									<g
										fill="none"
										fill-rule="nonzero"
										stroke="none"
										stroke-width="1"
										stroke-linecap="butt"
										stroke-linejoin="miter"
										stroke-miterlimit="10"
										stroke-dasharray=""
										stroke-dashoffset="0"
										font-family="none"
										font-weight="none"
										font-size="none"
										text-anchor="none"
									>
										<path d="M0,172v-172h172v172z" fill="none"></path>
										<g fill="#013fe2">
											<path d="M86,17.2c-19.00027,0 -34.4,15.39973 -34.4,34.4v5.73333c0,19.00027 15.39973,34.4 34.4,34.4c19.00027,0 34.4,-15.39973 34.4,-34.4v-5.73333c0,-19.00027 -15.39973,-34.4 -34.4,-34.4zM85.9888,108.93333c-22.96773,0 -52.43707,12.42324 -60.91667,23.44844c-5.24027,6.81693 -0.25182,16.68489 8.34245,16.68489h105.15964c8.59427,0 13.58271,-9.86796 8.34245,-16.68489c-8.4796,-11.01947 -37.96013,-23.44844 -60.92786,-23.44844z"></path>
										</g>
									</g>
								</svg>
							</div>
							<div class="mt-10">
								<form onSubmit={handleSubmit}>
									<div class="flex flex-col mb-5">
										<label
											for="email"
											class="mb-1 text-lg tracking-wide text-gray-900"
										>
											Username:{" "}
										</label>
										<div class="relative">
											<input
												id="email"
												type="text"
												name="username"
												value={username}
												onChange={handleUsernameChange}
												class="text-lg pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-500"
											/>
										</div>
									</div>
									<div class="flex flex-col mb-6">
										<label
											for="password"
											class="mb-1 text-lg tracking-wide text-gray-900"
										>
											Password:
										</label>
										<div class="relative">
											<input
												id="password"
												type="password"
												name="password"
												value={password}
												onChange={handlePasswordChange}
												class=" text-lg pl-10 pr-4 rounded-md border w-full py-2 focus:outline-none focus:border-blue-400"
											/>
										</div>
									</div>

									<div class="flex w-full">
										<button
											type="submit"
											class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-md py-2 w-full transition duration-150 ease-in"
										>
											<span class="mr-2">Sign In</span>
											<span>
												<svg
													class="h-6 w-6"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
											</span>
										</button>
									</div>
								</form>
							</div>
							<div class="flex justify-center items-center mt-6">
								<Link
									to="/signup"
									target="_blank"
									class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
								>
									<span class="ml-2">
										You don't have an account?
										<Link
											to="/signup"
											class="text-xs ml-2 text-blue-500 font-semibold"
										>
											Register now
										</Link>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Login