import React from "react";
import career from "./HirringProcess.module.css";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import { HirringJdsCareer } from "../HirringJdsCareer/HirringJdsCareer";


export const HirringProcess = () => {
  return (
    <>
      <div className={career.hirringProcessMain}>
        <div className={career.hirringHeading}>
            <h2>Hirring Process</h2>
        </div>
        <div className={career.hirringProcessImage}>
            <Image
                src={"/Images/careerPhotos/hirring.png"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
        {/* <div className={career.hirringProcessButtons}>
            <div className={career.hirringProcessButtons1}>
                <div className={career.hirringbuttonImage1}>
                <Image
                    src={"/Images/careerPhotos/logo1.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
                </div>
                <div className={career.hirringButtonText}>
                    <h6>
                        Entry level
                    </h6>
                    <p>
                        Hirring
                    </p>
                </div>
            </div>
            <div className={career.hirringProcessButtons2}>
                <div className={career.hirringbuttonImage2}>
                <Image
                    src={"/Images/careerPhotos/logo2.png"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
                </div>
                <div className={career.hirringButtonText2}>
                    <h6>
                        Experienced level
                    </h6>
                    <p>
                        Hirring
                    </p>
                </div>
            </div>
        </div> */}

        <div className={career.hirringmaincontainer}>
                 <HirringJdsCareer/>
                {/* <div className={career.hirringdropdownmaincontainer1}>
                    <Accordion className={career.hirringdropdowncontextouter}>
                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="0">
                            <Accordion.Header className={career.hirringdropdownDivContext}
                            ><h6>Software Engineer</h6>  </Accordion.Header>
                            <Accordion.Body className={career.hirringdropdowncontext}
                            >
                                <div className={career.hirringdropdownmaincontainer1}>
                    <Accordion className={career.hirringdropdowncontextouter}>
                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="0">
                            <Accordion.Header className={career.hirringdropdownDivContext}
                            ><h6>PHP Developer</h6>  </Accordion.Header>
                            <Accordion.Body className={career.hirringdropdowncontext}
                            >
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Laravel Framework, PHP</p>

                                <h5>Job Description</h5>
                                <p>-Knowledge of Laravel - Understanding the fully synchronous behaviour of PHP - Understanding of MVC design patterns - Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3 - Knowledge of MySQL - Knowledge of object-oriented PHP programming - Understanding of Micro Services and Restful APIs - Creating database schemas that represent and support business processes - Familiarity with SQL (MySQL) databases and their declarative query languages</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="1">
                            <Accordion.Header><h6>Business Analyst</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p> New Business Development Elance, Desk, Freelancing, Bidding, Presales, Cilent communication.</p>

                                <h5>Job Description</h5>
                                <ul>
                                    <li>E-bidding on Upwork and Freelancers, client communication, project finalizing and final delivery.</li>
                                    <li>Communication between the Client and the Technical teams.</li>
                                    <li>Generating Revenue & projects and closing deals with International Clients.</li>
                                    <li>Assists in enforcement of project deadlines and schedules.</li>
                                    <li>Quickly understands the business issues and data challenges of client’s organization and industry.</li>
                                    <li>Identifies client organizations strengths and weaknesses and suggests areas of improvement.</li>
                                    <li>Technical Recommendation and Testing</li>
                                    <li>Excellent verbal and written communication</li>
                                </ul>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="2">
                            <Accordion.Header> <h6>React Native</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Hybrid App development, Angular JS, React Native APP</p>

                                <h5>Job Description</h5>
                                <p>Job Requirements: 1. Good knowledge of. Hybrid App development, 2. Good understanding Angular JS, React Native APP,Concepts. 3. Knowledge of databases and database concepts. 4. Should have Analytical and problem-solving skills. 5. Must be a team player, keen to learn, posses a good attitude and be self-discipline Responsibilities:- 1. Developing websites,can work individual on React, 2. Developing websites using existing CMS solutions 3. have good knowledge of JS and Hybrid app development 4. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="3">
                            <Accordion.Header><h6>Mean Stack Developer</h6> </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Node.js, Angular.js, MongoDB, MySQL, HTML5 and CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Demonstrated exposure through projects: Html, CSS, Javascript, jQuery, MongoDb, Express, Angular ,Node Js or any other node framework. 2. Knowledge of Node API and Angular, Node Js process manager, Node Js test framework. 5. At least 1 full stacks experience across the whole product life-cycle, preferably in small team size, which is currently in production. 6. Good to have: UX/UI design experience. Responsibilities:- 1. Participate actively in all phases of the rest api development in Node and frontend development in Angular. 2. implementing mobile responsive design with rest api. 3. Code maintenance and testing. 4. Good team handling skills with technical coaching and mentoring. 5. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="4">
                            <Accordion.Header><h6>Andriod App Developers</h6> 
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Android SDK, Mobile Development , Android, XML SQL ,ArchitectureTrend,Analysis Interactive application development , Ajax, Java.</p>

                                <h5>Job Description</h5>
                                <p>1. Years of experience are required in Android Application Development. 2. Candidate should be expertise in Android Development. 3. Candidate should have knowledge in Mobile application development and SQLite, Web Services. 4. Candidate can develop Mobile Apps and well-versed with the Android SDK. 5. Strong knowledge of Android UI design principles, patterns, and best practices 6. Good communication skill. Responsibilities. 1. Design and build advanced applications for the Android platform 2. Knowledge of networking in android with REST apis and JSON parsing 3. Knowledge of latest respective SDKs 4. Collaborate with cross-functional teams to define, design, and ship new features. 5. Work with outside data sources and APIs 6. Unit-test code for robustness, including edge cases, usability, and general reliability. 7. Work on bug fixing and improving application performance. 8. Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="5">
                            <Accordion.Header><h6>UI/UX Designer</h6>   </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>HTML, Dreamweaver, CSS, Photoshop, Javascript, JQuery Web Designing, Web Technologies, HTML5, CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Should have 1+ year’s exp. in Photoshop, Dreamweaver HTML, CSS, HTML5, JavaScript/Jquery, bootstrap. 2. Passion and enthusiasm for design, with a creative flair. 3. Flexible approach when working in a team. 4. being open to feedback and willing to make changes to your designs. 5. Should have good communication skills</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        
                    </Accordion>
                                </div>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="1">
                            <Accordion.Header><h6>SEO</h6>  </Accordion.Header>
                            <Accordion.Body>
                            <div className={career.hirringdropdownmaincontainer1}>
                    <Accordion className={career.hirringdropdowncontextouter}>
                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="0">
                            <Accordion.Header className={career.hirringdropdownDivContext}
                            ><h6>PHP Developer</h6>  </Accordion.Header>
                            <Accordion.Body className={career.hirringdropdowncontext}
                            >
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Laravel Framework, PHP</p>

                                <h5>Job Description</h5>
                                <p>-Knowledge of Laravel - Understanding the fully synchronous behaviour of PHP - Understanding of MVC design patterns - Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3 - Knowledge of MySQL - Knowledge of object-oriented PHP programming - Understanding of Micro Services and Restful APIs - Creating database schemas that represent and support business processes - Familiarity with SQL (MySQL) databases and their declarative query languages</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="1">
                            <Accordion.Header><h6>Business Analyst</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p> New Business Development Elance, Desk, Freelancing, Bidding, Presales, Cilent communication.</p>

                                <h5>Job Description</h5>
                                <ul>
                                    <li>E-bidding on Upwork and Freelancers, client communication, project finalizing and final delivery.</li>
                                    <li>Communication between the Client and the Technical teams.</li>
                                    <li>Generating Revenue & projects and closing deals with International Clients.</li>
                                    <li>Assists in enforcement of project deadlines and schedules.</li>
                                    <li>Quickly understands the business issues and data challenges of client’s organization and industry.</li>
                                    <li>Identifies client organizations strengths and weaknesses and suggests areas of improvement.</li>
                                    <li>Technical Recommendation and Testing</li>
                                    <li>Excellent verbal and written communication</li>
                                </ul>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="2">
                            <Accordion.Header> <h6>React Native</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Hybrid App development, Angular JS, React Native APP</p>

                                <h5>Job Description</h5>
                                <p>Job Requirements: 1. Good knowledge of. Hybrid App development, 2. Good understanding Angular JS, React Native APP,Concepts. 3. Knowledge of databases and database concepts. 4. Should have Analytical and problem-solving skills. 5. Must be a team player, keen to learn, posses a good attitude and be self-discipline Responsibilities:- 1. Developing websites,can work individual on React, 2. Developing websites using existing CMS solutions 3. have good knowledge of JS and Hybrid app development 4. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="3">
                            <Accordion.Header><h6>Mean Stack Developer</h6> </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Node.js, Angular.js, MongoDB, MySQL, HTML5 and CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Demonstrated exposure through projects: Html, CSS, Javascript, jQuery, MongoDb, Express, Angular ,Node Js or any other node framework. 2. Knowledge of Node API and Angular, Node Js process manager, Node Js test framework. 5. At least 1 full stacks experience across the whole product life-cycle, preferably in small team size, which is currently in production. 6. Good to have: UX/UI design experience. Responsibilities:- 1. Participate actively in all phases of the rest api development in Node and frontend development in Angular. 2. implementing mobile responsive design with rest api. 3. Code maintenance and testing. 4. Good team handling skills with technical coaching and mentoring. 5. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="4">
                            <Accordion.Header><h6>Andriod App Developers</h6> 
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Android SDK, Mobile Development , Android, XML SQL ,ArchitectureTrend,Analysis Interactive application development , Ajax, Java.</p>

                                <h5>Job Description</h5>
                                <p>1. Years of experience are required in Android Application Development. 2. Candidate should be expertise in Android Development. 3. Candidate should have knowledge in Mobile application development and SQLite, Web Services. 4. Candidate can develop Mobile Apps and well-versed with the Android SDK. 5. Strong knowledge of Android UI design principles, patterns, and best practices 6. Good communication skill. Responsibilities. 1. Design and build advanced applications for the Android platform 2. Knowledge of networking in android with REST apis and JSON parsing 3. Knowledge of latest respective SDKs 4. Collaborate with cross-functional teams to define, design, and ship new features. 5. Work with outside data sources and APIs 6. Unit-test code for robustness, including edge cases, usability, and general reliability. 7. Work on bug fixing and improving application performance. 8. Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="5">
                            <Accordion.Header><h6>UI/UX Designer</h6>   </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>HTML, Dreamweaver, CSS, Photoshop, Javascript, JQuery Web Designing, Web Technologies, HTML5, CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Should have 1+ year’s exp. in Photoshop, Dreamweaver HTML, CSS, HTML5, JavaScript/Jquery, bootstrap. 2. Passion and enthusiasm for design, with a creative flair. 3. Flexible approach when working in a team. 4. being open to feedback and willing to make changes to your designs. 5. Should have good communication skills</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        
                    </Accordion>
                            </div>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="2">
                            <Accordion.Header> <h6>HR Executive</h6>  </Accordion.Header>
                            <Accordion.Body>
                            <div className={career.hirringdropdownmaincontainer1}>
                    <Accordion className={career.hirringdropdowncontextouter}>
                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="0">
                            <Accordion.Header className={career.hirringdropdownDivContext}
                            ><h6>PHP Developer</h6>  </Accordion.Header>
                            <Accordion.Body className={career.hirringdropdowncontext}
                            >
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Laravel Framework, PHP</p>

                                <h5>Job Description</h5>
                                <p>-Knowledge of Laravel - Understanding the fully synchronous behaviour of PHP - Understanding of MVC design patterns - Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3 - Knowledge of MySQL - Knowledge of object-oriented PHP programming - Understanding of Micro Services and Restful APIs - Creating database schemas that represent and support business processes - Familiarity with SQL (MySQL) databases and their declarative query languages</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="1">
                            <Accordion.Header><h6>Business Analyst</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p> New Business Development Elance, Desk, Freelancing, Bidding, Presales, Cilent communication.</p>

                                <h5>Job Description</h5>
                                <ul>
                                    <li>E-bidding on Upwork and Freelancers, client communication, project finalizing and final delivery.</li>
                                    <li>Communication between the Client and the Technical teams.</li>
                                    <li>Generating Revenue & projects and closing deals with International Clients.</li>
                                    <li>Assists in enforcement of project deadlines and schedules.</li>
                                    <li>Quickly understands the business issues and data challenges of client’s organization and industry.</li>
                                    <li>Identifies client organizations strengths and weaknesses and suggests areas of improvement.</li>
                                    <li>Technical Recommendation and Testing</li>
                                    <li>Excellent verbal and written communication</li>
                                </ul>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="2">
                            <Accordion.Header> <h6>React Native</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Hybrid App development, Angular JS, React Native APP</p>

                                <h5>Job Description</h5>
                                <p>Job Requirements: 1. Good knowledge of. Hybrid App development, 2. Good understanding Angular JS, React Native APP,Concepts. 3. Knowledge of databases and database concepts. 4. Should have Analytical and problem-solving skills. 5. Must be a team player, keen to learn, posses a good attitude and be self-discipline Responsibilities:- 1. Developing websites,can work individual on React, 2. Developing websites using existing CMS solutions 3. have good knowledge of JS and Hybrid app development 4. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="3">
                            <Accordion.Header><h6>Mean Stack Developer</h6> </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Node.js, Angular.js, MongoDB, MySQL, HTML5 and CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Demonstrated exposure through projects: Html, CSS, Javascript, jQuery, MongoDb, Express, Angular ,Node Js or any other node framework. 2. Knowledge of Node API and Angular, Node Js process manager, Node Js test framework. 5. At least 1 full stacks experience across the whole product life-cycle, preferably in small team size, which is currently in production. 6. Good to have: UX/UI design experience. Responsibilities:- 1. Participate actively in all phases of the rest api development in Node and frontend development in Angular. 2. implementing mobile responsive design with rest api. 3. Code maintenance and testing. 4. Good team handling skills with technical coaching and mentoring. 5. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="4">
                            <Accordion.Header><h6>Andriod App Developers</h6> 
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Android SDK, Mobile Development , Android, XML SQL ,ArchitectureTrend,Analysis Interactive application development , Ajax, Java.</p>

                                <h5>Job Description</h5>
                                <p>1. Years of experience are required in Android Application Development. 2. Candidate should be expertise in Android Development. 3. Candidate should have knowledge in Mobile application development and SQLite, Web Services. 4. Candidate can develop Mobile Apps and well-versed with the Android SDK. 5. Strong knowledge of Android UI design principles, patterns, and best practices 6. Good communication skill. Responsibilities. 1. Design and build advanced applications for the Android platform 2. Knowledge of networking in android with REST apis and JSON parsing 3. Knowledge of latest respective SDKs 4. Collaborate with cross-functional teams to define, design, and ship new features. 5. Work with outside data sources and APIs 6. Unit-test code for robustness, including edge cases, usability, and general reliability. 7. Work on bug fixing and improving application performance. 8. Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="5">
                            <Accordion.Header><h6>UI/UX Designer</h6>   </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>HTML, Dreamweaver, CSS, Photoshop, Javascript, JQuery Web Designing, Web Technologies, HTML5, CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Should have 1+ year’s exp. in Photoshop, Dreamweaver HTML, CSS, HTML5, JavaScript/Jquery, bootstrap. 2. Passion and enthusiasm for design, with a creative flair. 3. Flexible approach when working in a team. 4. being open to feedback and willing to make changes to your designs. 5. Should have good communication skills</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        
                    </Accordion>
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="3">
                            <Accordion.Header><h6>Talent Execution Team</h6> </Accordion.Header>
                            <Accordion.Body>
                            <div className={career.hirringdropdownmaincontainer1}>
                    <Accordion className={career.hirringdropdowncontextouter}>
                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="0">
                            <Accordion.Header className={career.hirringdropdownDivContext}
                            ><h6>PHP Developer</h6>  </Accordion.Header>
                            <Accordion.Body className={career.hirringdropdowncontext}
                            >
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Laravel Framework, PHP</p>

                                <h5>Job Description</h5>
                                <p>-Knowledge of Laravel - Understanding the fully synchronous behaviour of PHP - Understanding of MVC design patterns - Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3 - Knowledge of MySQL - Knowledge of object-oriented PHP programming - Understanding of Micro Services and Restful APIs - Creating database schemas that represent and support business processes - Familiarity with SQL (MySQL) databases and their declarative query languages</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="1">
                            <Accordion.Header><h6>Business Analyst</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p> New Business Development Elance, Desk, Freelancing, Bidding, Presales, Cilent communication.</p>

                                <h5>Job Description</h5>
                                <ul>
                                    <li>E-bidding on Upwork and Freelancers, client communication, project finalizing and final delivery.</li>
                                    <li>Communication between the Client and the Technical teams.</li>
                                    <li>Generating Revenue & projects and closing deals with International Clients.</li>
                                    <li>Assists in enforcement of project deadlines and schedules.</li>
                                    <li>Quickly understands the business issues and data challenges of client’s organization and industry.</li>
                                    <li>Identifies client organizations strengths and weaknesses and suggests areas of improvement.</li>
                                    <li>Technical Recommendation and Testing</li>
                                    <li>Excellent verbal and written communication</li>
                                </ul>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="2">
                            <Accordion.Header> <h6>React Native</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Hybrid App development, Angular JS, React Native APP</p>

                                <h5>Job Description</h5>
                                <p>Job Requirements: 1. Good knowledge of. Hybrid App development, 2. Good understanding Angular JS, React Native APP,Concepts. 3. Knowledge of databases and database concepts. 4. Should have Analytical and problem-solving skills. 5. Must be a team player, keen to learn, posses a good attitude and be self-discipline Responsibilities:- 1. Developing websites,can work individual on React, 2. Developing websites using existing CMS solutions 3. have good knowledge of JS and Hybrid app development 4. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="3">
                            <Accordion.Header><h6>Mean Stack Developer</h6> </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Node.js, Angular.js, MongoDB, MySQL, HTML5 and CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Demonstrated exposure through projects: Html, CSS, Javascript, jQuery, MongoDb, Express, Angular ,Node Js or any other node framework. 2. Knowledge of Node API and Angular, Node Js process manager, Node Js test framework. 5. At least 1 full stacks experience across the whole product life-cycle, preferably in small team size, which is currently in production. 6. Good to have: UX/UI design experience. Responsibilities:- 1. Participate actively in all phases of the rest api development in Node and frontend development in Angular. 2. implementing mobile responsive design with rest api. 3. Code maintenance and testing. 4. Good team handling skills with technical coaching and mentoring. 5. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="4">
                            <Accordion.Header><h6>Andriod App Developers</h6> 
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Android SDK, Mobile Development , Android, XML SQL ,ArchitectureTrend,Analysis Interactive application development , Ajax, Java.</p>

                                <h5>Job Description</h5>
                                <p>1. Years of experience are required in Android Application Development. 2. Candidate should be expertise in Android Development. 3. Candidate should have knowledge in Mobile application development and SQLite, Web Services. 4. Candidate can develop Mobile Apps and well-versed with the Android SDK. 5. Strong knowledge of Android UI design principles, patterns, and best practices 6. Good communication skill. Responsibilities. 1. Design and build advanced applications for the Android platform 2. Knowledge of networking in android with REST apis and JSON parsing 3. Knowledge of latest respective SDKs 4. Collaborate with cross-functional teams to define, design, and ship new features. 5. Work with outside data sources and APIs 6. Unit-test code for robustness, including edge cases, usability, and general reliability. 7. Work on bug fixing and improving application performance. 8. Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="5">
                            <Accordion.Header><h6>UI/UX Designer</h6>   </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>HTML, Dreamweaver, CSS, Photoshop, Javascript, JQuery Web Designing, Web Technologies, HTML5, CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Should have 1+ year’s exp. in Photoshop, Dreamweaver HTML, CSS, HTML5, JavaScript/Jquery, bootstrap. 2. Passion and enthusiasm for design, with a creative flair. 3. Flexible approach when working in a team. 4. being open to feedback and willing to make changes to your designs. 5. Should have good communication skills</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        
                    </Accordion>
                            </div>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="5">
                            <Accordion.Header><h6>UI/UX Designer</h6>   </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>HTML, Dreamweaver, CSS, Photoshop, Javascript, JQuery Web Designing, Web Technologies, HTML5, CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Should have 1+ year’s exp. in Photoshop, Dreamweaver HTML, CSS, HTML5, JavaScript/Jquery, bootstrap. 2. Passion and enthusiasm for design, with a creative flair. 3. Flexible approach when working in a team. 4. being open to feedback and willing to make changes to your designs. 5. Should have good communication skills</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        
                    </Accordion>
                </div> */}
                {/* <div className={career.hirringdropdownmaincontainer1}>
                    <Accordion className={career.hirringdropdowncontextouter}>
                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="0">
                            <Accordion.Header className={career.hirringdropdownDivContext}
                            ><h6>PHP Developer</h6>  </Accordion.Header>
                            <Accordion.Body className={career.hirringdropdowncontext}
                            >
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Laravel Framework, PHP</p>

                                <h5>Job Description</h5>
                                <p>-Knowledge of Laravel - Understanding the fully synchronous behaviour of PHP - Understanding of MVC design patterns - Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3 - Knowledge of MySQL - Knowledge of object-oriented PHP programming - Understanding of Micro Services and Restful APIs - Creating database schemas that represent and support business processes - Familiarity with SQL (MySQL) databases and their declarative query languages</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="1">
                            <Accordion.Header><h6>Business Analyst</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p> New Business Development Elance, Desk, Freelancing, Bidding, Presales, Cilent communication.</p>

                                <h5>Job Description</h5>
                                <ul>
                                    <li>E-bidding on Upwork and Freelancers, client communication, project finalizing and final delivery.</li>
                                    <li>Communication between the Client and the Technical teams.</li>
                                    <li>Generating Revenue & projects and closing deals with International Clients.</li>
                                    <li>Assists in enforcement of project deadlines and schedules.</li>
                                    <li>Quickly understands the business issues and data challenges of client’s organization and industry.</li>
                                    <li>Identifies client organizations strengths and weaknesses and suggests areas of improvement.</li>
                                    <li>Technical Recommendation and Testing</li>
                                    <li>Excellent verbal and written communication</li>
                                </ul>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="2">
                            <Accordion.Header> <h6>React Native</h6>  </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Hybrid App development, Angular JS, React Native APP</p>

                                <h5>Job Description</h5>
                                <p>Job Requirements: 1. Good knowledge of. Hybrid App development, 2. Good understanding Angular JS, React Native APP,Concepts. 3. Knowledge of databases and database concepts. 4. Should have Analytical and problem-solving skills. 5. Must be a team player, keen to learn, posses a good attitude and be self-discipline Responsibilities:- 1. Developing websites,can work individual on React, 2. Developing websites using existing CMS solutions 3. have good knowledge of JS and Hybrid app development 4. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="3">
                            <Accordion.Header><h6>Mean Stack Developer</h6> </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Node.js, Angular.js, MongoDB, MySQL, HTML5 and CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Demonstrated exposure through projects: Html, CSS, Javascript, jQuery, MongoDb, Express, Angular ,Node Js or any other node framework. 2. Knowledge of Node API and Angular, Node Js process manager, Node Js test framework. 5. At least 1 full stacks experience across the whole product life-cycle, preferably in small team size, which is currently in production. 6. Good to have: UX/UI design experience. Responsibilities:- 1. Participate actively in all phases of the rest api development in Node and frontend development in Angular. 2. implementing mobile responsive design with rest api. 3. Code maintenance and testing. 4. Good team handling skills with technical coaching and mentoring. 5. Ability to work on multiple projects at the same time and complete tasks in a timely manner</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="4">
                            <Accordion.Header><h6>Andriod App Developers</h6> 
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>Android SDK, Mobile Development , Android, XML SQL ,ArchitectureTrend,Analysis Interactive application development , Ajax, Java.</p>

                                <h5>Job Description</h5>
                                <p>1. Years of experience are required in Android Application Development. 2. Candidate should be expertise in Android Development. 3. Candidate should have knowledge in Mobile application development and SQLite, Web Services. 4. Candidate can develop Mobile Apps and well-versed with the Android SDK. 5. Strong knowledge of Android UI design principles, patterns, and best practices 6. Good communication skill. Responsibilities. 1. Design and build advanced applications for the Android platform 2. Knowledge of networking in android with REST apis and JSON parsing 3. Knowledge of latest respective SDKs 4. Collaborate with cross-functional teams to define, design, and ship new features. 5. Work with outside data sources and APIs 6. Unit-test code for robustness, including edge cases, usability, and general reliability. 7. Work on bug fixing and improving application performance. 8. Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="5">
                            <Accordion.Header><h6>UI/UX Designer</h6>   </Accordion.Header>
                            <Accordion.Body>
                                <h6>Position Number : 5</h6>
                                <h6>Experience : 1-2 Year</h6>
                                <h6>Loaction : Jaipur</h6>
                                
                                <h5>Skills & Experience Required:</h5>
                                <p>HTML, Dreamweaver, CSS, Photoshop, Javascript, JQuery Web Designing, Web Technologies, HTML5, CSS3</p>

                                <h5>Job Description</h5>
                                <p>1. Should have 1+ year’s exp. in Photoshop, Dreamweaver HTML, CSS, HTML5, JavaScript/Jquery, bootstrap. 2. Passion and enthusiasm for design, with a creative flair. 3. Flexible approach when working in a team. 4. being open to feedback and willing to make changes to your designs. 5. Should have good communication skills</p>

                            </Accordion.Body>
                        </Accordion.Item>

                        
                    </Accordion>
                </div> */}
                {/* <div className={career.hirringmaincontainer1}>
                    <div className={career.hirringouterDiv}>
                        <h4>Apply Now!</h4>
                        <input type="text" placeholder="Enter Your Name"/>
                        <input type="text" placeholder="Enter Email"/>
                        <input type="text" placeholder="Enter Phone number"/>
                        <input type="text" placeholder="Job Category"/>
                        <label>Experience</label>
                        <input type="number" placeholder="Year"/>
                        <input type="number" placeholder="Month"/>
                        <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                        <input type="file" className={career.hirringChooseFile}/>
                        <p>Please upload Only pdf,rtf, docx and doc files
                        <br/>Please upload CV.</p>
                        <button>Apply</button>
                    </div>
                </div> */}
        </div>

      </div>
    </>
  );
};
