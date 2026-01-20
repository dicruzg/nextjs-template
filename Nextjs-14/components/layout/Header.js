/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
const Header = ({ handleOpen, headerStyle }) => {
	const [scroll, setScroll] = useState(0)
	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollCheck = window.scrollY > 100
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
			}
		})
	})
	return (
		<>
			<header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
				<div className="container">
					<div className="main-header">
						<div className="header-left">
							<div className="header-logo">
								<Link href="/" legacyBehavior>
									<a className="d-flex">
										{headerStyle ? <Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "auto", height: "auto" }} alt="Agon" src="/assets/imgs/template/logo-white.svg" /> : <Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "auto", height: "auto" }} alt="Agon" src="/assets/imgs/template/logo.svg" />}
									</a>
								</Link>
							</div>
							<div className="header-nav">
								<nav className="nav-main-menu d-none d-xl-block">
									<ul className="main-menu">
										<li className="has-children">
											<Link href="#" className="active">Home</Link>
											<ul className="sub-menu two-col">
												<li>
													<Link href="/" ><i className="fi fi-rr-home" />Homepage - 1</Link>
												</li>
												<li>
													<Link href="/index-2" ><i className="fi fi-rr-home" />Homepage - 2</Link>
												</li>
												<li>
													<Link href="/index-3" ><i className="fi fi-rr-home" />Homepage - 3</Link>
												</li>
												<li>
													<Link href="/index-4" ><i className="fi fi-rr-home" />Homepage - 4</Link>
												</li>
												<li>
													<Link href="/index-5" ><i className="fi fi-rr-home" />Homepage - 5</Link>
												</li>
												<li>
													<Link href="/index-6" ><i className="fi fi-rr-home" />Homepage - 6</Link>
												</li>
												<li>
													<Link href="/index-7" ><i className="fi fi-rr-home" />Homepage - 7</Link>
												</li>
												<li>
													<Link href="/index-8" ><i className="fi fi-rr-home" />Homepage - 8</Link>
												</li>
											</ul >
										</li >
										<li className="has-children">
											<Link href="#" >About</Link>
											<ul className="sub-menu">
												<li>
													<Link href="/page-about-1" ><i className="fi fi-rr-star" />About Us - 1</Link>
												</li>
												<li>
													<Link href="/page-about-2" ><i className="fi fi-rr-star" />About Us - 2</Link>
												</li >
												<li>
													<Link href="/page-about-3" ><i className="fi fi-rr-star" />About Us - 3</Link>
												</li >
											</ul >
										</li >
										<li className="has-children">
											<Link href="#" >Company</Link>
											<ul className="sub-menu">
												<li>
													<Link href="/page-service-1" className="closer"><i className="fi fi-rr-gem" />Services - 1</Link>
												</li>
												<li>
													<Link href="/page-service-2" className="closer"><i className="fi fi-rr-gem" />Services - 2</Link>
												</li >
												<li className="hr"><span /></li>
												<li>
													<Link href="/page-pricing-1" className="closer"><i className="fi fi-rr-database" />Pricing - 1</Link>
												</li >
												<li>
													<Link href="/page-pricing-2" className="closer"><i className="fi fi-rr-database" />Pricing - 2</Link>
												</li >
												<li className="hr"><span /></li>
												<li>
													<Link href="/page-faqs-1" className="closer"><i className="fi fi-rr-headset" />FAQs - 1</Link>
												</li >
												<li>
													<Link href="/page-faqs-2" className="closer"><i className="fi fi-rr-headset" />FAQs - 2</Link>
												</li >
												<li className="hr"><span /></li>
												<li>
													<Link href="/page-career" className="closer"><i className="fi fi-rr-briefcase" />Career</Link>
												</li >
												<li>
													<Link href="/page-career-detail" className="closer"><i className="fi fi-rr-briefcase" />Career Detail</Link>
												</li >
											</ul >
										</li >
										<li className="has-children">
											<Link href="#" >Pages</Link>
											<ul className="sub-menu">
												<li>
													<Link href="/page-contact" ><i className="fi fi-rr-paper-plane" />Contact</Link>
												</li>
												<li>
													<Link href="/page-signup" ><i className="fi fi-rr-user-add" />Sign Up</Link>
												</li >
												<li>
													<Link href="/page-login" ><i className="fi fi-rr-fingerprint" />Log In</Link>
												</li >
												<li>
													<Link href="/page-reset" ><i className="fi fi-rr-settings" />Reset Password</Link>
												</li >
												<li>
													<Link href="/404" ><i className="fi fi-rr-exclamation" />Error 404</Link>
												</li >
											</ul >
										</li >
										<li className="has-children">
											<Link href="#" >Blog</Link>
											<ul className="sub-menu">
												<li>
													<Link href="/blog-1" className="closer"><i className="fi fi-rr-edit" />Blog Archive - 1</Link>
												</li>
												<li>
													<Link href="/blog-2" className="closer"><i className="fi fi-rr-edit" />Blog Archive - 2</Link>
												</li >
												<li className="hr"><span /></li>
												<li>
													<Link href="/blog-single" ><i className="fi fi-rr-document-signed" />Blog Single</Link>
												</li >
											</ul >
										</li >
										<li className="has-children">
											<a href="#">Shop</a>
											<ul className="sub-menu">
												<li><Link href="/page-shop-grid-1" className="closer"><i className="fi fi-rr-edit"></i>Shop Grid - 1</Link></li>
												<li><Link href="/page-shop-grid-2" className="closer"><i className="fi fi-rr-edit"></i>Shop Grid - 2</Link></li >
												<li><Link href="/shop/1" className="closer"><i className="fi fi-rr-edit"></i>Product Details</Link></li >
											</ul >
										</li >
									</ul >
								</nav >
								<div className="burger-icon burger-icon-white" onClick={handleOpen}>
									<span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
								</div>
							</div >
						</div >
						<div className="header-right">
							<div className="block-signin">
								<Link href="/page-signup" className="btn btn-default hover-up icon-arrow-right">Get Started</Link>
							</div>
						</div >
					</div >
				</div >
			</header >

		</>
	)
}

export default Header