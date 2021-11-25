import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaBeer } from "react-icons/fa";
import { useState } from "react";

export default function Global() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<section className="wrapper">
				<header>
					<h1>
						<a href="#">
							<img
								src={
									require("../Assets/images/logo.svg").default
								}
								alt="Logo"
							/>
						</a>
					</h1>
					<nav className="desktop">
						<ul>
							<li>home</li>
							<li>about us</li>
							<li>awards</li>
							<li>contact</li>
							<li>
								<a className="button">get started</a>
							</li>
						</ul>
					</nav>
					<h2 onClick={() => setOpen(!open)}>
						<a hrer="/">menu</a>
					</h2>
					{open && (
						<nav className="mobile">
							<ul>
								<li>home</li>
								<li>about us</li>
								<li>awards</li>
								<li>contact</li>
								<li>
									<a className="button">get started</a>
								</li>
							</ul>
						</nav>
					)}
				</header>
				<section id="spotlight">
					<div className="left">
						<h2>
							2021 global design <small>awards</small> published
						</h2>
						<p>
							Here we published 2021 global design awards for the
							design Competetions.
						</p>
						<a className="button" href="#">
							<span>Already impressed ?</span> Get started today !
						</a>
					</div>
					<div className="right">
						<div className="container">
							<img
								src={
									require("../Assets/images/spotlight.svg")
										.default
								}
								alt="List image"
							/>
						</div>
						<div className="bg1">
							<img
								src={
									require("../Assets/images/bg-blend.svg")
										.default
								}
								alt="Background image"
							/>
						</div>
						<div className="bg2">
							<img
								src={
									require("../Assets/images/bg-blend.svg")
										.default
								}
								alt="Background image"
							/>
						</div>
					</div>
				</section>
				{/* section#spotlight */}
				<section id="awards">
					<div className="box">
						<div className="border">
							<div className="content">
								<div className="head">
									<div className="container">
										<img
											src={
												require("../Assets/images/apple.svg")
													.default
											}
											alt="Apple Logo"
										/>
									</div>
									<span>18 Jun 2020</span>
								</div>
								<span>gold winner</span>
								<h5>
									Apple Design Awards <br /> 2020-21
								</h5>
								<img
									src={
										require("../Assets/images/cross-line.svg")
											.default
									}
									alt="Cross Line Image"
								/>
								<div className="foot">
									<span>United States</span>
									<img
										src={
											require("../Assets/images/arrow.svg")
												.default
										}
										alt="Learn More.."
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="border">
							<div className="content">
								<div className="head">
									<div className="container">
										<img
											src={
												require("../Assets/images/google.svg")
													.default
											}
											alt="Google Logo"
										/>
									</div>
									<span>20 Aug 2020</span>
								</div>
								<span>runner up</span>
								<h5>
									Google Design Awards <br /> 2020-21
								</h5>
								<img
									src={
										require("../Assets/images/cross-line.svg")
											.default
									}
									alt="Cross Line Image"
								/>
								<div className="foot">
									<span>New Delhi</span>
									<img
										src={
											require("../Assets/images/arrow.svg")
												.default
										}
										alt="Learn More.."
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="border">
							<div className="content">
								<div className="head">
									<div className="container">
										<img
											src={
												require("../Assets/images/freepik.svg")
													.default
											}
											alt="Freepik Logo"
										/>
									</div>
									<span>18 Dec 2019</span>
								</div>
								<span>silver award</span>
								<h5>
									Freepik Best UI Awards <br /> 2019-20
								</h5>
								<img
									src={
										require("../Assets/images/cross-line.svg")
											.default
									}
									alt="Cross Line Image"
								/>
								<div className="foot">
									<span>France</span>
									<img
										src={
											require("../Assets/images/arrow.svg")
												.default
										}
										alt="Learn More.."
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="box">
						<div className="border">
							<div className="content">
								<div className="head">
									<div className="container">
										<img
											src={
												require("../Assets/images/flaticon.svg")
													.default
											}
											alt="Flaticon Logo"
										/>
									</div>
									<span>16 May 2020</span>
								</div>
								<span>special jury</span>
								<h5>
									Flaticon Design Awards <br /> 2020-21
								</h5>
								<img
									src={
										require("../Assets/images/cross-line.svg")
											.default
									}
									alt="Cross Line Image"
								/>
								<div className="foot">
									<span>New York</span>
									<img
										src={
											require("../Assets/images/arrow.svg")
												.default
										}
										alt="Learn More.."
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* section#awards */}
				<section id="contact">
					<img
						src={require("../Assets/images/contact-bg.png").default}
						alt="List image"
					/>
					<div className="content">
						<h3>Want to get new design news</h3>
						<p>
							Here is a comparison chart of us with thipsum tool ,
							but at the end we win !
						</p>
						<form>
							<input
								type="email"
								placeholder="your email address"
							/>
							<input type="submit" value="Get Started" />
						</form>
					</div>
				</section>
				{/* section#contact */}
				<footer>
					<div className="left">
						<h2>
							<a href="#">
								<img
									src={
										require("../Assets/images/logo.svg")
											.default
									}
									alt="Logo"
								/>
							</a>
						</h2>
						<h5>
							apartment 0031 broadmoor ln, <br /> rotonda west
							wood <br /> FL, 33947
						</h5>
					</div>
					<div className="right">
						<ul>
							<li>home</li>
							<li>about us</li>
							<li>awards</li>
							<li>contact</li>
						</ul>
						<span>
							Designed by <small>www.steyp.in</small>
						</span>
					</div>
				</footer>
			</section>
			{/* section.wrapper */}
		</div>
	);
}
