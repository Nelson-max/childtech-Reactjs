import React, { useState } from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap'
import Header from './layout/Header'
import Footer from './layout/Footer'
import axios from 'axios'
import Robot from '../assets/children.png'

function Booking() {
	const [activeTab, setActiveTab] = useState("parent");
	const [parentFirstname, setparentFirstname] = useState("");
	const [parentLastname, setparentLastname] = useState("");
	const [parentPhone, setparentPhone] = useState("");
	const [parentEmail, setparentEmail] = useState("");
	const [childName, setchildName] = useState("");
	const [childBirth, setchildBirth] = useState("");
	const [parentAddress, setparentAddress] = useState("");
	const [parentPrefDate, setparentPrefDate] = useState("");

	let handleparentPrefDateChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentPrefDate(value);
	};

	let handleParentPhoneChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentPhone(value);
	};

	let handleParentAddressChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentAddress(value);
	};

	let handleChildBirthChange = (event) => {
		const target = event.target;
		const value = target.value;

		setchildBirth(value);
	};

	let handleChildnameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setchildName(value);
	};

	let handleParentEmailChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentEmail(value);
	};

	let handleParentFirstNameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentFirstname(value);
	};

	let handleParentLastnameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentLastname(value);
	};

	let handleParentSubmit = (event) => {
		event.preventDefault();

		let pdate = parentPrefDate.replace(" ", "T");
		let cdate = childBirth.replace(" ", "T");
		let pdata = {
			first_name: parentFirstname,
			last_name: parentLastname,
			telephone: parentPhone,
			email: parentEmail,
			address: parentAddress,
			desired_time: pdate,
			child_name: childName,
			child_dob: cdate,
			program: 1,
			course: 1,
		};

		axios
			.post(
				"https://childtech.herokuapp.com/api/appointment/parent/create",
				pdata
			)
			.then((response) => {
				if (response.status === 201) {
					alert("You have successfully booked a Parent appointment");
				} else {
					alert("Hey, we apologize. An error occured. Please try again");
				}
			})
			.catch((error) => {
				alert("Hey, we apologize. An error occured. Please try again");
			});
	};

	const [schoolHead, setschoolHead] = useState("");
	const [schoolName, setschoolName] = useState("");
	const [schoolEmail, setschoolEmail] = useState("");
	const [schoolPhone, setschoolPhone] = useState("");
	const [schoolNumber, setschoolNumber] = useState(0);
	const [schooladdress, setschooladdress] = useState("");
	const [schooolPrefDate, setschooolPrefDate] = useState("");

	let handleSchoolAddressChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschooladdress(value);
	};

	let handleSchoolPrefDateChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschooolPrefDate(value);
	};

	let handleSchoolPhoneChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolPhone(value);
	};

	let handleSchoolEmailChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolEmail(value);
	};

	let handleSchoolnameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolName(value);
	};

	let handleSchoolNumberChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolNumber(value);
	};

	let handleSchoolHeadChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolHead(value);
	};

	let handleSchoolSubmit = (event) => {
		event.preventDefault();

		let date = schooolPrefDate.replace(" ", "T");

		let data = {
			head_name: schoolHead,
			school_name: schoolName,
			number_of_people: schoolNumber,
			telephone: schoolPhone,
			address: schooladdress,
			desired_time: date,
			program: 1,
			course: 1,
		};

		axios
			.post(
				"https://childtech.herokuapp.com/api/appointment/school/create",
				data
			)
			.then((response) => {
				if (response.status === 201) {
					alert("You have successfully booked a School appointment");
				} else {
					alert("Hey, we apologize. An error occured. Please try again");
				}
			})
			.catch((error) => {
				alert("Hey, we apologize. An error occured. Please try again");
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
					className="p-4 min-w-full max-w-4xl lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
					style={{ backgroundColor: "#F5F4F9" }}
				>
					<div className="flex ml-28 m-6 lg:py-12 lg:flex lg:justify-center">
						<div className="px-6 w-1/2 mt-28 md:rounded-lg sm:h-full">
							<img src={Robot} alt="robot" />
						</div>
						<div className="ml-16">
							<h1 className="font-bold mb-8 text-xl text-center">
								Book your appointment here.
							</h1>
							<div className="flex justify-center space-x-16 text-2xl pb-16">
								<button
									type="button"
									onClick={() => {
										setActiveTab("parent");
									}}
									className={`${
										activeTab === "parent" && "text-blue-500"
									} ring ring-2 rounded px-2 `}
								>
									Parent
								</button>
								<button
									className={`${
										activeTab !== "parent" && "text-blue-500"
									} ring ring-2 rounded px-2`}
									type="button"
									onClick={() => {
										setActiveTab("school");
									}}
								>
									School
								</button>
							</div>
							{activeTab === "parent" ? (
								<Form className="mr-6" onSubmit={handleParentSubmit}>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Parent First Name</Form.Label>
											<Form.Control
												type="text"
												value={parentFirstname}
												onChange={handleParentFirstNameChange}
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridName">
											<Form.Label>Parent Last Name</Form.Label>
											<Form.Control
												type="text"
												value={parentLastname}
												onChange={handleParentLastnameChange}
											/>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Email Address</Form.Label>
											<Form.Control
												type="email"
												value={parentEmail}
												onChange={handleParentEmailChange}
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Telephone</Form.Label>
											<Form.Control
												type="text"
												value={parentPhone}
												onChange={handleParentPhoneChange}
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Child's name</Form.Label>
											<Form.Control
												type="text"
												value={childName}
												onChange={handleChildnameChange}
											/>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>Choose Course</Form.Label>
											<Form.Select defaultValue="Choose...">
												<option>Coding</option>
												<option>Science</option>
												<option>Engineering/Robotics</option>
												<option>Practical physics</option>
											</Form.Select>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>Choose Program</Form.Label>
											<Form.Select defaultValue="Choose...">
												<option>Holiday</option>
												<option>Weekend</option>
												<option>Online</option>
											</Form.Select>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridState">
											<Form.Group as={Col} controlId="formGridPhone">
												<Form.Label>Child's Birth Date</Form.Label>
												<Form.Control
													type="datetime-local"
													value={childBirth}
													onChange={handleChildBirthChange}
												/>
											</Form.Group>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Address & Location</Form.Label>
											<Form.Control
												type="text"
												value={parentAddress}
												onChange={handleParentAddressChange}
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridState">
											<Form.Group as={Col} controlId="formGridPhone">
												<Form.Label>Prefered studing Date</Form.Label>
												<Form.Control
													type="datetime-local"
													value={parentPrefDate}
													onChange={handleparentPrefDateChange}
												/>
											</Form.Group>
										</Form.Group>
									</Row>

									<Button
										variant="primary"
										type="submit"
										className="flex justify-center w-28"
									>
										Submit
									</Button>
								</Form>
							) : (
								<Form className="mr-6" onSubmit={handleSchoolSubmit}>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Headmaster/Mistress name</Form.Label>
											<Form.Control
												type="text"
												value={schoolHead}
												onChange={handleSchoolHeadChange}
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridName">
											<Form.Label>School name</Form.Label>
											<Form.Control
												type="text"
												value={schoolName}
												onChange={handleSchoolnameChange}
											/>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Email Address</Form.Label>
											<Form.Control
												type="email"
												value={schoolEmail}
												onChange={handleSchoolEmailChange}
											/>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Telephone</Form.Label>
											<Form.Control
												type="text"
												value={schoolPhone}
												onChange={handleSchoolPhoneChange}
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Number of childdren</Form.Label>
											<Form.Control
												type="number"
												value={schoolNumber}
												onChange={handleSchoolNumberChange}
											/>
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>Choose Course</Form.Label>
											<Form.Select defaultValue="Choose...">
												<option>Coding</option>
												<option>Science</option>
												<option>Engineering/Robotics</option>
												<option>Practical physics</option>
											</Form.Select>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>Choose Program</Form.Label>
											<Form.Select defaultValue="Choose...">
												<option>School</option>
												<option>Weekend</option>
												<option>Holiday</option>
											</Form.Select>
										</Form.Group>
									</Row>

									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Address & Location</Form.Label>
											<Form.Control
												type="text"
												value={schooladdress}
												onChange={handleSchoolAddressChange}
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridState">
											<Form.Group as={Col} controlId="formGridPhone">
												<Form.Label>Prefered Date</Form.Label>
												<Form.Control
													type="datetime-local"
													value={schooolPrefDate}
													onChange={handleSchoolPrefDateChange}
												/>
											</Form.Group>
										</Form.Group>
									</Row>

									<Button
										variant="primary"
										type="submit"
										className="flex justify-center w-28"
									>
										Submit
									</Button>
								</Form>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Booking