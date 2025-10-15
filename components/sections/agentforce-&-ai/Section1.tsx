import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="details-sidebar">
                                <div className="details-box3">
                                    <h3>Our Services</h3>
                                    <div className="space10" />
                                    <ul className="service-list">
                                        <li>
                                            <Link href="#">
                                                Agentforce & AI
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/financial-services-cloud">
                                                Financial Services Cloud
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/error">
                                                Education Cloud
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/error">
                                                Salesforce Customer 360
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/error">
                                                OmniStudio Cloud
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-box-call">
                                    <h3>If You Need Any Help Contact With Us</h3>
                                    <div className="space10" />
                                    <Link href="tel:+919871717425" className="call-btn">
                                        <img src="assets/img/icons/details-call.png" alt="" /> +91 9871717425
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3>Download Brochure</h3>
                                    {/* <p>Join us on this journey as we share our expertise, ignite conversations</p> */}
                                    <div className="space10" />
                                    <Link href="#" className="download-btn1">
                                        <img src="assets/img/icons/download-icon.png" alt="" /> Pdf Download
                                    </Link>
                                    <Link href="#" className="download-btn2">
                                        <img src="assets/img/icons/download-icon.png" alt="" /> Pdf Download
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3>Follow Us</h3>
                                    <div className="space10" />
                                    <ul className="icons">
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-youtube" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-x-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-pinterest" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-area left-padding">
                                <article>
                                    <div className="heading1">
                                        <div className="image">
                                            <img src="assets/img/service/service-details-img1.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <h2>Agentforce & AI </h2>
                                        <div className="space16" />
                                        <p>Agentforce provides customer service agents with tools and real-time data to boost productivity, resolve issues, and offer personalized solutions.</p>
                                        <p>AI in Salesforce uses Einstein to automate manual tasks, provide better insights, forecast trends, and guide agents with smart suggestions to improve efficiency and customer satisfaction.</p>
                                        <div className="space30" />
                                        <h3>Benefits of Agentforce and AI in Salesforce</h3>
                                        <div className="space16" />
                                        <p>1. Improved Agent Productivity- Agents can access everything in one place to reduce the overall data handling time whether it is customer data, knowledge bases, or workflow.</p>
                                        <p>2. Enhanced Customer Experience- We provide personalized interaction that are powered by AI suggestions, and advanced analytics to create more meaning ful interactions.</p>
                                        <p>3. Faster Case Resolution- Automation tools are used to ensure all the cases are addressed on priority by the agents.</p>
                                        <p>4. Data-Driven Decisions- To help the managers observe performance and forecast customer needs accurately AI-driven tools are used.</p>
                                        <p>5. Seamless Collaboration- To help agents to share the best practices and work together in real-time integrated communication tools are used.</p>
                                        <p>6. Scalability- AI-powered solutions can help transform workload without any compromise in the service quality irrespective of the team size.</p>
                                        <div className="space30" />
                                        <h3>Why Choose CodM Software for Agentforce & AI Services?</h3>
                                        <div className="space16" />
                                        <p>1. Salesforce Expertise- We are a trusted Salesforce partner with certified experts who bring deep domain knowledge and technical expertise in implementing Service Cloud & Einstein AI.</p>
                                        <div className="space16" />
                                        <p>2. Customized Solutions- As per the unique industry-specific requirements, we provide customized Agentforce & AI tools, which ensure maximum impact & ROI.</p>
                                        <div className="space16" />
                                        <p>3. End-to-End Support- From strategy, implementation, training & support we provide support and guide you in every step of the journey.</p>
                                        <div className="space16" />
                                        <p>4. Proven Track Record- We have successfully delivered customer service solutions to our clients globally and helped them in improving efficiency and customer satisfaction.</p>
                                        <div className="space16" />
                                        <p>5. Security & Compliance- To ensure that the data and information of your customers is safe and secure, we follow best industry practices for data protection and regulatory compliance.</p>
                                        <div className="space16" />
                                        <p>6. Continuous Innovation- To ensure you stay ahead of the competition, we stay updated on the latest AI advancements and Salesforce features.</p>
                                    </div>
                                </article>
                                <div className="space30" />
                                <article>
                                    <div className="heading1">
                                        <h3>FAQ</h3>
                                        {/* <div className="space16" />
                                        <p>Our temp-to-hire programs offer the flexibility to assess candidates on the job before making a permanent hiring decision, minimizing risk &amp; ensuring a cultural fit.</p>
                                        <div className="space16" />
                                        <p>Our executive search services specialize in identifying and attracting top-level executives and leadership talent to drive your organization's success and growth.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img2.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Our direct hire solutions streamline the recruitment process, delivering qualified candidates directly to your organization</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img3.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Our temporary staffing services provide flexible workforce solutions to meet short-term staffing needs, whether for seasonal</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </article>
                                <div className="space20" />
                                <div className="faq-all-area">
                                    <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item active">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    What is the difference between Agentforce & AI in Salesforce?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Agentsforce aims on providing agents with tools, workflow, and data access to enhance productivity, while AI focuses on advanced algorithms to provide insights, forecasts, and automation to guide agents and enhance decision-making.</div>   
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Is technical knowledge required to use these tools?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">No. The Salesforce interface is user-friendly, and it requires minimal technical knowledge to guide agents using AI suggestions. We also provide training and overall support to ensure smooth adoption. </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Can AI in Salesforce replace human agents?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">TAI can enhance, not replace, human agents. It automates the monotonous work and provides meaningful insights, but it cannot replace the empathy and human judgment that are essential for customer interactions. </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                    How quickly can Agentforce & AI solutions be implemented?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Implementation time can vary depending upon the complexity of the business process and unique requirements. It can take anywhere from a few weeks to a few months, with CodM Software assisting in planning and execution. </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                    Is AI safe for handling sensitive customer information?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Yes. Salesforce’s Einstein AI follows strict data privacy protocols and encryption standards. CodM Software ensures that your deployment complies with industry regulations and security best practices. </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}
