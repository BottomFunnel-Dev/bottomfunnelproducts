import React,{useState} from 'react';
import { Container } from "react-bootstrap";
import styles from "./HirringJdsCareer.module.css";
import Accordion from 'react-bootstrap/Accordion';

export const HirringJdsCareer = () => {

 const[showtab, setShowtab]= useState(1);
 const [countryid, setCountryid] = useState('');
 const [state, setState] = useState([]);
 const [stateid, setStateid] = useState('');
 const [counter, setCounter] = useState(0);

 const handletab = (e)=>{
  setShowtab(e);
    }


    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }

    const increase = () => {
    setCounter(count => count + 1);
  };

    const decrease = () => {
    setCounter(count => count - 1);
  };
    return(
<>
   <div className={styles.hirringJdsCareermainDiv}>
        
        <React.Fragment>
            
             <Container>
                <div className="row">
                    <div className="col-sm-12 bg-light"  id={styles.hirringJdsCareerChangemainDiv}>      
                        
                       {/* <div className={styles.testcontainer}></div>  */}
                        <ul class="nav nav-pills mb-3 mt-1"  role="tablist" id={styles.hirringJdsCareerbuttonouterDiv}>
                            <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv1}>
                                <button className= {showtab===1? "hirringJdsCareerHeadingButtons active": "hirringJdsCareerHeadingButtons" }  onClick={()=>handletab(1)}>Software Engineer</button>
                            </li>
                            <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv2}>
                                <button className={ showtab===2 ? "styles.hirringJdsCareerHeadingButtons active": "styles.hirringJdsCareerHeadingButtons"}  onClick={()=>handletab(2)}>Javascript Developer</button>
                            </li>

                            <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv3}>
                                <button className={ showtab===3 ? "hirringJdsCareerHeadingButtons active": "hirringJdsCareerHeadingButtons"}  onClick={()=>handletab(3)}>Cross Platform Developer</button>
                            </li>
                            <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv4}>
                                <button className= {showtab===4? "hirringJdsCareerHeadingButtons active": "hirringJdsCareerHeadingButtons" }  onClick={()=>handletab(4)}>Digital Marketing</button>
                            </li>
                            <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv5}>
                                <button className={ showtab===5 ? "hirringJdsCareerHeadingButtons active": "hirringJdsCareerHeadingButtons"}  onClick={()=>handletab(5)}>Hr and Sales Manager</button>
                            </li>


                        </ul>
                        <div class="tab-content text-dark" id="pills-tabContent">
                        
                        <div  className= { showtab===1 ? "tab-pane fade show active":"tab-pane fade show"} style={{textDecoration:"none",borderBottom:"none"}}> 
                                <div className={styles.hirringdropdownmaincontainer1} >
                                    <Accordion className={styles.hirringdropdowncontextouter}>
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}
                                            ><h6>PHP Developer</h6>  </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                            <Accordion.Header><h6>MERN Developer</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                            <Accordion.Header><h6>Andriod Developer</h6> </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Ruby Developers</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>Python Developer</h6>   </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="6">
                                            <Accordion.Header><h6>java Developer</h6>   </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="7">
                                            <Accordion.Header><h6>Kotlin Developer</h6>   </Accordion.Header>
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
                                        
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="8">
                                            <Accordion.Header><h6>C Developer</h6>   </Accordion.Header>
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

                                    <div className={styles.hirringmaincontainer1}>
                                    <div className={styles.hirringouterDiv}>
                                        <h4>Apply Now!</h4>
                                        <input type="text" placeholder="Enter Your Name"/>
                                        <input type="text" placeholder="Enter Email"/>
                                        <input type="text" placeholder="Enter Phone number"/>
                                        <input type="text" placeholder="Job Category"/>
                                        <label>Experience</label>
                                        <input type="number" placeholder="Year"/>
                                        <input type="number" placeholder="Month"/>
                                        <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                        <input type="file" className={styles.hirringChooseFile}/>
                                        <p>Please upload Only pdf,rtf, docx and doc files
                                        <br/>Please upload CV.</p>
                                        <button>Apply</button>
                                    </div>
                                </div>
                                </div>              
                        </div>

                        <div  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} style={{textDecoration:"none",borderBottom:"none"}} > 
                                
                        <div className={styles.hirringdropdownmaincontainer1} >
                                    <Accordion className={styles.hirringdropdowncontextouter}>
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}
                                            ><h6>Vue Js Developer</h6>  </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                            <Accordion.Header><h6>Next Js Developer</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                            <Accordion.Header> <h6>Nuxt Js</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                            <Accordion.Header><h6>Nest Js Developer</h6> </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>React Js Developers</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>Angular Developer</h6>   </Accordion.Header>
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
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>Ember Js Developer</h6>   </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>Swift Js Developer</h6>   </Accordion.Header>
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

                                    <div className={styles.hirringmaincontainer1}>
                                    <div className={styles.hirringouterDiv}>
                                        <h4>Apply Now!</h4>
                                        <input type="text" placeholder="Enter Your Name"/>
                                        <input type="text" placeholder="Enter Email"/>
                                        <input type="text" placeholder="Enter Phone number"/>
                                        <input type="text" placeholder="Job Category"/>
                                        <label>Experience</label>
                                        <input type="number" placeholder="Year"/>
                                        <input type="number" placeholder="Month"/>
                                        <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                        <input type="file" className={styles.hirringChooseFile}/>
                                        <p>Please upload Only pdf,rtf, docx and doc files
                                        <br/>Please upload CV.</p>
                                        <button>Apply</button>
                                    </div>
                                </div>
                                </div>
                                    
                        </div>

                        <div  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} style={{textDecoration:"none",borderBottom:"none"}} > 
                                    
                                <div className={styles.hirringdropdownmaincontainer1} >
                                    <Accordion className={styles.hirringdropdowncontextouter}>
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}
                                            ><h6>Angular Developer</h6>  </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                            <Accordion.Header><h6>Python Developer</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                            <Accordion.Header> <h6>Kotlin Native</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                            <Accordion.Header><h6>Dart Developer</h6> </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Objective-C Developers</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>Swift Developer</h6>   </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>JavaScript Developer</h6>   </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>C# Developer</h6>   </Accordion.Header>
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
                                        
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>Java Developer</h6>   </Accordion.Header>
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

                                    <div className={styles.hirringmaincontainer1}>
                                    <div className={styles.hirringouterDiv}>
                                        <h4>Apply Now!</h4>
                                        <input type="text" placeholder="Enter Your Name"/>
                                        <input type="text" placeholder="Enter Email"/>
                                        <input type="text" placeholder="Enter Phone number"/>
                                        <input type="text" placeholder="Job Category"/>
                                        <label>Experience</label>
                                        <input type="number" placeholder="Year"/>
                                        <input type="number" placeholder="Month"/>
                                        <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                        <input type="file" className={styles.hirringChooseFile}/>
                                        <p>Please upload Only pdf,rtf, docx and doc files
                                        <br/>Please upload CV.</p>
                                        <button>Apply</button>
                                    </div>
                                </div>
                                </div> 
                        </div>

                        <div  className= { showtab===4 ? "tab-pane fade show active":"tab-pane fade show"} style={{textDecoration:"none",borderBottom:"none"}}> 
                        <div className={styles.hirringdropdownmaincontainer1} >
                                    <Accordion className={styles.hirringdropdowncontextouter}>
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}
                                            ><h6>Sr. SEO Analylist</h6>  </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                            <Accordion.Header><h6>Sr. PPC Analylist</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                            <Accordion.Header> <h6>Sr. ASO Analylist</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                            <Accordion.Header><h6>Sr. SEM Analylist</h6> </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Sr. SMM Analylist</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Sr. Digital Marketer</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Sr. Digital Marketer Manager</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Performance Manager / Growth Hacker</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Sr. Technical Content Writer</h6> 
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
                                    </Accordion>

                                    <div className={styles.hirringmaincontainer1}>
                                    <div className={styles.hirringouterDiv}>
                                        <h4>Apply Now!</h4>
                                        <input type="text" placeholder="Enter Your Name"/>
                                        <input type="text" placeholder="Enter Email"/>
                                        <input type="text" placeholder="Enter Phone number"/>
                                        <input type="text" placeholder="Job Category"/>
                                        <label>Experience</label>
                                        <input type="number" placeholder="Year"/>
                                        <input type="number" placeholder="Month"/>
                                        <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                        <input type="file" className={styles.hirringChooseFile}/>
                                        <p>Please upload Only pdf,rtf, docx and doc files
                                        <br/>Please upload CV.</p>
                                        <button>Apply</button>
                                    </div>
                                </div>
                                </div> 
                        </div>

                        <div  className= { showtab===5 ? "tab-pane fade show active": "tab-pane fade"} style={{textDecoration:"none",borderBottom:"none"}}> 
                                <div className={styles.hirringdropdownmaincontainer1} >
                                    <Accordion className={styles.hirringdropdowncontextouter}>
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}
                                            ><h6>HR Excutive Manager</h6>  </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                            <Accordion.Header><h6>Sr. HR Excutive Manager</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                            <Accordion.Header> <h6>Business Data Manager</h6>  </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                            <Accordion.Header><h6>Sr. Business Data Manager</h6> </Accordion.Header>
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Sr. IT Business Analylist Pre Sales</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Sr. IT Business Data Analylist Sales</h6> 
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

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Marketing Executives</h6> 
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

                                    </Accordion>

                                    <div className={styles.hirringmaincontainer1}>
                                    <div className={styles.hirringouterDiv}>
                                        <h4>Apply Now!</h4>
                                        <input type="text" placeholder="Enter Your Name"/>
                                        <input type="text" placeholder="Enter Email"/>
                                        <input type="text" placeholder="Enter Phone number"/>
                                        <input type="text" placeholder="Job Category"/>
                                        <label>Experience</label>
                                        <input type="number" placeholder="Year"/>
                                        <input type="number" placeholder="Month"/>
                                        <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                        <input type="file" className={styles.hirringChooseFile}/>
                                        <p>Please upload Only pdf,rtf, docx and doc files
                                        <br/>Please upload CV.</p>
                                        <button>Apply</button>
                                    </div>
                                </div>
                                </div> 
                        </div>

                    


                        </div>
                
                    </div>  
                    
                </div>
            </Container>
        </React.Fragment>
        
   </div>
        </>
    );
}

