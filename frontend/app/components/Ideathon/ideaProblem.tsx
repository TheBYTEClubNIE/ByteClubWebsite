import React from "react";
import { Dropdown } from "./IdeaDropdown";

const IdeaProblem = () => {
    return (
        <div className="container mx-auto px-20 pb-16 pt-24 bg-slate-900"  id="problems">
            <h1 className="w-[32rem] mb-4 text-center text-yellow-500 mx-auto text-2xl font-extrabold pb-2 md:text-5xl border-b-4 border-yellow-500 ">Problem Statement</h1>

            <div className="space-y-4">
                <Dropdown title="AI & Automation">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2 ">
                            <li>
                                Durable construction with premium materialsMany companies struggle with high employee attrition due to workload mismanagement. How can AI optimize task distribution to reduce burnout?
                            </li>
                            <li>
                                Email overload reduces productivity as employees spend hours managing their inboxes. How can AI help prioritize and summarize emails efficiently?
                            </li>
                            <li>
                                People waste time finding relevant information across multiple applications and documents. How can AI assist in faster data retrieval and contextual search?
                            </li>
                            <li>
                                Manual customer support often leads to slow response times and inconsistent service. How can AI automate support while maintaining human-like interaction?
                            </li>
                            <li>
                                Traditional recruitment processes are time-consuming and biased. How can AI improve fairness and efficiency in candidate screening?
                            </li>
                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="Fintech & Digital Payments">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>
                                Students and young professionals often struggle with managing their monthly expenses. How can technology assist in better budgeting and financial tracking?            </li>
                            <li>
                                Online transactions are vulnerable to fraud and identity theft. How can a software-based solution improve digital payment security?            </li>
                            <li>
                                Many small businesses face difficulties in managing invoices and payments. How can fintech solutions automate financial operations for them?
                            </li>
                            <li>
                                Splitting expenses among friends is often confusing and leads to disputes. How can a digital solution simplify group payments and settlements?
                            </li>
                            <li>
                                raditional credit scoring methods exclude many potential borrowers. How can technology create an alternative, fairer credit evaluation system?            </li>
                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="HealthTech & Wellbeing">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>Many people struggle with following prescribed medication schedules. How can technology help improve medication adherence?</li>
                            <li>Students and working professionals experience high stress and anxiety. How can digital tools help track and manage mental well-being?</li>
                            <li>In rural areas, access to doctors is limited. How can software bridge the gap and provide remote healthcare assistance?</li>
                            <li>Medical records are often scattered across different hospitals and clinics. How can a unified digital system enhance patient record management?</li>
                            <li>Poor posture while using digital devices leads to long-term health issues. How can technology help users maintain better posture?</li>
                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="Cybersecurity & Privacy">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>Fake news and misinformation spread rapidly on social media. How can technology detect and prevent the spread of false information?</li>
                            <li>Users often unknowingly share excessive personal data with websites and apps. How can software help individuals control their online privacy?</li>
                            <li>Phishing attacks are becoming more sophisticated, tricking users into revealing sensitive information. How can technology detect and prevent phishing attempts?</li>
                            <li>Many people reuse weak passwords, making them vulnerable to hacks. How can a software solution encourage better password habits without compromising convenience?</li>
                            <li>Data breaches expose user information stored on online platforms. How can technology improve the security of personal data in cloud storage?</li>

                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="EdTech & Learning">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>Students have different learning paces, but traditional education follows a one-size-fits-all model. How can technology enable personalized learning experiences?</li>
                            <li>Many students struggle with note-taking and summarization of long lectures. How can software assist in generating structured study notes?</li>
                            <li>Language barriers prevent many students from accessing quality education. How can technology improve multilingual learning support?</li>
                            <li>Remote learning often leads to reduced engagement and participation. How can digital tools make online education more interactive and immersive?</li>
                            <li>Many students lack access to mentorship and career guidance. How can a digital solution connect learners with industry experts for guidance?</li>

                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="E-Commerce & Retail Tech">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>Online shoppers often struggle with finding the best deals across multiple platforms. How can technology simplify price comparisons?</li>
                            <li>Returns and refunds in e-commerce cause frustration for both customers and businesses. How can software streamline the return process efficiently?</li>
                            <li>Counterfeit products are a major issue in online marketplaces. How can technology help verify product authenticity?</li>
                            <li>Customers abandon carts due to lack of personalized recommendations. How can AI improve e-commerce personalization?</li>
                            <li>Small businesses struggle to compete with large e-commerce platforms. How can technology help them increase visibility and reach customers more effectively?</li>
                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title=" Content Creation & Social Media">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>Digital content creators face challenges in generating unique, engaging content consistently. How can AI assist in the content creation process?</li>
                            <li>Online hate speech and toxic comments are increasing. How can technology detect and reduce harmful interactions on social media?</li>
                            <li>Video editing requires technical skills and consumes time. How can AI simplify video editing for content creators?</li>
                            <li>Fake profiles and bot accounts manipulate engagement on social media. How can technology detect and eliminate fake accounts?</li>
                            <li>Social media addiction is a growing concern. How can digital tools encourage healthier social media usage habits?</li>

                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="Gaming & Interactive Media">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>Online multiplayer games often suffer from toxic behavior and harassment. How can technology create a safer gaming environment?</li>
                            <li>Gamers face long matchmaking times in online multiplayer games. How can software optimize matchmaking for better player experience?</li>
                            <li>Players with disabilities find it challenging to enjoy video games due to accessibility barriers. How can technology make gaming more inclusive?</li>
                            <li>Cheating in online games ruins fair competition. How can AI help detect and prevent in-game cheating?</li>
                            <li>In esports, analyzing gameplay for improvement is complex. How can software provide automated performance analysis for competitive gamers?</li>

                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="SaaS & Productivity Tools">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>Employees waste time searching for documents and emails across multiple platforms. How can software improve information retrieval and organization?</li>
                            <li>Task and project management tools often overwhelm users with complex interfaces. How can a digital solution make task tracking more intuitive and user-friendly?</li>
                            <li>Team communication across different time zones is challenging. How can technology enhance asynchronous collaboration?</li>
                            <li>Keeping track of multiple deadlines leads to stress and missed tasks. How can software automate and optimize deadline management?</li>
                            <li>People struggle with maintaining work-life balance due to poor time management. How can technology help users create healthier schedules?</li>

                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="DevOps & Cloud Computing">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li>Cloud computing costs often escalate due to inefficient resource usage. How can software optimize cloud expenses dynamically?</li>
                            <li>Debugging and fixing system failures in large applications takes too much time. How can technology assist in faster error detection and resolution?</li>
                            <li>Deployment failures in software development lead to downtime. How can an intelligent monitoring system improve deployment success rates?</li>
                            <li>Cyberattacks on cloud servers cause major data losses. How can security solutions enhance cloud infrastructure protection?</li>
                            <li>Developers often struggle with managing different versions of APIs. How can software improve API version control and compatibility?</li>

                        </ul>
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default IdeaProblem
