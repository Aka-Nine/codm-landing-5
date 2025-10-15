import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====OUR MISSION AREA START=======*/}
            <div className="mission sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading1">
                                <span className="span"> Our Vision & Values</span>
                                <h2>In What We Believe</h2>
                                <div className="space16" />
                                <p> CodM Software is a Sliver Salesforce Consulting Partner committed to delivering quality services and achieving 100% customer satisfaction.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Our Mission</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>To overcome key business challenges by providing innovative business solutions that increase efficiency with our products, and execution excellence promoting Equality, Sustainability and Quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon2.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Our Vision</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>We strive to continuously work hard to make our customers satisfied with our innovative products and talented staff. With a dedicated team in our workforce, we are able to develop long-term and mutually beneficial relationships with our partners </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Core Values</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>E- Employee Centric </p>
                                    <p>N- Nurture</p>
                                    <p>E- Empathy</p>
                                    <p>R- Resourceful</p>
                                    <p>G- Goal Oriented</p>
                                    <p>Y- Yearn</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====OUR MISSION AREA END=======*/}
        </>
    );
}
