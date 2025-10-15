import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="/">
                    Home 
                    {/* <i className="fa-solid fa-angle-down" /> */}
                </Link>
                        {/* <div className="tp-submenu">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="all-images-menu">
                                        <div className="homemenu-thumb">
                                            <div className="img1">
                                                <img src="assets/img/demo/demo1.png" alt="" />
                                            </div>
                                            <div className="homemenu-btn">
                                                <Link className="header-btn1" href="/">
                                                    Multi Page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                                <div className="space16" />
                                                <Link className="header-btn1" href="/single-index1">
                                                    view page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                            <Link href="/" className="bottom-heading">
                                                Home V1
                                            </Link>
                                        </div>
                                        <div className="homemenu-thumb">
                                            <div className="img1">
                                                <img src="assets/img/demo/demo2.png" alt="" />
                                            </div>
                                            <div className="homemenu-btn">
                                                <Link className="header-btn1" href="/index2">
                                                    Multi Page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                                <div className="space16" />
                                                <Link className="header-btn1" href="/single-index2">
                                                    One page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                            <Link href="/index2" className="bottom-heading">
                                                Home V2
                                            </Link>
                                        </div>
                                        <div className="homemenu-thumb">
                                            <div className="img1">
                                                <img src="assets/img/demo/demo3.png" alt="" />
                                            </div>
                                            <div className="homemenu-btn">
                                                <Link className="header-btn1" href="/index3">
                                                    Multi Page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                                <div className="space16" />
                                                <Link className="header-btn1" href="/single-index3">
                                                    One page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                            <Link href="/index3" className="bottom-heading">
                                                Home V3
                                            </Link>
                                        </div>
                                        <div className="homemenu-thumb">
                                            <div className="img1">
                                                <img src="assets/img/demo/demo4.png" alt="" />
                                            </div>
                                            <div className="homemenu-btn">
                                                <Link className="header-btn1" href="/index4">
                                                    Multi Page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                                <div className="space16" />
                                                <Link className="header-btn1" href="/single-index4">
                                                    One page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                            <Link href="/index4" className="bottom-heading">
                                                Home V4
                                            </Link>
                                        </div>
                                        <div className="homemenu-thumb" style={{ margin: "0 0 20px 0" }}>
                                            <div className="img1">
                                                <img src="assets/img/demo/demo5.png" alt="" />
                                            </div>
                                            <div className="homemenu-btn">
                                                <Link className="header-btn1" href="/index5">
                                                    Multi Page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                                <div className="space16" />
                                                <Link className="header-btn1" href="/single-index5">
                                                    One page <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                            <Link href="/index5" className="bottom-heading">
                                                Home V5
                                            </Link>
                                        </div>
                                    </div>
                                        <div className="all-images-menu">
                                            <div className="homemenu-thumb">
                                                <div className="img1">
                                                    <img src="assets/img/demo/demo6.png" alt="" />
                                                </div>
                                                <div className="homemenu-btn">
                                                    <Link className="header-btn1" href="/index6">
                                                        Multi Page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                    <div className="space16" />
                                                    <Link className="header-btn1" href="/single-index6">
                                                        One page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                </div>
                                                <Link href="/index6" className="bottom-heading">
                                                    Home V6
                                                </Link>
                                            </div>
                                            <div className="homemenu-thumb">
                                                <div className="img1">
                                                    <img src="assets/img/demo/demo7.png" alt="" />
                                                </div>
                                                <div className="homemenu-btn">
                                                    <Link className="header-btn1" href="/index7">
                                                        Multi Page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                    <div className="space16" />
                                                    <Link className="header-btn1" href="/single-index7">
                                                        One page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                </div>
                                                <Link href="/index7" className="bottom-heading">
                                                    Home V7
                                                </Link>
                                            </div>
                                            <div className="homemenu-thumb">
                                                <div className="img1">
                                                    <img src="assets/img/demo/demo8.png" alt="" />
                                                </div>
                                                <div className="homemenu-btn">
                                                    <Link className="header-btn1" href="/index8">
                                                        Multi Page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                    <div className="space16" />
                                                    <Link className="header-btn1" href="/single-index8">
                                                        One page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                </div>
                                                <Link href="/index8" className="bottom-heading">
                                                    Home V8
                                                </Link>
                                            </div>
                                            <div className="homemenu-thumb">
                                                <div className="img1">
                                                    <img src="assets/img/demo/demo9.png" alt="" />
                                                </div>
                                                <div className="homemenu-btn">
                                                    <Link className="header-btn1" href="/index9">
                                                        Multi Page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                    <div className="space16" />
                                                    <Link className="header-btn1" href="/single-index9">
                                                        One page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                </div>
                                                <Link href="/index9" className="bottom-heading">
                                                    Home V9
                                                </Link>
                                            </div>
                                            <div className="homemenu-thumb" style={{ margin: "0 0 20px 0" }}>
                                                <div className="img1">
                                                    <img src="assets/img/demo/demo10.png" alt="" />
                                                </div>
                                                <div className="homemenu-btn">
                                                    <Link className="header-btn1" href="/index10">
                                                        Multi Page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                    <div className="space16" />
                                                    <Link className="header-btn1" href="/single-index10">
                                                        One page <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                </div>
                                                <Link href="/index10" className="bottom-heading">
                                                    Home V10
                                                </Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div> */}
            </li>
            <li>
                <Link href="/about">Company</Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="/services" className="main1">
                    Services <i className="fa-solid fa-angle-down" />
                </Link>
                {/* <ul>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                    <li className="has-dropdown has-dropdown1">
                        <Link href="/service-details" className="main">
                            Service Detials
                            <span>
                                <i className="fa-solid fa-angle-right" />
                            </span>
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/service-details-left">Details Left</Link>
                            </li>
                            <li>
                                <Link href="/service-details-right">Details Right</Link>
                            </li>
                            <li>
                                <Link href="/service-details">Single Details</Link>
                            </li>
                        </ul>
                    </li>
                </ul> */}
                 <div className="mega-menu-all">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mega-menu-single dis1">
                                <h3>Our Services</h3>
                                <ul>
                                    <li>
                                        <Link href="/financial-services-cloud">Financial</Link>
                                    </li>
                                    <li>
                                        <Link href="/agentforce-&-ai">Agentforce</Link>
                                    </li>
                                    <li>
                                        <Link href="/error">Education</Link>
                                    </li>
                                    <li>
                                        <Link href="/error">Customer 360</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-md-3">
                            <div className="mega-menu-single">
                                <h3>News / Blog</h3>
                                <ul>
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details-left">Details Left</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details-right">Details Right</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details">Single Details</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <div className="col-md-3">
                            <div className="mega-menu-single">
                                <h3>Page's</h3>
                                <ul>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/team">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial">Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link href="/error">ERROR 404</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <div className="col-md-3">
                            <div className="mega-menu-single">
                                <h3>Our Project's</h3>
                                <ul>
                                    <li>
                                        <Link href="/project">Project</Link>
                                    </li>
                                    <li>
                                        <Link href="/project-details-left">Details Left</Link>
                                    </li>
                                    <li>
                                        <Link href="/project-details-right">Details Right</Link>
                                    </li>
                                    <li>
                                        <Link href="/project-details">Single Details</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </li>
            {/* <li className="dropdown-menu-parrent">
                <Link href="/error" className="main1">
                    Product 
                    <i className="fa-solid fa-angle-down" />
                </Link> */}
                {/* <div className="mega-menu-all">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mega-menu-single dis1">
                                <h3>Our Services</h3>
                                <ul>
                                    <li>
                                        <Link href="/service">Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details-left">Details Left</Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details-right">Details Right</Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">Single Details</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mega-menu-single">
                                <h3>News / Blog</h3>
                                <ul>
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details-left">Details Left</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details-right">Details Right</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-details">Single Details</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mega-menu-single">
                                <h3>Page's</h3>
                                <ul>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/team">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial">Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link href="/error">ERROR 404</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mega-menu-single">
                                <h3>Our Project's</h3>
                                <ul>
                                    <li>
                                        <Link href="/project">Project</Link>
                                    </li>
                                    <li>
                                        <Link href="/project-details-left">Details Left</Link>
                                    </li>
                                    <li>
                                        <Link href="/project-details-right">Details Right</Link>
                                    </li>
                                    <li>
                                        <Link href="/project-details">Single Details</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </li> */}
            <li className="dropdown-menu-parrent">
                <Link href="#" className="main1">
                    Blog <i className="fa-solid fa-angle-down" />
                </Link>
                
                <ul>
                    <li>
                        <Link href="/blog">Financial Services Cloud</Link>
                    </li>
                    <li>
                        <Link href="/blog">Configuring Custom Domains in Salesforce</Link>
                    </li>
                    <li>
                        <Link href="/blog">Omniscript & Data Mapper and IP</Link>
                    </li>
                </ul>

                    {/* <li className="has-dropdown has-dropdown1">
                        <Link href="/blog-details" className="main">
                            Blog Detials
                            <span>
                                <i className="fa-solid fa-angle-right" />
                            </span>
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/blog-details-left">Details Left</Link>
                            </li>
                            <li>
                                <Link href="/blog-details-right">Details Right</Link>
                            </li>
                            <li>
                                <Link href="/blog-details">Single Details</Link>
                            </li>
                        </ul>
                    </li> */}
                {/* </ul> */}
            </li>
            <li className="dropdown-menu-parrent">
                <Link className="main1" href="/contact">
                    Contact Us 
                </Link>

            </li>
        </ul>
    );
}
