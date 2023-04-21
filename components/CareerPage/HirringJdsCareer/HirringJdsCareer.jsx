import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import styles from "./HirringJdsCareer.module.css";
import Accordion from 'react-bootstrap/Accordion';

export const HirringJdsCareer = () => {

    const [showtab, setShowtab] = useState(1);
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
    const [counter, setCounter] = useState(0);

    const handletab = (e) => {
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
    return (
        <>
            <div className={styles.hirringJdsCareermainDiv}>

                <React.Fragment>

                    <Container>
                        <div className="row">
                            <div className="col-sm-12 bg-light" id={styles.hirringJdsCareerChangemainDiv}>

                                {/* <div className={styles.testcontainer}></div>  */}
                                <ul class="nav nav-pills mb-3 mt-1" role="tablist" id={styles.hirringJdsCareerbuttonouterDiv}>
                                    <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv1}>
                                        <button className={showtab === 1 ? styles['hirringJdsCareerHeadingButtons'] : styles['hirringjdactive']} onClick={() => handletab(1)}>Software Engineer</button>
                                    </li>
                                    <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv2}>
                                        <button className={showtab === 2 ? styles['hirringJdsCareerHeadingButtons'] : styles['hirringjdactive']} onClick={() => handletab(2)}>Javascript Developer</button>
                                    </li>

                                    <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv3}>
                                        <button className={showtab === 3 ? styles['hirringJdsCareerHeadingButtons'] : styles['hirringjdactive']} onClick={() => handletab(3)}>Cross Platform Developer</button>
                                    </li>
                                    <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv4}>
                                        <button className={showtab === 4 ? styles['hirringJdsCareerHeadingButtons'] : styles['hirringjdactive']} onClick={() => handletab(4)}>Digital Marketing</button>
                                    </li>
                                    <li class="nav-item" role="presentation" id={styles.hirringJdsCareerbuttonDiv5}>
                                        <button className={showtab === 5 ? styles['hirringJdsCareerHeadingButtons'] : styles['hirringjdactive']} onClick={() => handletab(5)}>Hr and Sales Manager</button>
                                    </li>
                                </ul>
                                <div class="tab-content text-dark" id="pills-tabContent">

                                    <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>
                                        <div className={styles.hirringdropdownmaincontainer1} >
                                            <Accordion className={styles.hirringdropdowncontextouter}>
                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                                    <Accordion.Header className={styles.hirringdropdownDivContext}>
                                                        <h6>Sr. PHP Developer</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body className={styles.hirringdropdowncontext}>
                                                        <div className={styles.hirringJdDataContainer}>
                                                            <h6>About Company</h6>


                                                            <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                            <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                            <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior PHP Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Key Focus area:</h6> <p>MY Sql, HTML 5, CSS3, JavaScript, laravel, Cake PHP, Symfony, Codeignitor, Zend Yii, Symfony, Slim, Phpixie REST API</p>


                                                            <p>We are looking for an experienced Full Stack Developer with focus on PHP Frameworks, Laravel, Codeignitor, AWS, S3 Bucket, CloudFront, Digital Ocean, Docker, Terraform, Ansible, Jenkins, Kubernetes, CI/CD, Cloud Server Shell Programming, GCP, Azure</p>

                                                            <h6>Job Description</h6>

                                                            <p>We are looking for a php laravel Developer who will have the opportunity to collaborate with a diverse team of designers and strategists to help build websites, brands, and campaigns for our partners.<br />
                                                                You need to be comfortable in a constantly evolving environment, and should be passionate about design and development.
                                                                Responsibilities:-<br />
                                                                Based on RFPs, work with the team to produce estimates, establish timeframes, and
                                                                identify potential roadblocks/risks to successful delivery.<br />
                                                                Architect and build scalable backend web solutions using Laravel, Codeignator,
                                                                Wrodpress, Node js, Javascript, SPA frameworks, HTML, CSS and other fundamental
                                                                web technologies.<br />
                                                                Build high-performance websites and secure, scalable APIs with real-time features using
                                                                GraphQL, and PostgreSQL
                                                                Optimize site for speed/usability across desktop, tablet, and mobile platforms.<br />
                                                                Work constructively with team members across disciplines through roadblocks and
                                                                challenges, solving problems, and supporting the team while remaining porous to
                                                                feedback.<br />
                                                                Fully own tasks in every stage of development and complete them by the expected due
                                                                date.<br />
                                                                Enhance problem solving skills to provide maintainable bullet-proof
                                                                Provide code reviews for fellow developers solutions.<br />
                                                                Build application features in a fast paced environment</p>

                                                            <h6>Education/Experience</h6>

                                                            <h6>Requirements:-</h6>

                                                            <p>0-6 years of relevant experience
                                                                Proficiency with fundamental front end languages such as HTML, CSS and JavaScript.
                                                                Familiarity with JavaScript frameworks such as Core php, wordpress, laravel,

                                                                codeigniter.</p>

                                                            <p>In depth knowledge of object-oriented PHP and Laravel PHP Framework
                                                                Hands on experience with SQL schema design, SOLID principles, REST API design
                                                                Software testing (PHPUnit, PHPSpec, Behat)MySQL profiling and query

                                                                optimizationCreative and efficient problem solver

                                                                Deep experience in developing custom WordPress themes, plugins, and sites from

                                                                scratch.</p>

                                                            <p>Experience with API Integration & 3rd part API Integration
                                                                Experience with modern PHP frameworks, and tooling.
                                                                Excellent communication skills with both colleagues and external clients with the

                                                                capacity to manage priorities and deadlines.</p>

                                                            <p>Experience & understanding of applied SEO and analytics.
                                                                Capacity to transform management protocols into effective technology;
                                                                Experience & understanding of security best practices.
                                                                Exceptional attention to detail – you take pride in your work and sweat the small stuff.
                                                                Experience managing workload in project management software, and a demonstrated

                                                                ability to communicate effectively with project managers;</p>

                                                            <p>Proven record of site speed and mobile optimization.
                                                                Experience & understanding of cross-browser compatibility issues and ways to work
                                                                around them.</p>

                                                            <p>Strong organizational and project management skills.
                                                                Strong team player, analytical and dynamic</p>

                                                            <h6>Skills:</h6> <p>laravel, Cake PHP, Symfony, Codeignitor, Zend Yii, Symfony, Slim, Phpixie</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                                    <Accordion.Header><h6>Sr. MERN Developer</h6>  </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer}>
                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.

                                                                Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch.BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>

                                                            <h6>Please find below-mentioned JD </h6>

                                                            <h6>Position:</h6>  <p>Sr. MERN Stack Developer Role
                                                                Employment Type: Employee - Full Time</p>

                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only)</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 15 Days 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Key Focus area:</h6> <p>Mongo DB, Express Js, React Js, Node Js,. Next Js, Angular Js, Vue Js, Backbone Js, Nest js</p>

                                                            <p>We are looking for an experienced Full Stack Developer with focus on MERN</p>

                                                            <h6>Responsibilities:</h6>

                                                            <p>Ability to translate Wireframes and PSD Designs into functional web apps using HTML5, AngularJs, ReactJs , Node.js, Next Js Typescript and MongoDB
                                                                Binding of UI elements to JavaScript object models
                                                                Creating RESTful services with Node.js
                                                                Python or PHP knowledge will be good
                                                                Architect scalable web architectures
                                                                Work in a cross-functional team to deliver a complete user experience
                                                                Create Unit and Integration tests to ensure the quality of code
                                                                Be responsive to change requests and feature requests
                                                                Write code that is cross-platform and cross-device compatible
                                                                Ability to wear many hats and learn new technologies quickly
                                                                Qualification and Work Experience</p>


                                                            <h6>Qualification:</h6> <p>B.E./B. Tech/BCA/MCA</p>

                                                            <p>1-3 years minimum in creating complex HTML based solutions
                                                                Detail oriented experience as a Web Developer creating Angular/React/Vue based solutions
                                                                1-3 years with Node.js and Express Js
                                                                Ability to work both independently and in collaborative teams to communicate design and build ideas effectively
                                                                Experience using asynchronous RESTful services (JSON)</p>

                                                            <h6>Requirements:</h6>
                                                            <p>Fluent knowledge of the latest HTML/CSS standards and best practices
                                                                Working knowledge of JavaScript, Typescript, ReactJS and Angular Working knowledge of Node.js and Express Js
                                                                Solid Understanding of HTTP protocol and how server-side code is processed on the client
                                                                Understanding the nature of asynchronous programming and its quirks and workarounds Excellent hands-on experience with MongoDB , Mongo aggregation , MySQL, Ability to build REST services, Authentications, MVC applications
                                                                Excellent Object-Oriented Programming skills and ability to write modular, secure, scalable and maintainable code • Experience with Elastic search, Redis.
                                                                Some experience with Photoshop or Sketch is a plus (creating sprites, optimizing, cutting or adjusting images)
                                                                Working knowledge of front end optimisation and performance techniques
                                                                Obsession with lean, clean and organised front-end code
                                                                Cross-browser development and troubleshooting
                                                                Experience building Responsive websites for web, tablet and mobile devices
                                                                Eye for details is crucial
                                                                Able to handle multiple projects and competing deadlines
                                                                Good understanding of overall web design including basic usability, accessibility, industry standards, architecture, and navigation</p>
                                                            <h6>Desired Skills:</h6>
                                                            <p>Experience with Microservices and DevOps.</p>

                                                            <h6>Benefits :</h6>
                                                            <p>Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organisational culture, focus on employee's well-being.</p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>


                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                                    <Accordion.Header><h6>Sr. MEAN Developer</h6> </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Sr. MEAN Stack Developer Role</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Key Focus area:</h6>
                                                            <p>
                                                                Mongo DB, Express Js, React Js, Node Js,. Next Js, Angular Js, Vue Js, Backbone Js, Nest js, Svelte js
                                                            </p>
                                                            <h6>Responsibilities:</h6>

                                                            <p>
                                                                Ability to translate Wireframes and PSD Designs into functional web apps using HTML5, AngularJs, ReactJs , Node.js, Next Js Typescript and MongoDB
                                                                Binding of UI elements to JavaScript object models
                                                                Creating RESTful services with Node.js
                                                                Python or PHP knowledge will be good
                                                                Architect scalable web architectures
                                                                Work in a cross-functional team to deliver a complete user experience
                                                                Create Unit and Integration tests to ensure the quality of code
                                                                Be responsive to change requests and feature requests
                                                                Write code that is cross-platform and cross-device compatible
                                                                Ability to wear many hats and learn new technologies quickly
                                                                Qualification and Work Experience
                                                            </p>
                                                            <h6>Qualifications:</h6>
                                                            <p>
                                                                B.E./B. Tech/BCA/MCA
                                                            </p>

                                                            <h6>Work experience Prefered:</h6>

                                                            <p>

                                                                1-3 years minimum in creating complex HTML based solutions
                                                                Detail oriented experience as a Web Developer creating Angular/React/Vue based solutions
                                                                1-3 years with Node.js and Express Js
                                                                Ability to work both independently and in collaborative teams to communicate design and build ideas effectively
                                                                Experience using asynchronous RESTful services (JSON)
                                                            </p>

                                                            <h6>Requirements:</h6>
                                                            <p>
                                                                Fluent knowledge of the latest HTML/CSS standards and best practices
                                                                Working knowledge of JavaScript, Typescript, ReactJS and Angular Working knowledge of Node.js and Express Js
                                                                Solid Understanding of HTTP protocol and how server-side code is processed on the client
                                                                Understanding the nature of asynchronous programming and its quirks and workarounds Excellent hands-on experience with MongoDB , Mongo aggregation , MySQL, Ability to build REST services, Authentications, MVC applications
                                                                Excellent Object-Oriented Programming skills and ability to write modular, secure, scalable and maintainable code • Experience with Elastic search, Redis.
                                                                Some experience with Photoshop or Sketch is a plus (creating sprites, optimizing, cutting or adjusting images)
                                                                Working knowledge of front end optimisation and performance techniques
                                                                Obsession with lean, clean and organised front-end code
                                                                Cross-browser development and troubleshooting
                                                                Experience building Responsive websites for web, tablet and mobile devices
                                                                Eye for details is crucial
                                                                Able to handle multiple projects and competing deadlines
                                                                Good understanding of overall web design including basic usability, accessibility, industry standards, architecture, and navigation
                                                            </p>
                                                            <h6>Desired Skills</h6>

                                                            <p>Experience with Microservices and DevOps.</p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                                    <Accordion.Header><h6>Sr. Ruby Developers</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior ruby on Rails Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                            <h6>Key Focus area:</h6>  <p>MY Sql, HTML 5, CSS3, JavaScript, ruby on rails, ,  Cuba, Rails, hanami, Sinrtra, Padrino, Roda, Postgre SQL

                                                                We are looking for an experienced Full Stack Developer with focus on Ruby on Rails  Frameworks, Cuba, Rails, hanami, Sinrtra, Padrino, Roda,, AWS, S3 Bucket, CloudFront, Digital Ocean, Docker, Terraform, Ansible, Jenkins, Kubernetes, CI/CD, Cloud Server Shell Programming, GCP, Azure</p>


                                                            <h6>What you need:</h6>

                                                            <p>At least five years of professional software development experience required
                                                                At least four years of experience working in Python required
                                                                Bachelor’s degree or the equivalent in education and experience in computer science, MIS or a related field required
                                                                Understanding of Python multi-threading model and multi-process architectures preferred
                                                                Working knowledge of AWS cloud technologies and boto3 library preferred
                                                                Experience with at least one web framework such as Django or Flask preferred
                                                                Experience with libraries such as pandas, NumPy and PySpark preferred
                                                                To live within a 200-mile radius of Omaha, Nebraska, prefer</p>




                                                            <h6>Job Details</h6>

                                                            <p>Ruby on Rails experience

                                                                Experience with Python and Django

                                                                Strong knowledge of agile development methodologies

                                                                Proven track record of delivering quality work on time

                                                                Enjoy working with product specialists and end-users to understand requirements

                                                                Solid communication, collaboration and mentoring skills to work with a range of colleagues from product specialists and end-users, to UX designers and other developers

                                                                Strong interest in continued personal and professional development, inclusive of learning new programming languages and technologies

                                                                Experience incorporating automation and integration testing

                                                                Preferred Experience

                                                                Web frontend React, Bootstrap, GraphQL

                                                                Languages Ruby, Javascript (Or Python/Django stack)

                                                                Web backend Rails, Rescue

                                                                Databases MySQL, Redis, LDAP, ElasticSearch, InfluxDB

                                                                Team Scrum, Git

                                                                DevOps Docker, Kubernetes, Jenkins, Terraforms, Ansible

                                                                Desired Skills

                                                                Experience with Microservices and DevOps.</p>


                                                            <h6>Benefits</h6>

                                                            <p>Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.</p>


                                                            <h6>Work-life balance:</h6>

                                                            <p>Be part of the best place to work for certified company.</p>

                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                                    <Accordion.Header><h6>Sr. Python Developer</h6>   </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior Full Stack Python Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                            <h6>Key Focus area:</h6>
                                                            <p>
                                                                MY Sql, HTML 5, CSS3, JavaScript, Python, Flask, Django, Bottle, Cheery Py, Web2 Py,  REST API, Python Dynamic Website Development, Automation or scripting, Python Data Extraction
                                                                We are looking for an experienced Full Stack Developer with focus on Python Frameworks,Flask, Django, Bottle, Cheery Py, Web2 Py, AWS, S3 Bucket, CloudFront, Digital Ocean, Docker, Terraform, Ansible, Jenkins, Kubernetes, CI/CD, Cloud Server Shell Programming, GCP, Azure
                                                            </p>
                                                            <h6>What you need:</h6>

                                                            <p>At least five years of professional software development experience required
                                                                At least four years of experience working in Python required
                                                                Bachelor’s degree or the equivalent in education and experience in computer science, MIS or a related field required
                                                                Understanding of Python multi-threading model and multi-process architectures preferred
                                                                Working knowledge of AWS cloud technologies and boto3 library preferred
                                                                Experience with at least one web framework such as Django or Flask preferred
                                                                Experience with libraries such as pandas, NumPy and PySpark preferred
                                                                To live within a 200-mile radius of Omaha, Nebraska, prefer</p>

                                                            <h6>Qualifications:</h6>

                                                            <h6>Essential Skills:</h6>
                                                            <p>
                                                                Python, MY Sql, Mongo DB
                                                                Primary Skills: Flask, Django, Fast API
                                                                Additional Skills: JSON, Rest, CI/CD, Data Structure, Algorithms
                                                                Knowledge of common algorithms, OOP, and understanding of CI/CD development practice, DevOps
                                                                Knowledge of Agile Principles
                                                            </p>

                                                            <h6>What we offer:</h6>

                                                            <p>
                                                                We create exceptional workplaces, starting with our own. We focus on developing your strengths — what you do right, rather than what you do wrong — and helping you be engaged at work. When you work at Gallup, you’ll benefit from:
                                                            </p>
                                                            <p>
                                                                A strengths-based, engagement-focused and performance-oriented culture
                                                                A flexible and hybrid work environment with an emphasis on associate wellbeing
                                                                World-class managers who support, develop, empower and engage you
                                                                Ongoing learning and development opportunities to work with the latest technology
                                                                Mission-driven work that changes the lives of people around the world
                                                                A robust benefits package including medical, dental and vision insurance options, a 401(k) retirement and savings plan with company matching, an employee stock ownership program, and more
                                                                An on-site cafeteria, fitness center, federal credit union and state-of-the-art child development center, all on a beautiful downtown Omaha campus on the Missouri River
                                                            </p>
                                                            <h6>Desired Skills</h6>

                                                            <p>Experience with Microservices and DevOps.</p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="6">
                                                    <Accordion.Header><h6>Sr. java Developer</h6>   </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior Full Stack Java Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                            <h6>Key Focus area:</h6>
                                                            <p>
                                                                Java, Java Spring Boot, Hibernate, Spring Secruit, Spring Cloud, Vaadin, Play

                                                                We are looking for an experienced Full Stack Java Developer with focus on Java, Java Spring Boot, Hibernate, Spring Secruit, Spring Cloud, Vaadin, Play

                                                            </p>
                                                            <h6>Your main responsibilities:</h6>

                                                            <p>
                                                                In this role, you will:
                                                                Work with development teams and product managers to ideate software solutions
                                                                Knowledge frameworks of spring boot, Hibernate respective other java frameworks
                                                                Design and implementation of the overall web architecture
                                                                Design and construction of our REST API
                                                                Integrating our front-end UI with the constructed API
                                                                Test software to ensure responsiveness and efficiency
                                                                Troubleshoot, debug and upgrade software
                                                                Write technical documentation
                                                                Understanding of development effort and estimations
                                                                Implement the user interface following company standards & guidelines
                                                                Ensure code quality (automated tests, static code analyzers, etc.)
                                                                Review and assist team members facing challenges in the development
                                                                Optimize the application for best performance.
                                                                Attend a daily Agile (Scrum) meeting to identify, groom, and report progress on development projects.
                                                                Required
                                                                2+ years of Proven experience as a Java Developer
                                                                Expertise in Java 2+ and basic web technologies such as CSS, Javascript, Bootstrap, etc
                                                                Proficiency in Java multithreading and OOPS
                                                                Knowledge of build tools and their customization (maven, Gradle)
                                                                Knowledge of Microsoft Azure
                                                                Excellent Analytical and Debugging skills
                                                                Familiarity with databases (e.g., MySQL, MongoDB), web servers (e.g., Apache), and UI/UX design
                                                                Knowledge on Microservices
                                                                Excellent communication and teamwork skills
                                                                Great attention to detail & an analytical mind
                                                                Experience implementing testing platforms and unit tests
                                                                Appreciation for clean and well-documented code
                                                                Proficiency with Git and Agile framework
                                                                Proficiency with Jenkins
                                                                Bachelor's Degree in Computer Engineering or relevant field

                                                                Desired
                                                                Knowledge of the Software Development Lifecycle
                                                                Knowledge of any UI frameworks such as Angular/React would be a plus.
                                                                Strong interpersonal, excellent written and verbal communication skills
                                                                Foster a collaborative and cooperative team environment, encouraging input and participation from all members as part of a global team
                                                                Experience in HTML5, CSS3, SASS or LESS, and Bootstrap, Foundation or Materialize
                                                            </p>

                                                            <h6>Benefits:</h6>

                                                            <p>
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="7">
                                                    <Accordion.Header className={styles.hirringdropdownDivContext}>
                                                        <h6>Sr. .NET Developer</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body className={styles.hirringdropdowncontext}>
                                                        <div className={styles.hirringJdDataContainer}>
                                                            <h6>About Company</h6>


                                                            <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                            <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                            <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior .NET Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                            <h6>Key Focus area:</h6> <p>MY Sql, HTML 5, CSS3, JavaScript, NETcore, ASP.NET Core, sql, C#, .NET, REST api, Web api, postgresql, angular, azure, paas, container based, Typescript, React, vue.js, docker, kubernetes, kafka, karma, jasmine, bootstrap, css3, html5, unit testing  REST API</p>


                                                            <p>We are looking for an experienced Full Stack . NET Developer with focus on .NET Frameworks, AWS, S3 Bucket, CloudFront, Digital Ocean, Docker, Terraform, Ansible, Jenkins, Kubernetes, CI/CD, Cloud Server Shell Programming, GCP, Azure</p>

                                                            <h6>Skill sets that would be valuable:</h6>

                                                            <p>
                                                                Full stack - SQL, .Net Core, C#, MVC and Angular 15
                                                                Bonus experience - Azure (functions, containers, SaaS PaaS, etc.), managed APIs
                                                                Experienced hiring or interviewing developers/ leading large, distributed teams/ good communication and organization.
                                                            </p>

                                                            <h6>Additional Skills & Qualifications:</h6>

                                                            <p>
                                                                Asset wealth management (AWM) – this is the main focus is. It’s basically our Client and their partnerships with other companies like hedge funds, law firms, any structure that has to file taxes. There is the AWM team that manages the technology that helps facilities with this process. Not like turbo tax. Complex tax code with variations. our Client’s engagement teams use the tool to set up structure/data. Mostly an internal tool.
                                                                Data Flow – data extraction, mapping, OCR. There was an investor that invested in 2 of our Client's clients and revenue flows from one to the other. Teams don’t have to figure that out. It’s really about “how do I drive adoption and get people out of their current bad habits?”
                                                                Partner Hub – Investor relations tool. Client’s client. Portal uploads K1 forms, investors can upload/fill them out/download easily. They also have an onboarding module where they can do w8/w9 forms. Smaller in scope, but hypersensitivity. NO branding. It’s a “client’s tool”. Complex in a different way.
                                                                Siteline – inevitable for tech teams, how do we integrate, etc. how do we re-architect our solution to be able to fit in Siteline ecosystem? 12 years old. Legacy, older paradigms with modern paradigms. Almost like we have parts of the system behind a curtain and have ignored it. How do we decompose track (massive app), modularize it, put it in Siteline? A lot of problems arise during that process. Track is the largest application Ben’s ever worked on his career, massive. Has 10K+ users, size and scale are impressive.
                                                                Our Client is also slowly transforming their big, legacy app on top of MVC. UI logic and controller are baked in together. Sits on top of SQL databases. Each client engagement has their own database because clients want different things like quarterly returns/estimates/compliance/etc.
                                                                Our Client is also migrating from MVC to Angular and API’s (integration). That’s the other half of their front-end implementation.
                                                                SQL VMS to SQL P
                                                            </p>
                                                            <h6>Benefits:</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>

                                            <div className={styles.hirringmaincontainer1}>
                                                <div className={styles.hirringouterDiv}>
                                                    <h4>Apply Now!</h4>
                                                    <input type="text" placeholder="Enter Your Name" />
                                                    <input type="text" placeholder="Enter Email" />
                                                    <input type="text" placeholder="Enter Phone number" />
                                                    <input type="text" placeholder="Job Category" />
                                                    <label>Experience</label>
                                                    <input type="number" placeholder="Year" />
                                                    <input type="number" placeholder="Month" />
                                                    <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                                    <input type="file" className={styles.hirringChooseFile} />
                                                    <p>Please upload Only pdf,rtf, docx and doc files
                                                        <br />Please upload CV.</p>
                                                    <button>Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="8">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}>
                                                <h6>Sr. Golang Developer</h6>  
                                            </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}>
                                                <div className={styles.hirringJdDataContainer}>
                                                    <h6>About Company</h6>


                                                    <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                    <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                    <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                    <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                    <h6>Please find below-mentioned JD</h6>


                                                    <h6>Position:</h6> <p>Senior Golang Developer</p>


                                                    <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                    <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                    <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                    <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                    <h6>Job Description:</h6> 

                                                    <p>We are looking for a highly skilled and experienced Senior Golang Developer to join our team. The ideal candidate will have extensive experience in developing complex software solutions using Golang and a solid understanding of modern software development practices. The candidate should be passionate about delivering high-quality software solutions and have a proven track record of success in leading software development projects.</p>

                                                   

                                                    <h6>Responsibilities:</h6>

                                                    <p>
                                                    Design, develop, and maintain complex software systems using Golang
                                                    Write clean, efficient, and well-documented code that follows best practices
                                                    Work with cross-functional teams to understand requirements and design software solutions that meet business needs
                                                    Lead software development projects, providing technical guidance and mentorship to junior developers
                                                    Collaborate with product managers and other stakeholders to prioritize and deliver software features
                                                    Identify and resolve performance and scalability issues
                                                    Continuously improve software development practices and processes

                                                    </p>

                                                    <h6>Requirements</h6>
                                                    <p>
                                                    Bachelor's degree in Computer Science or related field
                                                    5+ years of experience in software development with Golang
                                                    Strong understanding of software development principles, patterns, and best practices
                                                    Experience leading software development projects and mentoring junior developers
                                                    Experience with containerization technologies such as Docker and Kubernetes
                                                    Familiarity with agile software development methodologies and tools such as JIRA
                                                    Experience with distributed systems and microservices architecture
                                                    Strong communication and collaboration skills
                                                    A passion for delivering high-quality software solutions

                                                    </p>
                                                    <h6>Benefits:</h6>
                                                    <p>
                                                        Opportunity to work on highly challenging international projects.

                                                        Opportunity to travel & work with International clients.

                                                        Flexible and friendly work environment

                                                        Great organizational culture, focus on employee's well-being.
                                                    </p>
                                                    <h6>Work-life balance.</h6>
                                                    <p>Be part of the best place to work for certified company</p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="9">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}>
                                                <h6>Sr. C++ Developer</h6>  
                                            </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}>
                                                <div className={styles.hirringJdDataContainer}>
                                                    <h6>About Company</h6>


                                                    <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                    <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                    <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                    <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                    <h6>Please find below-mentioned JD</h6>


                                                    <h6>Position:</h6> <p>Senior C++ Developer</p>


                                                    <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                    <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                    <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                    <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                    <h6>Job Description:</h6> 

                                                   <p>We are seeking a highly skilled Senior C++ Developer to join our team. As a Senior C++ Developer, you will be responsible for developing and maintaining high-performance applications in a fast-paced environment. You will work closely with our software engineering team to design, develop, and implement software solutions using C++ programming language.</p>

                                                    <h6>Responsibilities:</h6>

                                                    <p>
                                                    Design, develop and implement high-performance C++ software solutions
                                                    Collaborate with cross-functional teams to define, design, and ship new features
                                                    Maintain and improve existing codebase
                                                    Write well-designed, testable, and efficient code
                                                    Identify and fix software defects and performance issues
                                                    Participate in code reviews to maintain code quality and ensure adherence to coding standards
                                                    Continuously learn and apply new technologies, techniques, and methodologies
                                                    </p>

                                                    <h6>Requirements</h6>
                                                    <p>
                                                    Bachelor's degree in Computer Science or a related field
                                                    At least 5 years of professional experience in C++ development
                                                    Strong knowledge of algorithms, data structures, and software design principles
                                                    Experience with multi-threaded programming and concurrency
                                                    Proficiency in Linux operating system and development tools
                                                    Familiarity with software development lifecycle and agile methodologies
                                                    Excellent problem-solving skills and ability to work independently and as part of a team
                                                    Strong communication and interpersonal skills

                                                    </p>

                                                    <h6>Preferred Qualifications:</h6>
                                                    <p>
                                                    Master's degree in Computer Science or a related field
                                                    Experience with network programming and socket programming
                                                    Knowledge of GPU programming and parallel computing
                                                    Familiarity with version control systems (Git, SVN)
                                                    Experience with scripting languages (Python, Bash)
                                                    <br/>If you are a Senior C++ Developer who is passionate about software engineering and wants to work on challenging projects in a dynamic environment, we would love to hear from you.

                                                    </p>
                                                    <h6>Benefits:</h6>
                                                    <p>
                                                        Opportunity to work on highly challenging international projects.

                                                        Opportunity to travel & work with International clients.

                                                        Flexible and friendly work environment

                                                        Great organizational culture, focus on employee's well-being.
                                                    </p>
                                                    <h6>Work-life balance.</h6>
                                                    <p>Be part of the best place to work for certified company</p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="10">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}>
                                                <h6>Sr. C# Developer</h6>  
                                            </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}>
                                                <div className={styles.hirringJdDataContainer}>
                                                    <h6>About Company</h6>


                                                    <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                    <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                    <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                    <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                    <h6>Please find below-mentioned JD</h6>


                                                    <h6>Position:</h6> <p>Senior C# Developer</p>


                                                    <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                    <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                    <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                    <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                    <h6>Job Description:</h6> 

                                                     <p>
                                                     We are seeking an experienced Senior C# Developer to join our team. The ideal candidate will have at least [Insert number of years] years of experience in C# development and a strong understanding of the .NET framework.
                                                     </p>
                                                    <h6>Responsibilities:</h6>

                                                    <p>
                                                    Design, develop, and maintain software applications using C# and the .NET framework
                                                    Collaborate with cross-functional teams to identify requirements and design solutions
                                                    Write clean, efficient, and well-documented code
                                                    Participate in code reviews and provide constructive feedback to other developers
                                                    Troubleshoot and debug software issues
                                                    Continuously improve software development processes and practices

                                                    </p>

                                                    <h6>Requirements</h6>
                                                    <p>
                                                    Bachelor's degree in Computer Science, Engineering or a related field
                                                    At least [Insert number of years] years of experience in C# development
                                                    Strong understanding of the .NET framework and its architecture
                                                    Experience with database design and SQL
                                                    Proficiency in front-end development using HTML, CSS, and JavaScript
                                                    Familiarity with Agile development methodologies
                                                    Strong problem-solving skills and attention to detail
                                                    Excellent communication and collaboration skills

                                                    </p>

                                                    <h6>Preferred Qualifications:</h6>
                                                    <p>
                                                    Experience with cloud technologies such as Azure or AWS
                                                    Knowledge of containerization and orchestration tools such as Docker and Kubernetes
                                                    Familiarity with DevOps practices such as CI/CD
                                                    Experience with other programming languages such as Java or Python
                                                    <br/>If you are a highly motivated and skilled C# developer looking for a challenging role with a dynamic team, please apply today!

                                                    </p>
                                                    <h6>Benefits:</h6>
                                                    <p>
                                                        Opportunity to work on highly challenging international projects.

                                                        Opportunity to travel & work with International clients.

                                                        Flexible and friendly work environment

                                                        Great organizational culture, focus on employee's well-being.
                                                    </p>
                                                    <h6>Work-life balance.</h6>
                                                    <p>Be part of the best place to work for certified company</p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="10">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}>
                                                <h6>Sr. C# Developer</h6>  
                                            </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}>
                                                <div className={styles.hirringJdDataContainer}>
                                                    <h6>About Company</h6>


                                                    <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                    <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                    <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                    <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                    <h6>Please find below-mentioned JD</h6>


                                                    <h6>Position:</h6> <p>Senior C# Developer</p>


                                                    <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                    <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                    <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                    <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                    <h6>Job Description:</h6> 

                                                     <p>
                                                     We are seeking an experienced Senior C# Developer to join our team. The ideal candidate will have at least [Insert number of years] years of experience in C# development and a strong understanding of the .NET framework.
                                                     </p>
                                                    <h6>Responsibilities:</h6>

                                                    <p>
                                                    Design, develop, and maintain software applications using C# and the .NET framework
                                                    Collaborate with cross-functional teams to identify requirements and design solutions
                                                    Write clean, efficient, and well-documented code
                                                    Participate in code reviews and provide constructive feedback to other developers
                                                    Troubleshoot and debug software issues
                                                    Continuously improve software development processes and practices

                                                    </p>

                                                    <h6>Requirements</h6>
                                                    <p>
                                                    Bachelor's degree in Computer Science, Engineering or a related field
                                                    At least [Insert number of years] years of experience in C# development
                                                    Strong understanding of the .NET framework and its architecture
                                                    Experience with database design and SQL
                                                    Proficiency in front-end development using HTML, CSS, and JavaScript
                                                    Familiarity with Agile development methodologies
                                                    Strong problem-solving skills and attention to detail
                                                    Excellent communication and collaboration skills

                                                    </p>

                                                    <h6>Preferred Qualifications:</h6>
                                                    <p>
                                                    Experience with cloud technologies such as Azure or AWS
                                                    Knowledge of containerization and orchestration tools such as Docker and Kubernetes
                                                    Familiarity with DevOps practices such as CI/CD
                                                    Experience with other programming languages such as Java or Python
                                                    <br/>If you are a highly motivated and skilled C# developer looking for a challenging role with a dynamic team, please apply today!

                                                    </p>
                                                    <h6>Benefits:</h6>
                                                    <p>
                                                        Opportunity to work on highly challenging international projects.

                                                        Opportunity to travel & work with International clients.

                                                        Flexible and friendly work environment

                                                        Great organizational culture, focus on employee's well-being.
                                                    </p>
                                                    <h6>Work-life balance.</h6>
                                                    <p>Be part of the best place to work for certified company</p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="11">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}>
                                                <h6>Sr. Perl Developer</h6>  
                                            </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}>
                                                <div className={styles.hirringJdDataContainer}>
                                                    <h6>About Company</h6>


                                                    <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                    <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                    <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                    <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                    <h6>Please find below-mentioned JD</h6>


                                                    <h6>Position:</h6> <p>Senior Perl Developer</p>


                                                    <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                    <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                    <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                    <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                    <h6>Job Description:</h6> 

                                                    <p>
                                                    We are seeking a highly skilled and experienced Senior Perl Developer to join our dynamic team. The Senior Perl Developer will be responsible for developing and maintaining our company's software applications and systems, and working closely with our team of developers to ensure that all applications are scalable, reliable, and performant.
                                                    </p>

                                                    <h6>Responsibilities:</h6>

                                                    <p>
                                                    Design, develop, and maintain our company's software applications and systems using Perl programming language.
                                                    Write high-quality, clean, maintainable, and testable code that meets the highest standards of software development.
                                                    Work with cross-functional teams to design and implement new features and enhancements to existing applications.
                                                    Troubleshoot and debug software issues as they arise, and develop and implement effective solutions.
                                                    Conduct code reviews and provide constructive feedback to other developers to ensure code quality and consistency.
                                                    Participate in software development planning and estimation.
                                                    Stay up-to-date with the latest industry trends and technologies, and continuously improve technical skills and knowledge.

                                                    </p>

                                                    <h6>Requirements</h6>
                                                    <p>
                                                    Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field.
                                                    Minimum of 5 years of experience in Perl programming language.
                                                    Strong knowledge of software development principles and practices, including design patterns, data structures, algorithms, and software architecture.
                                                    Experience with web application development frameworks such as Catalyst or Mojolicious.
                                                    Experience with database technologies such as MySQL, PostgreSQL, or Oracle.
                                                    Strong understanding of Linux or Unix operating systems.
                                                    Excellent problem-solving and analytical skills, with the ability to work in a fast-paced, dynamic environment.
                                                    Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams.

                                                    </p>

                                                   
                                                    <h6>Benefits:</h6>
                                                    <p>
                                                        Opportunity to work on highly challenging international projects.

                                                        Opportunity to travel & work with International clients.

                                                        Flexible and friendly work environment

                                                        Great organizational culture, focus on employee's well-being.
                                                    </p>
                                                    <h6>Work-life balance.</h6>
                                                    <p>Be part of the best place to work for certified company</p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="12">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}>
                                                <h6>Sr. Magento Developer</h6>  
                                            </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}>
                                                <div className={styles.hirringJdDataContainer}>
                                                    <h6>About Company</h6>


                                                    <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                    <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                    <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                    <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                    <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                    <h6>Please find below-mentioned JD</h6>


                                                    <h6>Position:</h6> <p>Senior Magento Developer</p>


                                                    <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                    <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                    <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                    <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                    <h6>Job Description:</h6> 

                                                   <p>
                                                   We are seeking a talented Senior Magento Developer to join our team. The ideal candidate will have experience in developing high-performance, scalable, and robust e-commerce solutions using Magento 2. As a Senior Magento Developer, you will be responsible for designing, developing, and maintaining Magento websites, as well as integrating them with third-party systems and services.
                                                   </p>

                                                    <h6>Responsibilities:</h6>

                                                    <p>
                                                    Design and develop Magento websites according to business requirements
                                                    Customize existing Magento extensions and develop new ones as necessary
                                                    Develop and maintain custom Magento themes and templates
                                                    Implement and maintain third-party integrations with payment gateways, shipping providers, and other systems
                                                    Optimize website performance by implementing caching, optimizing database queries, and other performance-related tasks
                                                    Troubleshoot and resolve technical issues related to Magento websites
                                                    Collaborate with designers, project managers, and other developers to deliver high-quality e-commerce solutions
                                                    Mentor and guide junior developers on the team

                                                    </p>

                                                    <h6>Requirements</h6>
                                                    <p>
                                                    Bachelor's degree in Computer Science, Engineering, or a related field
                                                    At least 5 years of experience in Magento 2 development
                                                    In-depth knowledge of PHP, MySQL, JavaScript, and HTML/CSS
                                                    Experience with Magento extensions and themes development
                                                    Strong understanding of e-commerce business processes and requirements
                                                    Experience with third-party integrations (e.g., payment gateways, shipping providers, etc.)
                                                    Excellent problem-solving skills and ability to troubleshoot technical issues
                                                    Strong communication skills and ability to work in a collaborative team environment
                                                    Experience with Git, Docker, and Agile methodologies is a plus
                                                    <br/>If you are a passionate and experienced Magento Developer looking to take on new challenges and advance your career, we encourage you to apply for this exciting opportunity!

                                                    </p>

                                                   
                                                    <h6>Benefits:</h6>
                                                    <p>
                                                        Opportunity to work on highly challenging international projects.

                                                        Opportunity to travel & work with International clients.

                                                        Flexible and friendly work environment

                                                        Great organizational culture, focus on employee's well-being.
                                                    </p>
                                                    <h6>Work-life balance.</h6>
                                                    <p>Be part of the best place to work for certified company</p>
                                                </div>
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

                                    <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }} >
                        <div  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} style={{textDecoration:"none",borderBottom:"none"}} > 
                                
                        <div className={styles.hirringdropdownmaincontainer1} >
                                    <Accordion className={styles.hirringdropdowncontextouter}>
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                            <Accordion.Header className={styles.hirringdropdownDivContext}
                                            ><h6>Sr. Vue Js Developer</h6>  </Accordion.Header>
                                            <Accordion.Body className={styles.hirringdropdowncontext}
                                            >
                                                
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p>Vue JS Developer</p>


                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Skill:</h6>  
                                                <p>
                                                Highly proficient with the JavaScript language and its modern ES6+ syntax and features
                                                Highly proficient with Vue.js framework and its core principles such as components,
                                                reactivity, and the virtual DOM

                                                Familiarity with the Vue.js ecosystem, including Vue CLI, Vuex, Vue Router, and Nuxt.js
                                                Good understanding of HTML5 and CSS3
                                                Understanding of server-side rendering and its benefits and use cases
                                                Knowledge of functional programming and object-oriented programming paradigms
                                                Ability to write efficient, secure, well-documented, and clean JavaScript code
                                                Familiarity with automated JavaScript testing, specifically testing frameworks such as Jest or
                                                Mocha

                                                Proficiency with modern development tools, like Babel, Webpack, and Git
                                                Experience with both consuming and designing RESTful API

                                                </p>
                                                <h6>Your main responsibilities:</h6>

                                                <p>
                                                Developing user-facing applications using Vue.js
                                                Building modular and reusable components and libraries
                                                Optimizing your application for performance
                                                Implementing automated testing integrated into development and maintenance workflows
                                                Staying up to date with all recent developments in the JavaScript and Vue.js space
                                                Keeping an eye on security updates and issues found with Vue.js and all project
                                                dependencies

                                                Proposing any upgrades and updates necessary for keeping up with modern security and
                                                development best practices

                                                </p>

                                                <h6>Benefits:</h6>

                                                <p>
                                                    Opportunity to work on highly challenging international projects.
                                                    Opportunity to travel & work with International clients.
                                                    Flexible and friendly work environment
                                                    Great organizational culture, focus on employee's well-being.
                                                </p>

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>

                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                            <Accordion.Header><h6>Sr. Next Js Developer</h6>  </Accordion.Header>
                                            <Accordion.Body>
                                                
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p>Next  JS Developer</p>


                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Your main responsibilities:</h6>

                                                <p>
                                                Develop and maintain our web applications using Next.js, Node.js, React.js, and MongoDB.
                                                Collaborate with the team to design and implement new features and functionalities.
                                                Work closely with the UX/UI team to ensure seamless user experience across all platforms.
                                                Optimize the application for maximum speed and scalability.
                                                Troubleshoot and debug issues that arise in the development process.
                                                Stay up to date with the latest technologies and frameworks in the industry.
                                                </p>
                                                
                                                <h6>
                                                Requirements:
                                                </h6>

                                                <p>
                                                Minimum of 1 year of experience in Next.js, Node.js, React.js, and MongoDB.
                                                Strong proficiency in JavaScript and its core principles.
                                                Experience with Git and code versioning tools.
                                                Understanding of server-side rendering and API development.
                                                Familiarity with agile development methodologies.
                                                Excellent communication and collaboration skills.
                                                Bachelor's degree in Computer Science, Engineering, or a related field is preferred.

                                                </p>
                                                <h6>Benefits:</h6>

                                                <p>
                                                    Opportunity to work on highly challenging international projects.
                                                    Opportunity to travel & work with International clients.
                                                    Flexible and friendly work environment
                                                    Great organizational culture, focus on employee's well-being.
                                                </p>

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>

                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                            <Accordion.Header> <h6>Sr. Nuxt Js</h6>  </Accordion.Header>
                                            <Accordion.Body>

                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p>Nuxt  JS Developer</p>


                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Job description </h6>

                                                <p>
                                                    Developing user-facing applications using Vue.js
                                                    Building modular and reusable components and libraries
                                                    Optimizing your application for performance
                                                    Implementing automated testing integrated into development and maintenance workflows
                                                    Staying up-to-date with all recent developments in the JavaScript and Vue.js space
                                                    Keeping an eye on security updates and issues found with Vue.js and all project dependencies
                                                    Proposing any upgrades and updates necessary for keeping up with modern security and development best practices

                                                </p>
                                                
                                                <h6>
                                                Required Knowledge / Skills:
                                                </h6>

                                                <p>
                                                    Highly proficient with the JavaScript language and its modern syntax and features
                                                    Highly proficient with Vue.js framework and its core principles such as components, reactivity, and the virtual DOM
                                                    Familiarity with the Vue.js ecosystem, including Vue CLI, Vuex, Vue Router, and Nuxt.js
                                                    Good understanding of HTML5 and CSS3, including Sass
                                                    Understanding of server-side rendering and its benefits and use cases
                                                    Knowledge of functional programming and object-oriented programming paradigms
                                                    Ability to write efficient, secure, well-documented, and clean JavaScript code
                                                    Familiarity with automated JavaScript testing, specifically testing frameworks such as Jest or Mocha
                                                    Proficiency with modern development tools, like Babel, Webpack, and Git
                                                    Experience with both consuming and designing RESTful APIs
                                                </p>
                                                <h6>Benefits:</h6>

                                                <p>
                                                    Opportunity to work on highly challenging international projects.
                                                    Opportunity to travel & work with International clients.
                                                    Flexible and friendly work environment
                                                    Great organizational culture, focus on employee's well-being.
                                                </p>

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>

                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                            <Accordion.Header><h6>Sr. Nest Js Developer</h6> </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                        <div className={styles.hirringdropdownmaincontainer1} >
                                            <Accordion className={styles.hirringdropdowncontextouter}>
                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                                    <Accordion.Header className={styles.hirringdropdownDivContext}
                                                    ><h6>Sr. Vue Js Developer</h6>  </Accordion.Header>
                                                    <Accordion.Body className={styles.hirringdropdowncontext}
                                                    >

                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>

                                                            <h6>Please find below-mentioned JD</h6>

                                                <h6>Position:</h6> <p>Nest  JS Developer</p>


                                                            <h6>Position:</h6> <p>Vue JS Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Skill:</h6>
                                                            <p>
                                                                Highly proficient with the JavaScript language and its modern ES6+ syntax and features
                                                                Highly proficient with Vue.js framework and its core principles such as components,
                                                                reactivity, and the virtual DOM

                                                                Familiarity with the Vue.js ecosystem, including Vue CLI, Vuex, Vue Router, and Nuxt.js
                                                                Good understanding of HTML5 and CSS3
                                                                Understanding of server-side rendering and its benefits and use cases
                                                                Knowledge of functional programming and object-oriented programming paradigms
                                                                Ability to write efficient, secure, well-documented, and clean JavaScript code
                                                                Familiarity with automated JavaScript testing, specifically testing frameworks such as Jest or
                                                                Mocha

                                                                Proficiency with modern development tools, like Babel, Webpack, and Git
                                                                Experience with both consuming and designing RESTful API

                                                            </p>
                                                            <h6>Your main responsibilities:</h6>

                                                            <p>
                                                                Developing user-facing applications using Vue.js
                                                                Building modular and reusable components and libraries
                                                                Optimizing your application for performance
                                                                Implementing automated testing integrated into development and maintenance workflows
                                                                Staying up to date with all recent developments in the JavaScript and Vue.js space
                                                                Keeping an eye on security updates and issues found with Vue.js and all project
                                                                dependencies

                                                                Proposing any upgrades and updates necessary for keeping up with modern security and
                                                                development best practices

                                                <h6>Responsibilities:</h6>

                                                <p>
                                                    Developing backend services using Node.js
                                                    Writing clean, efficient, and maintainable code
                                                    Collaborating with cross-functional teams to develop and implement new features
                                                    Participating in code reviews and providing feedback to other developers
                                                    Building scalable and high-performance APIs
                                                    Designing and implementing data models and database schema
                                                    Integrating third-party services and APIs into the application
                                                    Writing automated tests to ensure code quality and stability
                                                    Troubleshooting and debugging issues in production environments
                                                    Staying up-to-date with the latest trends and best practices in Node.js and Nest.js development
                                                </p>
                                                
                                                <h6>
                                                    Requirements:
                                                </h6>

                                                <p>
                                                    2+ years of experience developing backend applications with Node.js and Nest.js
                                                    Strong proficiency in JavaScript and TypeScript
                                                    Experience with RESTful APIs, WebSocket, and Microservices
                                                    Experience with SQL and NoSQL databases such as MySQL, MongoDB, and PostgreSQL
                                                    Familiarity with containerization and deployment tools like Docker and Kubernetes
                                                    Experience with version control systems such as Git
                                                    Good understanding of software development principles and practices, including Agile and Scrum methodologies
                                                    Strong analytical and problem-solving skills
                                                    Excellent communication and collaboration skills

                                                </p>
                                                <h6>Benefits:</h6>

                                                <p>
                                                    Opportunity to work on highly challenging international projects.
                                                    Opportunity to travel & work with International clients.
                                                    Flexible and friendly work environment
                                                    Great organizational culture, focus on employee's well-being.
                                                </p>

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                            <Accordion.Header><h6>Sr. React Js Developers</h6> 
                                            </Accordion.Header>
                                            <Accordion.Body>
                                               
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p>React  JS Developer</p>


                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Responsibilities:</h6>

                                                <p>
                                                    Meeting with the development team to discuss user interface ideas and applications.
                                                    Reviewing application requirements and interface designs.
                                                    Identifying web-based user interactions.
                                                    Developing and implementing highly responsive user interface components using react concepts.
                                                    Writing application interface codes using JavaScript following react.js workflows.
                                                    Troubleshooting interface software and debugging application codes.
                                                    Developing and implementing front-end architecture to support user interface concepts.
                                                    Monitoring and improving front-end performance.
                                                    Documenting application changes and developing updates.
                                                </p>
                                                
                                                <h6>
                                                    Requirements:
                                                </h6>

                                                <p>
                                                    Bachelor’s degree in computer science, information technology, or a similar field.
                                                    2-3 years of experience working as a react.js developer.
                                                    In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.
                                                    Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.
                                                    Experience with user interface design.
                                                    Knowledge of performance testing frameworks including Mocha and Jest.
                                                    Experience with browser-based debugging and performance testing software.
                                                    Excellent troubleshooting skills.
                                                    Good project management skills.
                                                </p>
                                                <h6>Benefits:</h6>

                                                <p>
                                                    Opportunity to work on highly challenging international projects.
                                                    Opportunity to travel & work with International clients.
                                                    Flexible and friendly work environment
                                                    Great organizational culture, focus on employee's well-being.
                                                </p>

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>

                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                            <Accordion.Header><h6>Sr. Angular Developer</h6>   </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p>Angular  JS Developer</p>


                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Job Description:</h6>

                                                <p>
                                                   We are looking for a developer whose primary responsibility will be to quickly learn to design and develop applications, and to coordinate with the rest of the team working on different layers of the infrastructure. Thus, a commitment to collaborative problem solving, sophisticated design, and product quality is essential.
                                                </p>
                                                
                                                <h6>
                                                    Requirements:
                                                </h6>

                                                <p>
                                                    Develop user interfaces using the Angular framework
                                                    Work closely with web developers and backend engineers
                                                    Create high-performing, responsive, and interactive web applications
                                                    Unit-test the code and debug the application.
                                                    Create custom directives and components
                                                    Experience with unit testing tools like Karma or Jasmine
                                                    Good debugging skills.

                                                </p>
                                                <h6>Benefits:</h6>


                                                            </p>


                                                            <h6>Benefits:</h6>

                                                            <p>
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="6">
                                            <Accordion.Header><h6>Sr. Ember Js Developer</h6>   </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>


                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                                    <Accordion.Header><h6>Sr. Next Js Developer</h6>  </Accordion.Header>
                                                    <Accordion.Body>

                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>

                                                <h6>Position:</h6> <p>Ember  JS Developer</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Next  JS Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>

                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Your main responsibilities:</h6>

                                                            <p>
                                                                Develop and maintain our web applications using Next.js, Node.js, React.js, and MongoDB.
                                                                Collaborate with the team to design and implement new features and functionalities.
                                                                Work closely with the UX/UI team to ensure seamless user experience across all platforms.
                                                                Optimize the application for maximum speed and scalability.
                                                                Troubleshoot and debug issues that arise in the development process.
                                                                Stay up to date with the latest technologies and frameworks in the industry.
                                                            </p>

                                                            <h6>
                                                                Requirements:
                                                            </h6>

                                                            <p>
                                                                Minimum of 1 year of experience in Next.js, Node.js, React.js, and MongoDB.
                                                                Strong proficiency in JavaScript and its core principles.
                                                                Experience with Git and code versioning tools.
                                                                Understanding of server-side rendering and API development.
                                                                Familiarity with agile development methodologies.
                                                                Excellent communication and collaboration skills.
                                                                Bachelor's degree in Computer Science, Engineering, or a related field is preferred.

                                                            </p>
                                                            <h6>Benefits:</h6>

                                                            <p>
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>

                                                <h6>Job Description:</h6>

                                                <p>
                                                   We are looking for a developer whose primary responsibility will be to quickly learn to design and develop applications, and to coordinate with the rest of the team working on different layers of the infrastructure. Thus, a commitment to collaborative problem solving, sophisticated design, and product quality is essential.
                                                </p>
                                                
                                                <h6>
                                                   Responsibilities:
                                                </h6>

                                                <p>
                                                    Hands-on experience in writing applications using Node Js and Ember js (Express).

                                                    1- Must be good in MySQL or one of the databases such as Mongo.

                                                    2- Should be proficient in Linux or Ubuntu Environment with complete knowledge of Application deployment.
                                                    3- Excellent data structure; algorithm and problem-solving skills.

                                                    4- Knowledge about servers’ deployments and System Architecture.

                                                    5- Customer-focused, react well to changes, work with teams and able to multi-task.

                                                    6- Must be a proven performer and team player that enjoy challenging assignments in a high-energy, fast growing and start-up workplace.

                                                    7- Must be a self-starter who can work well with minimal guidance and in fluid environment.


                                                </p>
                                                <h6>Key Skills Required:</h6>

                                                <p>
                                                    Node.Js, Ember.js, React.Js or Angular.Js, MongoDB, Express.Js,Python,Bootstrap.4.X,HTML5,CSS,d3.js,In memory like redis.
                                                </p>

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="7">
                                            <Accordion.Header><h6>Sr. Swift Js Developer</h6>   </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>

                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                                    <Accordion.Header> <h6>Sr. Nuxt Js</h6>  </Accordion.Header>
                                                    <Accordion.Body>

                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>

                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>

                                                <h6>Position:</h6> <p>Swift  JS Developer</p>



                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Nuxt  JS Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>

                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job description </h6>

                                                            <p>
                                                                Developing user-facing applications using Vue.js
                                                                Building modular and reusable components and libraries
                                                                Optimizing your application for performance
                                                                Implementing automated testing integrated into development and maintenance workflows
                                                                Staying up-to-date with all recent developments in the JavaScript and Vue.js space
                                                                Keeping an eye on security updates and issues found with Vue.js and all project dependencies
                                                                Proposing any upgrades and updates necessary for keeping up with modern security and development best practices

                                                            </p>

                                                            <h6>
                                                                Required Knowledge / Skills:
                                                            </h6>

                                                <h6>Job Description:</h6>

                                                <p>
                                                   We are looking for a developer whose primary responsibility will be to quickly learn to design and develop applications, and to coordinate with the rest of the team working on different layers of the infrastructure. Thus, a commitment to collaborative problem solving, sophisticated design, and product quality is essential.
                                                </p>
                                                
                                                <h6>
                                                   Duties & Responsibilities:
                                                </h6>

                                                <p>
                                                    Design and build Mobile applications in iOS or Android or Flutter.
                                                    Working with the Interface Builder
                                                    Writing clean, maintainable, testable code and improving application performance
                                                    Working closely with the product, back-end, and design teams

                                                </p>
                                                <h6>Key Skills Required:</h6>

                                                <p>
                                                    Design and build advanced applications for your mobile platform (iOS, Android, Flutter).
                                                    Solid understanding of the full mobile development life cycle
                                                    A deep familiarity with the core development Language (Swift, Obj-C, Java, Dart…etc.)
                                                    Knowledge of Push Notifications & JSON Parsing
                                                    Basics of Google map & social media integration and customization
                                                    Ability to learn new technology, integration with existing technology pieces using Web Services/ APIs
                                                    Working knowledge of interfacing with Bluetooth/Wi-Fi/IOT and related services
                                                    Knowledge in node.js, GIT is a plus.
                                                    Practical experience in Smart Watch development is a plus.    
                                                </p>

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="8">
                                            <Accordion.Header><h6>Sr. Meteor Js Developer</h6>   </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>


                                                            <p>
                                                                Highly proficient with the JavaScript language and its modern syntax and features
                                                                Highly proficient with Vue.js framework and its core principles such as components, reactivity, and the virtual DOM
                                                                Familiarity with the Vue.js ecosystem, including Vue CLI, Vuex, Vue Router, and Nuxt.js
                                                                Good understanding of HTML5 and CSS3, including Sass
                                                                Understanding of server-side rendering and its benefits and use cases
                                                                Knowledge of functional programming and object-oriented programming paradigms
                                                                Ability to write efficient, secure, well-documented, and clean JavaScript code
                                                                Familiarity with automated JavaScript testing, specifically testing frameworks such as Jest or Mocha
                                                                Proficiency with modern development tools, like Babel, Webpack, and Git
                                                                Experience with both consuming and designing RESTful APIs
                                                            </p>
                                                            <h6>Benefits:</h6>

                                                            <p>
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>

                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                                    <Accordion.Header><h6>Sr. Nest Js Developer</h6> </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>

                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>

                                                <h6>Position:</h6> <p>Meteor JS Developer</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Nest  JS Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Responsibilities:</h6>

                                                            <p>
                                                                Developing backend services using Node.js
                                                                Writing clean, efficient, and maintainable code
                                                                Collaborating with cross-functional teams to develop and implement new features
                                                                Participating in code reviews and providing feedback to other developers
                                                                Building scalable and high-performance APIs
                                                                Designing and implementing data models and database schema
                                                                Integrating third-party services and APIs into the application
                                                                Writing automated tests to ensure code quality and stability
                                                                Troubleshooting and debugging issues in production environments
                                                                Staying up-to-date with the latest trends and best practices in Node.js and Nest.js development
                                                            </p>

                                                <h6>Job Description:</h6>

                                                <p>
                                                   Our company is seeking a talented and experienced Senior Meteor JS Developer to join our team. The ideal candidate will have a strong background in Meteor JS development and be able to develop high-quality, scalable, and reliable web applications.
                                                </p>
                                                
                                                <h6>
                                                   Responsibilities:
                                                </h6>

                                                <p>
                                                • Develop and maintain web applications using Meteor JS
                                                • Collaborate with cross-functional teams to design, develop, and implement new features
                                                • Write clean, maintainable, and efficient code
                                                • Participate in code reviews and provide constructive feedback to peers
                                                • Identify and address performance bottlenecks
                                                • Troubleshoot and debug issues as they arise
                                                • Stay up-to-date with emerging trends and technologies in web development

                                                </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                • Bachelor's or Master's degree in Computer Science or a related field
                                                • Minimum of 5 years of experience in Meteor JS development
                                                • Experience in designing and developing scalable and reliable web applications
                                                • Strong proficiency in JavaScript, HTML, CSS, and related web technologies
                                                • Solid understanding of databases and experience with MongoDB
                                                • Experience with React, Redux, and Node.js
                                                • Familiarity with agile development methodologies
                                                • Excellent problem-solving skills and attention to detail
                                                • Strong communication and collaboration skills
                                                • Ability to work independently and as part of a team
                                                • Strong work ethic and passion for software development
                                                <br/>
                                                We offer a competitive salary, comprehensive benefits package, and opportunities for growth and advancement within the company. If you meet the requirements and are interested in this exciting opportunity, please apply with your resume and a cover letter.
                                                </p>
                                                

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        
                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="9">
                                            <Accordion.Header><h6>Sr. Polymer Js Developer</h6>   </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>
                                                                Requirements:
                                                            </h6>

                                                            <p>
                                                                2+ years of experience developing backend applications with Node.js and Nest.js
                                                                Strong proficiency in JavaScript and TypeScript
                                                                Experience with RESTful APIs, WebSocket, and Microservices
                                                                Experience with SQL and NoSQL databases such as MySQL, MongoDB, and PostgreSQL
                                                                Familiarity with containerization and deployment tools like Docker and Kubernetes
                                                                Experience with version control systems such as Git
                                                                Good understanding of software development principles and practices, including Agile and Scrum methodologies
                                                                Strong analytical and problem-solving skills
                                                                Excellent communication and collaboration skills

                                                            </p>
                                                            <h6>Benefits:</h6>

                                                            <p>
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                                    <Accordion.Header><h6>Sr. React Js Developers</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>

                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>



                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>

                                                <h6>Position:</h6> <p>Senior Polymer  JS Developer</p>



                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>

                                                            <h6>Position:</h6> <p>React  JS Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Job Description:</h6>

                                                <p>
                                                  Our company is seeking an experienced Senior Polymer JS Developer to join our team. As a Senior Polymer JS Developer, you will be responsible for developing and maintaining high-quality web applications using Polymer JS framework. The ideal candidate must have a strong understanding of Polymer JS and its related technologies, as well as experience leading projects and mentoring junior developers.
                                                </p>
                                                
                                                <h6>
                                                   Responsibilities:
                                                </h6>

                                                <p>
                                                Develop and maintain web applications using Polymer JS framework
                                                Collaborate with designers and back-end developers to create responsive and user-friendly interfaces
                                                Write clean, efficient, and well-documented code
                                                Participate in code reviews and provide constructive feedback to junior developers
                                                Work closely with project managers to ensure timely delivery of projects
                                                Stay up-to-date with the latest trends and technologies in web development

                                                </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                Bachelor's degree in Computer Science or a related field
                                                5+ years of experience in web development
                                                Extensive knowledge of Polymer JS framework and its related technologies
                                                Experience leading projects and mentoring junior developers
                                                Strong understanding of HTML, CSS, and JavaScript
                                                Familiarity with agile development methodologies
                                                Excellent problem-solving and analytical skills
                                                Strong communication and teamwork skills
                                                Ability to work independently and manage multiple tasks simultaneously
                                                <br/>If you meet the above requirements and are excited about the opportunity to work with a dynamic team on cutting-edge projects, please submit your application along with your resume and a cover letter.

                                                </p>
                                                

                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="10">
                                            <Accordion.Header><h6>Sr. Alpine Js Developer</h6>   </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>


                                                            <h6>Responsibilities:</h6>

                                                            <p>
                                                                Meeting with the development team to discuss user interface ideas and applications.
                                                                Reviewing application requirements and interface designs.
                                                                Identifying web-based user interactions.
                                                                Developing and implementing highly responsive user interface components using react concepts.
                                                                Writing application interface codes using JavaScript following react.js workflows.
                                                                Troubleshooting interface software and debugging application codes.
                                                                Developing and implementing front-end architecture to support user interface concepts.
                                                                Monitoring and improving front-end performance.
                                                                Documenting application changes and developing updates.
                                                            </p>

                                                            <h6>
                                                                Requirements:
                                                            </h6>

                                                            <p>
                                                                Bachelor’s degree in computer science, information technology, or a similar field.
                                                                2-3 years of experience working as a react.js developer.
                                                                In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.
                                                                Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.
                                                                Experience with user interface design.
                                                                Knowledge of performance testing frameworks including Mocha and Jest.
                                                                Experience with browser-based debugging and performance testing software.
                                                                Excellent troubleshooting skills.
                                                                Good project management skills.
                                                            </p>
                                                            <h6>Benefits:</h6>

                                                            <p>
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>

                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                                    <Accordion.Header><h6>Sr. Angular Developer</h6>   </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>


                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <h6>Position:</h6> <p>Senior Alpine JS Developer</p>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>

                                                   <h6>Position:</h6> <p>Angular  JS Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <p>
                                                   We are looking for a highly skilled Senior Alpine JS Developer to join our team. The ideal candidate will be responsible for building complex web applications using Alpine JS framework. The candidate must have strong expertise in Alpine JS, JavaScript, HTML, CSS and be able to work independently and collaboratively in a fast-paced environment.
                                                </p>
                                                
                                                <h6>
                                                   Responsibilities:
                                                </h6>

                                                <p>
                                                Develop web applications using Alpine JS framework.
                                                Collaborate with designers and developers to build scalable and interactive web applications.
                                                Write clean, efficient, and maintainable code.
                                                Conduct code reviews and provide feedback to team members.
                                                Ensure web applications are accessible, responsive, and cross-browser compatible.
                                                Optimise web applications for speed and performance.
                                                Debug and troubleshoot issues related to Alpine JS and web applications.
                                                Stay up-to-date with the latest technologies and best practices in web development.

                                                </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                Bachelor's degree in Computer Science or a related field.
                                                At least 5 years of experience in front-end web development.
                                                Strong expertise in Alpine JS, JavaScript, HTML, CSS, and related front-end technologies.
                                                Experience building complex web applications using Alpine JS.
                                                Knowledge of web accessibility standards and best practices.
                                                Strong debugging and troubleshooting skills.
                                                Strong communication and collaboration skills.
                                                Experience working in an Agile development environment.
                                                Strong problem-solving and analytical skills.
                                                <br/>If you are passionate about Alpine JS development and have a strong desire to build innovative web applications, we encourage you to apply for this exciting opportunity.



                                                </p>
                  
                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="11">
                                            <Accordion.Header><h6>Sr. Gatsby Js Developer</h6>   </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>


                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Description:</h6>

                                                            <p>
                                                                We are looking for a developer whose primary responsibility will be to quickly learn to design and develop applications, and to coordinate with the rest of the team working on different layers of the infrastructure. Thus, a commitment to collaborative problem solving, sophisticated design, and product quality is essential.
                                                            </p>

                                                            <h6>
                                                                Requirements:
                                                            </h6>

                                                            <p>
                                                                Develop user interfaces using the Angular framework
                                                                Work closely with web developers and backend engineers
                                                                Create high-performing, responsive, and interactive web applications
                                                                Unit-test the code and debug the application.
                                                                Create custom directives and components
                                                                Experience with unit testing tools like Karma or Jasmine
                                                                Good debugging skills.

                                                            </p>
                                                            <h6>Benefits:</h6>

                                                            <p>
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="6">
                                                    <Accordion.Header><h6>Sr. Ember Js Developer</h6>   </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>

                                                <h6>Position:</h6> <p>Senior Gatsby JS Developer</p>



                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>

                                                            <h6>Position:</h6> <p>Ember  JS Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Description:</h6>

                                                            <p>
                                                                We are looking for a developer whose primary responsibility will be to quickly learn to design and develop applications, and to coordinate with the rest of the team working on different layers of the infrastructure. Thus, a commitment to collaborative problem solving, sophisticated design, and product quality is essential.
                                                            </p>

                                                            <h6>
                                                                Responsibilities:
                                                            </h6>

                                                <p>
                                                   Our company is looking for a Senior Gatsby JS Developer to join our team. The ideal candidate will be responsible for developing and maintaining our company's websites and web applications using Gatsby JS. The candidate should be well-versed in modern web development techniques and possess a solid understanding of Gatsby JS. They should also be able to work effectively in a team environment, collaborating with designers, developers, and stakeholders to ensure timely and successful project delivery.
                                                </p>
                                                
                                                <h6>
                                                   Responsibilities:
                                                </h6>

                                                <p>
                                                Develop and maintain web applications and websites using Gatsby JS.
                                                Collaborate with designers, developers, and stakeholders to ensure timely and successful project delivery.
                                                Write clean, maintainable, and efficient code.
                                                Troubleshoot and debug issues that arise in production and staging environments.
                                                Ensure the best possible performance, quality, and responsiveness of web applications and websites.
                                                Stay up-to-date with emerging trends and technologies in web development.

                                                </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                5+ years of experience in web development.
                                                Strong proficiency in Gatsby JS and related technologies (React, GraphQL, Node.js, etc.).
                                                Experience with building and maintaining large-scale web applications and websites.
                                                Proficient understanding of web markup, including HTML5, CSS3, and JavaScript.
                                                Familiarity with Git and version control systems.
                                                Excellent problem-solving skills.
                                                Excellent communication and collaboration skills.
                                                Strong attention to detail.
                                                Nice to have:
                                                Experience with other front-end frameworks and libraries (Angular, Vue, etc.).
                                                Experience with back-end development using Node.js, Ruby on Rails, or similar frameworks.
                                                Familiarity with cloud computing services (AWS, Google Cloud, etc.).
                                                <br/>If you meet the above requirements and are interested in joining our team as a Senior Gatsby JS Developer, please submit your resume and portfolio for consideration.
                                                </p>
                      

                                                            <p>
                                                                Hands-on experience in writing applications using Node Js and Ember js (Express).

                                                                1- Must be good in MySQL or one of the databases such as Mongo.

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="11">
                                            <Accordion.Header><h6>Sr. Jest Js Developer</h6>   </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer1}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>


                                                                2- Should be proficient in Linux or Ubuntu Environment with complete knowledge of Application deployment.
                                                                3- Excellent data structure; algorithm and problem-solving skills.

                                                                4- Knowledge about servers’ deployments and System Architecture.

                                                                5- Customer-focused, react well to changes, work with teams and able to multi-task.

                                                                6- Must be a proven performer and team player that enjoy challenging assignments in a high-energy, fast growing and start-up workplace.

                                                                7- Must be a self-starter who can work well with minimal guidance and in fluid environment.


                                                            </p>
                                                            <h6>Key Skills Required:</h6>

                                                            <p>
                                                                Node.Js, Ember.js, React.Js or Angular.Js, MongoDB, Express.Js,Python,Bootstrap.4.X,HTML5,CSS,d3.js,In memory like redis.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>


                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="7">
                                                    <Accordion.Header><h6>Sr. Swift Js Developer</h6>   </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>Position:</h6> <p>Senior Jest JS Developer</p>


                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>

                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Swift  JS Developer</p>

                                                <p>
                                                We are seeking a highly skilled Senior Jest.js Developer to join our team. The ideal candidate should have extensive experience in using Jest.js testing framework to write automated tests and have a strong understanding of web development principles. The successful candidate will be responsible for developing and maintaining automated tests, identifying and troubleshooting software defects, and collaborating with other developers to ensure the quality of our software products.
                                                </p>
                                                
                                                <h6>
                                                   Responsibilities:
                                                </h6>

                                                <p>
                                                Develop and maintain automated tests using Jest.js
                                                Collaborate with other developers to ensure the quality of our software products
                                                Identify and troubleshoot software defects
                                                Participate in code reviews and provide constructive feedback
                                                Continuously improve the testing process and methodologies
                                                Stay up-to-date with the latest trends and best practices in Jest.js and web development

                                                </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                Bachelor's degree in Computer Science or related field
                                                At least 5 years of experience in software development and testing
                                                Strong proficiency in Jest.js testing framework
                                                Proficiency in JavaScript and related technologies (e.g., React, Node.js)
                                                Experience with Agile/Scrum development methodologies
                                                Excellent problem-solving and troubleshooting skills
                                                Strong communication and collaboration skills
                                                Ability to work independently and in a team environment
                                                Experience with continuous integration and deployment (CI/CD) tools is a plus
                                                <br/>If you meet the above requirements and are passionate about software testing and development, we encourage you to apply for this exciting opportunity.

                                                </p>
                                                


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Description:</h6>

                                                            <p>
                                                                We are looking for a developer whose primary responsibility will be to quickly learn to design and develop applications, and to coordinate with the rest of the team working on different layers of the infrastructure. Thus, a commitment to collaborative problem solving, sophisticated design, and product quality is essential.
                                                            </p>

                                                            <h6>
                                                                Duties & Responsibilities:
                                                            </h6>

                                                            <p>
                                                                Design and build Mobile applications in iOS or Android or Flutter.
                                                                Working with the Interface Builder
                                                                Writing clean, maintainable, testable code and improving application performance
                                                                Working closely with the product, back-end, and design teams

                                                            </p>
                                                            <h6>Key Skills Required:</h6>

                                                            <p>
                                                                Design and build advanced applications for your mobile platform (iOS, Android, Flutter).
                                                                Solid understanding of the full mobile development life cycle
                                                                A deep familiarity with the core development Language (Swift, Obj-C, Java, Dart…etc.)
                                                                Knowledge of Push Notifications & JSON Parsing
                                                                Basics of Google map & social media integration and customization
                                                                Ability to learn new technology, integration with existing technology pieces using Web Services/ APIs
                                                                Working knowledge of interfacing with Bluetooth/Wi-Fi/IOT and related services
                                                                Knowledge in node.js, GIT is a plus.
                                                                Practical experience in Smart Watch development is a plus.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>

                                            <div className={styles.hirringmaincontainer1}>
                                                <div className={styles.hirringouterDiv}>
                                                    <h4>Apply Now!</h4>
                                                    <input type="text" placeholder="Enter Your Name" />
                                                    <input type="text" placeholder="Enter Email" />
                                                    <input type="text" placeholder="Enter Phone number" />
                                                    <input type="text" placeholder="Job Category" />
                                                    <label>Experience</label>
                                                    <input type="number" placeholder="Year" />
                                                    <input type="number" placeholder="Month" />
                                                    <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                                    <input type="file" className={styles.hirringChooseFile} />
                                                    <p>Please upload Only pdf,rtf, docx and doc files
                                                        <br />Please upload CV.</p>
                                                    <button>Apply</button>
                                                </div>
                                            </div>

                                        </div>

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

                                    <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }} >

                                        <div className={styles.hirringdropdownmaincontainer1} >
                                            <Accordion className={styles.hirringdropdowncontextouter}>
                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                                    <Accordion.Header className={styles.hirringdropdownDivContext}
                                                    ><h6>Sr. Andriod App Developer</h6>  </Accordion.Header>
                                                    <Accordion.Body className={styles.hirringdropdowncontext}
                                                    >
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior Android App Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Description:</h6>

                                                            <p>
                                                                As a Senior Android Application Developer, you will help to create multiple custom mobile applications. You will work closely with other developers in the team.

                                                                •Proven work experience as an Android developer, minimum 5 years.
                                                                •In-depth knowledge of Android development with Java and Kotlin.
                                                                •Understanding of architectural patterns such as MVVM.
                                                                • Experience working with remote data via REST and JSON.
                                                                •Experience with the SDLC and agile methodologies.
                                                                • Working knowledge of the general mobile landscape, architectures, trends, and emerging technologies
                                                                • Experience with performance and memory tuning with tools.
                                                                •Familiarity with OOP design principles.
                                                                •Experience with data structures and algorithms.
                                                                •Understanding of Android Unit and UI testing frameworks
                                                                •Ability to use critical thinking and sound judgement.
                                                                •Working knowledge of industry trends and technologies.
                                                                •Experience publishing build in the google play store
                                                                •Experience with NFC, Google Maps, Navigation, Google Pay, Material Design, View Binding, Hilt, Biometric, Networking/WiFi is a plus.
                                                                •eMobility experience is a plus.
                                                                • Familiarity with code versioning tools like GIT.
                                                            </p>

                                                            <h6>Benefits:</h6>

                                                            <p>
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                                    <Accordion.Header><h6>Sr. IOS App Developer</h6>  </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>

                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>

                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>

                                                            <h6>Please find below-mentioned JD</h6>

                                                            <h6>Position:</h6> <p>Senior Ios developer</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>

                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Full Job Description:</h6>
                                                            <p>
                                                                We are looking to hire a talented iOS developer to design, build, and maintain the next generation of iOS applications. Your primary focus will be developing high-end iOS applications for the latest Apple mobile devices. Your duties may include collaborating with the design team for new application features, identifying and fixing application bottlenecks, maintaining the core code, and updating applications published on the App Store.
                                                                To ensure success as an iOS developer, you should have a strong working knowledge of iOS Frameworks, be proficient in Objective-C, and be able to work as part of a team. Ultimately, an outstanding iOS developer should be able to create functional, attractive applications that perfectly meet the needs of the user.

                                                            </p>
                                                            <h6>iOS Developer Responsibilities::</h6>

                                                            <p>Designing and building mobile applications for Apple’s iOS platform.
                                                                Collaborating with the design team to define app features.
                                                                Ensuring quality and performance of the application to specifications.
                                                                Identifying potential problems and resolving application bottlenecks.
                                                                Fixing application bugs before the final release.
                                                                Publishing application on App Store.
                                                                Maintaining the code and atomization of the application.
                                                                Designing and implementing application updates.
                                                            </p>

                                                            <h6>iOS Developer Requirements::</h6>
                                                            <p>
                                                                Bachelor’s degree in computer science or software engineering.
                                                                Proven experience as an app developer.
                                                                Proficient in Objective-C, Swift, and Cocoa Touch.
                                                                Extensive experience with iOS Frameworks such as Core Data and Core Animation.
                                                                Knowledge of iOS back-end services.
                                                                Knowledge of Apple’s design principles and application interface guidelines.
                                                                Proficient in code versioning tools including Mercurial, Git, and SVN.
                                                                Knowledge of C-based libraries.
                                                                Familiarity with push notifications, APIs, and cloud messaging.
                                                                Experience with continuous integration.

                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>

                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                                    <Accordion.Header> <h6>Sr. React Native App Developer</h6>  </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior reacts native developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Role Responsibilities:</h6>
                                                            <p>
                                                                As a Software engineer, one should work on the latest technologies to address the telecom business critical requirements.
                                                                As a part of this role, you will have to demonstrate technical skills and implement enterprise level coding using Java script, HTML5, CSS3, SASS, JavaScript (ES6+), Rect Native, JQuery, React JS and micro services. React Native developer interested in building performant mobile apps on both the iOS and Android platforms.

                                                            </p>
                                                            <h6>
                                                                Requirements
                                                            </h6>
                                                            <p>
                                                                Academic degree (BE / MCA) with 4 plus years of experience in software implementation using frontend and backend technologies.
                                                                Strong expertise with HTML, CSS, and writing cross-browser compatible code.
                                                                Hand on experience with HTML5, CSS3, SASS, JavaScript (ES6+), JQuery, ReactJS and React Native
                                                                Thorough understanding of React.js, React Native and its core principles.
                                                                Knowledge of isomorphic React is a plus.
                                                                Familiarity with RESTful APIs
                                                                Knowledge of modern authorization mechanisms, such as JSON Web Token
                                                                Familiarity with modern front-end build pipelines and tools
                                                                A knack for benchmarking and optimization
                                                                Familiarity with native build tools, like XCode, Gradle, Android Studio, IntelliJ.

                                                            </p>
                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                                    <Accordion.Header><h6>Sr. Flutter Developer</h6> </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Sr. Flutter Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Role Responsibilities:</h6>
                                                            <p>
                                                                Design and build sophisticated and interactive apps using Flutter.
                                                                Build custom packages in Flutter using the functionalities and APIs already available in native Android and IOS.
                                                                Translate and build the designs and Wireframes into high quality responsive UI code.
                                                                Explore feasible architectures for implementing new features.
                                                                Resolve any problems existing in the system and suggest and add new features in the complete system.
                                                                Suggest space and time efficient Data Structures.
                                                                Follow the best practices while developing the app and also keeping everything structured and well documented.
                                                                Document the project and code efficiently.
                                                                Manage the code and project on Git in order to keep in sync with other team members and managers.
                                                                Ensure security guidelines are always followed while developing the app.
                                                                Perform time profiling and memory leaks assessment.
                                                                Write unit tests for the App.

                                                            </p>
                                                            <h6>
                                                                Desired Candidate Profile:
                                                            </h6>
                                                            <p>
                                                                Must have 5+ years of experience in Android and iOS applications development with at least 3 years of strong experience using Flutter.
                                                                Strong experience in consuming native iOS and Android features in Futter application using native bridge.
                                                                Strong in maintaining Development standards and best practices
                                                                Strong debugging and problem-solving skills
                                                                Strong understanding of application security principles
                                                                App development experience in Travel/e-commerce domain
                                                                Knowledge of object-oriented principles/programming
                                                                Experience with RESTful APIs to connect iOS and Android applications with backend services.
                                                                Experience with working with JSON, XML data
                                                                Knowledge of third-party libraries and APIs like Maps, audio/video streaming & animations.
                                                                Experience with Payment SDKs/API integration with Flutter App
                                                                Experience with integrating social platforms in Flutter App

                                                            </p>
                                                            <h6>Skills</h6>
                                                            <p> Dart, Flutter, Android, iOS, Java/Kotlin, swift/objective-c, Git, Firebase, Rive</p>
                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                                    <Accordion.Header><h6>Sr. Xamarian Developer</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior Xamarian Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                We are looking for a talented Senior Xamarin.Forms Developer who is keen on crafting solid cross platform functional and testable software, within a global agile environment.

                                                                The application stack is Xamarin.Forms clients backed by most azure services available to date.

                                                                The position is based in our Bangalore office.

                                                                The successful candidate will be required to occasionally travel to Singapore.


                                                            </p>
                                                            <h6>
                                                                Requirements:
                                                            </h6>
                                                            <p>
                                                                The ideal candidate should have:


                                                                a guru knowledge of the Xamarin framework, especially Xamarin.Forms
                                                                a guru knowledge of Xamarin Xaml
                                                                a guru knowledge of .Net Core
                                                                a guru knowledge of design patterns extensively used in Cross-Platform development, such as MVVM, MVC, Dependency Injection, Observable
                                                                a proven TDD / BDD practitioner familiar with testing packages such as cucumber, nunit, specflow
                                                                take pride in writing elegant code
                                                                keen on applying best practices
                                                                Desirable But Not Essential


                                                                knowledge of Microsoft Azure stack related to Mobile Apps
                                                                be comfortable with agile processes
                                                                be able to contribute to the DevOps, share ideas, innovate
                                                                knowledge of Asp.Net Core
                                                                Xamarin certified developer

                                                            </p>
                                                            <h6>Skills</h6>
                                                            <p> Dart, Flutter, Android, iOS, Java/Kotlin, swift/objective-c, Git, Firebase, Rive</p>
                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                                    <Accordion.Header> <h6>Sr. Ionic Developer</h6>  </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior reacts native developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job description:</h6>
                                                            <p>
                                                                Should have expertise in hybrid mobile app development using JavaScript, IONIC Framework, Angular, HTML5, CSS3, Bootstrap, Typescript, ES6, jQuery.
                                                                Experience with GIT, Mobile app release on iTunes and play store, Managing small team.

                                                                Candidates Role
                                                                Designing and building mobile applications IONIC framework
                                                                Leading the team and mentoring team members
                                                                Working closely with other technical specialists for the technical architecture of features
                                                                Collaborating with other teams to define app features and dependencies
                                                                Ensuring the quality and performance of the application to specifications.
                                                                Identifying potential problems and resolving application bottlenecks.
                                                                Publishing application on App Store.
                                                                Designing and implementing application updates.

                                                            </p>
                                                            <h6>
                                                                Requirements
                                                            </h6>
                                                            <p>
                                                                Academic degree (BE / MCA) with 4 plus years of experience in software implementation using frontend and backend technologies.
                                                                Strong expertise with HTML, CSS, and writing cross-browser compatible code.
                                                                Hand on experience with HTML5, CSS3, SASS, JavaScript (ES6+), JQuery, ReactJS and React Native
                                                                Thorough understanding of React.js, React Native and its core principles.
                                                                Knowledge of isomorphic React is a plus.
                                                                Familiarity with RESTful APIs
                                                                Knowledge of modern authorization mechanisms, such as JSON Web Token
                                                                Familiarity with modern front-end build pipelines and tools
                                                                A knack for benchmarking and optimization
                                                                Familiarity with native build tools, like XCode, Gradle, Android Studio, IntelliJ.

                                                            </p>
                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="6">
                                                    <Accordion.Header><h6>Sr. Kotlin Developer</h6> </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>

                                                            <h6>Position:</h6> <p>Sr. Kotlin Developer</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job description:</h6>
                                                            <p>
                                                                - Contribute to the development of Android applications.
                                                                - Analysis of requirements from internal and external customers.
                                                                - Design and develop new products and software components.
                                                                - Investigate and solve issues reported by internal and external customers.
                                                                - Validate and execute unit tests, and automated UI tests to identify application errors and ensure software meet functional specs.
                                                                - Work closely with product design UX to develop a new client experience.
                                                                - Develop and maintain high-quality code using industry best practices.
                                                                You must have:
                                                                - 5+ years of experience in Kotlin.
                                                                - Experience debugging Java/Kotlin native applications.
                                                                - Experience with modern Android development technologies (Android SDK, etc.)
                                                                Strong UI development skills.
                                                                - Knowledge of REST API services and Native mobile development.
                                                                - Advanced English level.

                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="7">
                                                    <Accordion.Header><h6>Sr. Cross Platform App Developer</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Sr. Cross Platform App Developer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>
                                                                Job Description:
                                                            </h6>
                                                            <p>
                                                                The developer should have experience in developing native applications for both Android and iOS platforms, as well as cross-platform applications using Flutter. They should have a solid understanding of mobile app design patterns, architecture, and development best practices.
                                                                Responsibilities may include collaborating with cross-functional teams, creating wireframes and mockups, designing and developing mobile applications, conducting unit testing, and troubleshooting issues.
                                                                Other skills that may be required for the job include knowledge of API integration, familiarity with mobile app security best practices, experience with version control systems such as Git, and strong problem-solving and communication skills. The developer should also have an understanding of the mobile app submission process to the respective app stores.


                                                            </p>
                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>


                                            </Accordion>

                                            <div className={styles.hirringmaincontainer1}>
                                                <div className={styles.hirringouterDiv}>
                                                    <h4>Apply Now!</h4>
                                                    <input type="text" placeholder="Enter Your Name" />
                                                    <input type="text" placeholder="Enter Email" />
                                                    <input type="text" placeholder="Enter Phone number" />
                                                    <input type="text" placeholder="Job Category" />
                                                    <label>Experience</label>
                                                    <input type="number" placeholder="Year" />
                                                    <input type="number" placeholder="Month" />
                                                    <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                                    <input type="file" className={styles.hirringChooseFile} />
                                                    <p>Please upload Only pdf,rtf, docx and doc files
                                                        <br />Please upload CV.</p>
                                                    <button>Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>
                                        <div className={styles.hirringdropdownmaincontainer1} >
                                            <Accordion className={styles.hirringdropdowncontextouter}>
                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                                    <Accordion.Header className={styles.hirringdropdownDivContext}
                                                    ><h6>Sr. SEO Analyst</h6>  </Accordion.Header>
                                                    <Accordion.Body className={styles.hirringdropdowncontext}
                                                    >
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>


                                                            <h6>Web: <a href='https://bottomfunnel.net/'>https://bottomfunnel.net/</a></h6>

                                                            <h6>Web: <a href='https://service.bottomfunnel.net/'>https://service.bottomfunnel.net/</a></h6>


                                                            <h6>LinkedIn: <a href='https://www.linkedin.com/company/bottomfunnel/'>https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href='https://www.linkedin.com/company/blueberrygroup-co/'>https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior SEO Analyst</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>


                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Key Focus area:</h6>

                                                            <p>MY Sql, HTML 5, CSS3, JavaScript, laravel, Cake PHP, Symfony, Codeignitor, Zend Yii, Symfony, Slim, Phpixie REST API</p>


                                                            <p>
                                                                Brand Strategy Operations, Recruitment Operations Marketing, Business Development Operations, Digital Marketing Activities, ASO, SEO, SEM, SMM, PPC,ORM Marketing Analytics, Jira, SEMrush, Ahrefs, MailChimp, HubSpot, Upwork, Project Handling.

                                                                The ideal candidate will expand the company's brand presence by finding the target audience to distribute marketing content to. You will create and implement the marketing strategy using both offline and online methods to gain new customers. The ideal candidate is both a self-motivated individual and a positive team player.
                                                            </p>

                                                            <h6>ROLES AND RESPONSIBILITIES</h6>

                                                            <p>Plan and execute digital marketing campaigns
                                                                Monitor and analyze effectiveness of marketing content
                                                                Develop and manage website content
                                                                Find and target audiences
                                                                Someone with B2B SaaS marketing experience (4+ years)
                                                                A hands-on person who likes to get into the weeds and execute, not just build plans
                                                                Deep understanding of demand generation vs. demand capture
                                                                Someone in tune with current marketing trends and shifts
                                                                A badass copywriter. We believe every revenue professional must write a good copy because the pen is mightier than the sword.
                                                                Work on search engine optimization, keyword research, backlink creation
                                                                Meta tag and content optimization
                                                                Provide SEO analysis and recommendations in coordination with elements and structure of websites and web pages
                                                                Learn new skills and stay on top of the fast-paced changes in the SEO industry
                                                                Build traffic and promote sales via the website
                                                                Write a social media plan and regular blog posts (social media outlets include, but are not limited to, Facebook - including fan page management, Instagram, LinkedIn, Twitter, and Pinterest)
                                                                Make recommendations for online strategies tied to online brand presence with sales and lead generation in mind
                                                                Produce a weekly strategy to improve the organization's digital presence
                                                                Bring traffic to the company's website and social media page.
                                                                Produce innovative ideas for social media & stay up to date with current trends in social media.</p>

                                                            <h6>What you’ll be doing:</h6>

                                                            <p>
                                                                Working alongside our founders to help in positioning and developing the overarching growth strategy
                                                                Manage the marketing budget
                                                                Demand generation and demand capture activities
                                                                Working alongside our PPC specialist to run paid search, paid social, retargeting campaigns
                                                                Organic content marketing and SEO, Email marketing, Social Media Marketing, Lead nurturing, Community marketing
                                                                Organizing webinars for brand awareness and educating our target audience
                                                                Working closely with the sales team to get their feedback on the interest generated from above-mentioned marketing activities
                                                                Owning the website rebuild
                                                                Owning website traffic and all inbound leads
                                                                Own conversion KPIs directly affecting revenue
                                                                Aware about the bidding strategies used in digital marketing like CPC, CPM, CR, ROI, ECPC, ECPM, CTR
                                                            </p>

                                                            <h6>Perks and Benefits:</h6>
                                                            <p>You’ll be working directly with our founders so sky's the limit for budget, performance based pays, brainstorming out-of-the-box ideas, and taking risks together!
                                                                Be part of a fast scaling company, you’re getting tickets to the front row
                                                                Work with a global team.
                                                                You’ll grow as fast as the company
                                                                Opportunity to work on highly challenging international projects.
                                                                Opportunity to travel & work with International clients.
                                                                Flexible and friendly work environment
                                                                Great organisational culture, focus on employee's well-being.
                                                                Work-life balance.
                                                                Be part of the best place to work for certified company</p>

                                                            <h6>Skills and Qualifications:</h6>
                                                            <p>
                                                                Bachelor’s degree in IT & Business Marketing is preferred
                                                            </p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                                    <Accordion.Header><h6>Sr. PPC Analyst</h6>  </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior PPC Analyst</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Develop and execute PPC campaigns across various platforms, including Google Ads, Bing Ads, and social media advertising platforms.
                                                                Conduct keyword research and analysis to identify opportunities for campaign optimization and expansion.
                                                                Create and optimize ad copy, targeting, and bidding strategies to improve campaign performance.
                                                                Monitor campaign performance and provide regular reports to stakeholders, including insights and recommendations for improvement.
                                                                Conduct A/B testing and other experiments to improve campaign performance and drive growth.
                                                                Stay up-to-date with industry trends and best practices, and share knowledge with the team to improve overall PPC performance.
                                                            </p>
                                                            <h6>Requirements:</h6>

                                                            <p>
                                                                Bachelor's degree in marketing, business, or a related field.
                                                                At least 4–5 years of experience managing and optimizing PPC campaigns.
                                                                Experience with Google Ads, Bing Ads, and social media advertising platforms.
                                                                Strong analytical skills and experience working with web analytics tools, such as Google Analytics.
                                                                Excellent written and verbal communication skills, with the ability to present complex data and insights in a clear and concise manner.
                                                                Ability to work independently and as part of a team, with strong project management skills and attention to detail.
                                                                Strong understanding of PPC metrics and KPIs, with a track record of driving results through campaign optimization and testing.
                                                                Google Ads and/or Bing Ads certifications are a plus.
                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                                    <Accordion.Header> <h6>Sr. ASO Analyst</h6>  </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior ASO Analyst</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Conduct app store optimization (ASO) research and analysis to identify keywords, trends, and best practices.
                                                                Develop and implement ASO strategies to improve the app's ranking, visibility, and user acquisition.
                                                                Monitor and track the app's performance metrics, including downloads, ratings, reviews, and user retention.
                                                                Analyze user feedback and behavior to optimize the app's features, UI/UX, and content.
                                                                Collaborate with cross-functional teams to ensure the app's alignment with the company's goals and brand guidelines.
                                                                Keep up-to-date with the latest ASO trends, tools, and technologies to continuously improve the app's performance.

                                                            </p>
                                                            <h6>Requirements:</h6>

                                                            <p>
                                                                Bachelor's degree in Marketing, Computer Science, or related fields.
                                                                5+ years of experience in ASO, app marketing, or related areas.
                                                                Proven track record of improving the app's ranking, visibility, and user acquisition.
                                                                In-depth knowledge of ASO tools, metrics, and best practices.
                                                                Strong analytical skills and experience with data-driven decision making.
                                                                Excellent communication, presentation, and teamwork skills.
                                                                Ability to work in a fast-paced and dynamic environment.
                                                                Fluency in English, both written and verbal.
                                                                Experience with mobile app development and design is a plus.

                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                                    <Accordion.Header><h6>Sr. SEM Analyst</h6> </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior SEM Analyst</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>


                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Plan, execute and optimize paid search campaigns across multiple search engines and platforms including Google Ads, Bing Ads, and other search engine marketing channels.
                                                                Conduct keyword research, ad copy creation and testing, and landing page optimization to improve campaign performance.
                                                                Analyze data and make recommendations to improve campaign performance, increase conversions and drive ROI.
                                                                Monitor and report on key metrics such as click-through rates, conversion rates, and cost per acquisition (CPA).
                                                                Work with cross-functional teams including designers, developers, and copywriters to create high-quality landing pages, ads, and other marketing assets.
                                                                Stay up-to-date with the latest SEM trends, technologies, and best practices and make recommendations for improvements based on industry standards.
                                                                Mentor and train junior SEM Analysts on best practices, strategies and tools for improving SEM performance.

                                                            </p>
                                                            <h6>Requirements:</h6>

                                                            <p>
                                                                Bachelor's degree in Marketing, Business, or a related field.
                                                                4+ years of experience in managing SEM campaigns across multiple search engines and platforms.
                                                                In-depth knowledge of Google Ads and Bing Ads platforms, as well as SEM industry best practices.
                                                                Strong analytical skills with the ability to analyze complex data and provide insights and recommendations.
                                                                Experience with Google Analytics or other web analytics tools.
                                                                Ability to work independently and collaboratively in a fast-paced, dynamic environment.
                                                                Excellent communication skills with the ability to present findings and recommendations to stakeholders.
                                                                Knowledge of HTML, CSS, and JavaScript is a plus.

                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                                    <Accordion.Header><h6>Sr. SMM Analyst</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior SMM Analyst</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary</h6>
                                                            <p>
                                                                We are seeking a highly motivated and experienced Social Media Manager to join our team. The successful candidate will be responsible for creating, managing, and executing social media campaigns across various social media platforms to increase brand awareness, engage with our target audience, and drive traffic to our website. The Social Media Manager will also be responsible for analyzing social media metrics and adjusting campaigns as needed to ensure optimal results.

                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                • Develop and execute social media strategies to increase brand awareness, engagement, and website traffic
                                                                • Create and curate content for social media platforms, including Facebook, Instagram, Twitter, LinkedIn, and YouTube
                                                                • Manage social media accounts, including scheduling posts, responding to comments, and engaging with followers
                                                                • Monitor social media metrics and use data to optimize campaigns and report on progress to senior management
                                                                • Work closely with the content team to ensure consistency and alignment between social media and other marketing initiatives
                                                                • Stay up-to-date with social media trends, tools, and best practices, and provide recommendations to improve campaigns

                                                            </p>
                                                            <h6>Requirements:</h6>

                                                            <p>
                                                                • Bachelor's degree in marketing, communications, or a related field
                                                                • Proven experience as a Social Media Manager or similar role
                                                                • Excellent written and verbal communication skills
                                                                • Strong analytical and problem-solving skills
                                                                • Experience with social media analytics tools such as Google Analytics, Hootsuite, and Sprout Social
                                                                • Knowledge of social media advertising and marketing strategies
                                                                • Ability to work independently and as part of a team
                                                                • Creative and strategic thinking skills

                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                                    <Accordion.Header><h6>Sr. Digital Marketer</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior Digital marketer</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary</h6>
                                                            <p>
                                                                We are seeking a highly skilled Senior Digital Marketer to develop and implement digital marketing strategies that will drive online traffic, increase customer engagement, and generate revenue for our organization. The ideal candidate should have extensive experience in digital marketing techniques, possess excellent communication skills, and have a track record of managing successful digital marketing campaigns.

                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Develop and implement digital marketing strategies that align with the organization's goals and objectives
                                                                Conduct research and analysis to identify target audience, market trends, and competitor activities
                                                                Develop and manage comprehensive digital marketing campaigns across multiple platforms including social media, email, search engine marketing, and display advertising
                                                                Create engaging content that will resonate with the target audience and enhance customer engagement
                                                                Monitor and analyze the performance of digital marketing campaigns, and make data-driven recommendations for optimization
                                                                Collaborate with cross-functional teams including content creators, designers, and developers to ensure alignment of messaging and branding across all digital channels
                                                                Stay up-to-date with the latest digital marketing trends, technologies, and best practices, and integrate them into the organization's marketing strategy
                                                                Manage digital marketing budgets and allocate resources effectively to achieve maximum ROI

                                                            </p>
                                                            <h6>Requirements:</h6>

                                                            <p>
                                                                Bachelor's degree in marketing, business administration, or a related field
                                                                At least 5 years of experience in digital marketing, with a proven track record of managing successful digital marketing campaigns
                                                                Strong knowledge of digital marketing techniques including SEO, SEM, email marketing, social media marketing, and display advertising
                                                                Experience with marketing automation platforms and CRM systems
                                                                Excellent written and verbal communication skills, with the ability to craft engaging content and communicate effectively with cross-functional teams
                                                                Strong analytical skills, with the ability to interpret data and make data-driven recommendations for optimization
                                                                Ability to manage multiple projects simultaneously, prioritize effectively, and meet deadlines
                                                                Strong leadership skills, with the ability to mentor and train junior members of the digital marketing team
                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="6">
                                                    <Accordion.Header><h6>Sr. Digital Marketer Manager</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Senior Digital Marketer Manager</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary</h6>
                                                            <p>
                                                                We are seeking a highly skilled Senior Digital Marketer to develop and implement digital marketing strategies that will drive online traffic, increase customer engagement, and generate revenue for our organization. The ideal candidate should have extensive experience in digital marketing techniques, possess excellent communication skills, and have a track record of managing successful digital marketing campaigns.

                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Develop and implement digital marketing strategies that align with the organization's goals and objectives
                                                                Conduct research and analysis to identify target audience, market trends, and competitor activities
                                                                Develop and manage comprehensive digital marketing campaigns across multiple platforms including social media, email, search engine marketing, and display advertising
                                                                Create engaging content that will resonate with the target audience and enhance customer engagement
                                                                Monitor and analyze the performance of digital marketing campaigns, and make data-driven recommendations for optimization
                                                                Collaborate with cross-functional teams including content creators, designers, and developers to ensure alignment of messaging and branding across all digital channels
                                                                Stay up-to-date with the latest digital marketing trends, technologies, and best practices, and integrate them into the organization's marketing strategy
                                                                Manage digital marketing budgets and allocate resources effectively to achieve maximum ROI

                                                            </p>
                                                            <h6>Requirements:</h6>

                                                            <p>
                                                                Bachelor's degree in marketing, business administration, or a related field
                                                                At least 5 years of experience in digital marketing, with a proven track record of managing successful digital marketing campaigns
                                                                Strong knowledge of digital marketing techniques including SEO, SEM, email marketing, social media marketing, and display advertising
                                                                Experience with marketing automation platforms and CRM systems
                                                                Excellent written and verbal communication skills, with the ability to craft engaging content and communicate effectively with cross-functional teams
                                                                Strong analytical skills, with the ability to interpret data and make data-driven recommendations for optimization
                                                                Ability to manage multiple projects simultaneously, prioritize effectively, and meet deadlines
                                                                Strong leadership skills, with the ability to mentor and train junior members of the digital marketing team
                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="7">
                                                    <Accordion.Header><h6>Sr. Performance Manager / Growth Hacker</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Performance Manager/ Growth Hacker</p>


                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary</h6>
                                                            <p>
                                                                We are seeking a highly skilled and experienced Senior Performance Manager to lead and manage the performance management program of our organization. The Senior Performance Manager will be responsible for developing and implementing performance strategies, frameworks, and metrics to evaluate, measure, and optimize organizational and individual performance. The ideal candidate will have a strong background in performance management, data analysis, and change management, along with excellent communication and leadership skills.
                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Develop and implement performance strategies and frameworks that align with the organization's goals and objectives.
                                                                Establish and maintain performance metrics and reporting mechanisms to measure and analyze organizational and individual performance.
                                                                Conduct regular performance evaluations, identify performance gaps, and provide recommendations for improvement.
                                                                Collaborate with internal stakeholders to ensure the integration of performance management initiatives into business operations.
                                                                Develop and implement change management strategies to drive performance improvement.
                                                                Develop and implement training programs and performance coaching initiatives to improve individual and team performance.
                                                                Communicate performance expectations, goals, and results to employees, managers, and executives.
                                                                Monitor and analyze industry trends and best practices to continuously improve performance management initiatives.
                                                            </p>
                                                            <h6>Requirements:</h6>

                                                            <p>
                                                                Bachelor's or Master's degree in Business Administration, Human Resources, or a related field.
                                                                Minimum of 7 years of experience in performance management, data analysis, or a related field.
                                                                Strong knowledge of performance management principles, methodologies, and tools.
                                                                Proven ability to develop and implement performance management strategies and frameworks that align with organizational goals.
                                                                Excellent data analysis and interpretation skills, including experience with performance metrics and data visualization tools.
                                                                Strong leadership and communication skills, with the ability to collaborate with internal stakeholders and lead cross-functional teams.
                                                                Proven ability to drive change and implement performance improvement initiatives.
                                                                Excellent problem-solving skills and the ability to identify and address performance gaps and issues.
                                                                Demonstrated ability to manage multiple priorities and meet tight deadlines.
                                                                Experience with HR technology, including performance management software and HR information systems, is preferred.
                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="8">
                                                    <Accordion.Header><h6>Sr. Technical Content Writer</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer2}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p> Sr. Technical Content Writer</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary</h6>
                                                            <p>
                                                                We are seeking a highly skilled and experienced Senior Performance Manager to lead and manage the performance management program of our organization. The Senior Performance Manager will be responsible for developing and implementing performance strategies, frameworks, and metrics to evaluate, measure, and optimize organizational and individual performance. The ideal candidate will have a strong background in performance management, data analysis, and change management, along with excellent communication and leadership skills.
                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                We are looking for a Content Marketing Writer & Strategist to help us create engaging content and assets with the goal of nurturing leads and increasing brand awareness and conversion. As a key contributor on the marketing team, you’ll develop, write and produce compelling content that tells the BOTTOM FUNNEL story and helps grow our brand and our business. The ideal candidate is someone who thrives in a fast-paced environment, enjoys researching, loves finding the right words to connect with customers and partners and is enthused about the dynamic world of TV and video advertising and technology products

                                                                We’re looking for a writer with expertise in multi-platform, multi-format content with an understanding of marketing, SEO and the ability to write to specific audience segments.
                                                            </p>
                                                            <h6>Qualifications:</h6>

                                                            <p>
                                                                4+ years of experience in a marketing content role, ideally at a B2B-focused company
                                                                Knowledge of the TV advertising space, preferably with experience creating content about streaming, connected TV (CTV) or related technologies and platforms.
                                                                Demonstrated success creating content for different channels and formats (you’ll be asked to share writing samples/your portfolio)
                                                                Exceptional writing and editing skills and able to tailor content to established voice and tone guidelines
                                                                Experience collaborating with sales, demand gen, product, and design teams on integrated campaigns and content-forward initiatives
                                                                Self-starter with excellent organizational skills who can drive content projects from start to finish
                                                                Ability to think strategically, prioritize, and deliver multiple projects with tight deadlines in a rapidly changing environment
                                                                Tech Savvy – Use and embrace technology as a tool to enhance effectiveness; adept at learning new technologies quickly
                                                                Expertise in multi-platform, multi-format content
                                                                An understanding of SEO and the ability to write to specific audience segments
                                                                Excellent communication skills
                                                                Keen eye for detail
                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>

                                            <div className={styles.hirringmaincontainer1}>
                                                <div className={styles.hirringouterDiv}>
                                                    <h4>Apply Now!</h4>
                                                    <input type="text" placeholder="Enter Your Name" />
                                                    <input type="text" placeholder="Enter Email" />
                                                    <input type="text" placeholder="Enter Phone number" />
                                                    <input type="text" placeholder="Job Category" />
                                                    <label>Experience</label>
                                                    <input type="number" placeholder="Year" />
                                                    <input type="number" placeholder="Month" />
                                                    <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                                    <input type="file" className={styles.hirringChooseFile} />
                                                    <p>Please upload Only pdf,rtf, docx and doc files
                                                        <br />Please upload CV.</p>
                                                    <button>Apply</button>
                                                </div>
                                            </div>

                                        </div>

                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="9">
                                            <Accordion.Header><h6>Sr. Lead Generation Executive</h6> 
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer2}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p> Sr. Lead Generation Executive</p>

                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Job Summary</h6>
                                                <p>
                                                We are seeking a highly motivated and results-driven Sr. Lead Generation Executive to join our growing team. As a Sr. Lead Generation Executive, you will be responsible for developing and executing lead generation campaigns that drive qualified leads to our sales team. You will also be responsible for managing and mentoring a team of Lead Generation Executives.
                                                </p>

                                                <h6>Responsibilities:</h6>  
                                                <p>
                                                Develop and execute lead generation campaigns across multiple channels, including email, social media, and paid advertising
                                                Identify and target key decision-makers at target accounts
                                                Develop and maintain a comprehensive database of leads and prospects
                                                Analyze campaign performance data to optimize campaigns for maximum ROI
                                                Manage and mentor a team of Lead Generation Executives
                                                Collaborate with sales and marketing teams to develop lead generation strategies that align with overall business goals
                                                Stay up-to-date with the latest lead generation trends and best practices

                                               </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                Bachelor's degree in marketing, business, or a related field
                                                5+ years of experience in lead generation or digital marketing
                                                Strong understanding of lead generation strategies and tactics
                                                Experience managing a team of Lead Generation Executives
                                                Proven track record of driving qualified leads and achieving ROI targets
                                                Excellent communication and interpersonal skills
                                                Strong analytical and problem-solving skills
                                                Ability to work in a fast-paced environment and manage multiple projects simultaneously
                                                <br/>If you are a self-starter with a passion for lead generation and a track record of driving results, we encourage you to apply for this exciting opportunity.

                                                </p>

                                                <h6>Benefits</h6>
                                                <p>
                                                    Opportunity to work on highly challenging international projects.

                                                    Opportunity to travel & work with International clients.

                                                    Flexible and friendly work environment

                                                    Great organizational culture, focus on employee's well-being.
                                                </p>
                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="10">
                                            <Accordion.Header><h6>Jr. SEO Analyst</h6> 
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer2}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p>Jr. SEO Analyst</p>

                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Job Summary</h6>
                                                <p>
                                                We are seeking a Jr. SEO Analyst to join our digital marketing team. The ideal candidate should have a passion for digital marketing, data analysis, and search engine optimization. As a Jr. SEO Analyst, you will be responsible for assisting with the development, implementation, and monitoring of SEO campaigns for our clients. This role requires strong analytical skills, attention to detail, and the ability to work independently and as part of a team.
                                               </p>

                                                <h6>Responsibilities:</h6>  
                                                <p>
                                                Conduct keyword research and analysis to identify opportunities for SEO improvement
                                                Assist with the development of on-page and off-page optimization strategies
                                                Perform technical SEO audits and recommend solutions to improve website performance
                                                Analyze website traffic and provide regular reporting on key metrics and trends
                                                Monitor search engine algorithm updates and make recommendations for adjustments to SEO strategies
                                                Stay up-to-date with industry trends and best practices in SEO

                                               </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                Bachelor's degree in Marketing, Business, or a related field
                                                1-2 years of experience in SEO or digital marketing
                                                Knowledge of SEO best practices and techniques
                                                Proficiency in Google Analytics, Google Search Console, and other SEO tools
                                                Strong analytical and problem-solving skills
                                                Excellent written and verbal communication skills
                                                Ability to work independently and as part of a team
                                                Detail-oriented with strong organizational skills
                                                <br/>If you meet the above requirements and are excited about the opportunity to work in a fast-paced and dynamic environment, please submit your resume and cover letter for consideration.

                                                </p>

                                                <h6>Benefits</h6>
                                                <p>
                                                    Opportunity to work on highly challenging international projects.

                                                    Opportunity to travel & work with International clients.

                                                    Flexible and friendly work environment

                                                    Great organizational culture, focus on employee's well-being.
                                                </p>
                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="11">
                                            <Accordion.Header><h6>Jr. SEM Analyst</h6> 
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer2}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p>Jr. SEM Analyst</p>

                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Job Summary</h6>
                                                <p>
                                                We are seeking a Jr. SEM Analyst to join our team. The Jr. SEM Analyst will be responsible for assisting with the development and execution of paid search campaigns across various search engines. The ideal candidate will have experience in search engine marketing (SEM) and a strong analytical mindset.

                                                </p>

                                                <h6>Responsibilities:</h6>  
                                                <p>
                                                Assist in the creation and optimization of paid search campaigns across various search engines, including Google Ads and Bing Ads.
                                                Conduct keyword research and analysis to identify new opportunities for campaign expansion and optimization.
                                                Monitor and analyze campaign performance data, including impressions, clicks, conversions, and costs, and make recommendations for optimization.
                                                Work with the team to develop and implement testing plans to improve campaign performance.
                                                Assist in the creation of ad copy and landing page optimization.
                                                Stay up-to-date with the latest trends and developments in SEM.

                                               </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                Bachelor's degree in marketing, business, or a related field.
                                                1-2 years of experience in SEM or a related field.
                                                Experience with Google Ads and Bing Ads.
                                                Strong analytical skills and the ability to analyze data to identify trends and opportunities.
                                                Strong communication skills, both written and verbal.
                                                Detail-oriented and organized.
                                                Ability to work in a fast-paced environment and manage multiple tasks simultaneously.
                                                Basic knowledge of HTML, CSS, and JavaScript is a plus.
                                                <br/>If you meet the requirements for this position and are interested in working with a dynamic team, please submit your resume and cover letter. We look forward to hearing from you!

                                                </p>

                                                <h6>Benefits</h6>
                                                <p>
                                                    Opportunity to work on highly challenging international projects.

                                                    Opportunity to travel & work with International clients.

                                                    Flexible and friendly work environment

                                                    Great organizational culture, focus on employee's well-being.
                                                </p>
                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item className={styles.hirringdropdowncontext} eventKey="12">
                                            <Accordion.Header><h6>Jr. SMM Analyst</h6> 
                                            </Accordion.Header>
                                            <Accordion.Body>
                                            <div className={styles.hirringJdDataContainer2}>
                                                <h6>About Company</h6>
                                                <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                <h6>Please find below-mentioned JD</h6>


                                                <h6>Position:</h6> <p>Jr. SMM Analyst</p>

                                                <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                <h6>Job Summary</h6>
                                                <p>
                                                We are seeking a highly motivated Jr SMM Analyst to join our team. The Jr SMM Analyst will be responsible for supporting the social media marketing efforts of our clients, analyzing data, and creating reports. The ideal candidate will have a passion for social media, be highly analytical, and possess excellent communication skills.

                                               </p>

                                                <h6>Responsibilities:</h6>  
                                                <p>
                                                Assist with the creation and execution of social media campaigns
                                                Monitor social media accounts and respond to customer inquiries
                                                Analyze social media data and create reports to measure campaign performance
                                                Stay up-to-date with social media trends and best practices
                                                Collaborate with team members to develop social media strategies
                                                Assist with content creation and scheduling

                                               </p>
                                                <h6>Requirements:</h6>

                                                <p>
                                                Bachelor's degree in Marketing, Communications, or related field
                                                1-2 years of experience in social media marketing
                                                Proficient in social media platforms (Facebook, Instagram, Twitter, LinkedIn, etc.)
                                                Strong analytical skills with the ability to interpret data
                                                Excellent written and verbal communication skills
                                                Ability to work in a fast-paced environment and meet deadlines
                                                Strong attention to detail
                                                Experience with social media management tools (e.g. Hootsuite, Buffer, Sprout Social) is a plus
                                                <br/>If you are a creative thinker with a passion for social media, we encourage you to apply for this exciting opportunity.

                                                </p>

                                                <h6>Benefits</h6>
                                                <p>
                                                    Opportunity to work on highly challenging international projects.

                                                    Opportunity to travel & work with International clients.

                                                    Flexible and friendly work environment

                                                    Great organizational culture, focus on employee's well-being.
                                                </p>
                                                <h6>Work-life balance.</h6>
                                                <p>Be part of the best place to work for certified company</p>
                                            </div>
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

                                    <div className={showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }}>
                                        <div className={styles.hirringdropdownmaincontainer1} >
                                            <Accordion className={styles.hirringdropdowncontextouter}>
                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="0">
                                                    <Accordion.Header className={styles.hirringdropdownDivContext}
                                                    ><h6>HR Executive Manager</h6>  </Accordion.Header>
                                                    <Accordion.Body className={styles.hirringdropdowncontext}
                                                    >
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>HR Executive manager</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Job Summary</h6>
                                                            <p>
                                                                We are seeking an experienced and highly motivated HR Executive Manager to oversee the HR department of our organization. The ideal candidate will have a deep understanding of HR policies and procedures, excellent communication and interpersonal skills, and the ability to lead and manage a team of HR professionals.

                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Develop and implement HR policies and procedures in accordance with organizational goals and objectives.
                                                                Oversee the recruitment and selection process, including sourcing candidates, conducting interviews, and making hiring decisions.
                                                                Develop and maintain job descriptions and ensure that all job vacancies are appropriately advertised.
                                                                Manage employee onboarding and offboarding processes, including orientation, training, and exit interviews.
                                                                Develop and maintain employee benefits programs, including health insurance, retirement plans, and employee wellness programs.
                                                                Develop and maintain employee performance evaluation and appraisal systems.
                                                                Manage employee relations, including conflict resolution, grievance procedures, and disciplinary actions.
                                                                Ensure compliance with all federal, state, and local employment laws and regulations.
                                                                Analyze HR metrics and provide reports to senior management on HR-related activities and trends.
                                                                Develop and manage the HR budget and monitor expenses.
                                                            </p>
                                                            <h6>Qualifications:</h6>

                                                            <p>
                                                                Bachelor's or Master's degree in Human Resources, Business Administration, or a related field.
                                                                5+ years of experience in HR management, including experience managing a team of HR professionals.
                                                                Excellent communication and interpersonal skills.
                                                                Strong knowledge of HR policies and procedures and employment laws and regulations.
                                                                Strong analytical and problem-solving skills.
                                                                Ability to lead and manage a team of HR professionals.
                                                                Ability to maintain confidentiality and handle sensitive information.
                                                                Proficiency in HR software and Microsoft Office Suite.

                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="1">
                                                    <Accordion.Header><h6>Sr. HR Executive Manager</h6>  </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p> Sr.HR Executive manager</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary</h6>
                                                            <p>
                                                                We are seeking an experienced and highly motivated HR Executive Manager to oversee the HR department of our organization. The ideal candidate will have a deep understanding of HR policies and procedures, excellent communication and interpersonal skills, and the ability to lead and manage a team of HR professionals.

                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Develop and implement HR policies and procedures that align with the organization's goals and objectives
                                                                Oversee recruitment efforts, including sourcing, screening, interviewing, and hiring candidates
                                                                Develop and implement training and development programs to enhance employee skills and knowledge
                                                                Manage employee relations, including conflict resolution, disciplinary actions, and grievance procedures
                                                                Oversee compensation and benefits programs, including salary planning, performance-based incentives, and employee benefits
                                                                Develop and implement performance management systems that align with the organization's goals and objectives
                                                                Ensure compliance with all employment laws and regulations, including EEO, ADA, FLSA, and FMLA
                                                                Maintain accurate and up-to-date HR records and reports
                                                                Provide HR support and guidance to managers and employees
                                                                Stay up-to-date with HR trends and best practices, and make recommendations for improvements

                                                            </p>
                                                            <h6>Requirements:</h6>

                                                            <p>
                                                                Bachelor's or Master's degree in Human Resources, Business Administration, or a related field
                                                                7+ years of experience in human resources management, with at least 3 years in a senior HR role
                                                                Strong knowledge of employment laws and regulations
                                                                Excellent communication and interpersonal skills
                                                                Strong leadership and management skills
                                                                Proven track record of implementing successful HR initiatives
                                                                Ability to work in a fast-paced environment and manage multiple priorities
                                                                High level of integrity and ethical standards
                                                                SHRM certification is a plus
                                                            </p>

                                                            <h6>Benefits</h6>
                                                            <p>
                                                                Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee's well-being.
                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="2">
                                                    <Accordion.Header> <h6>Business Data Manager</h6>  </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p> Business data manager</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                            <h6>Job Summary:</h6>
                                                            <p>
                                                                Our company is seeking a highly motivated and experienced Business Data Manager to join our team. The successful candidate will be responsible for overseeing the collection, analysis, and management of large sets of business data. The role will involve collaborating with various departments within the organization, ensuring data accuracy and integrity, and creating reports to help inform business decisions.

                                                            </p>
                                                            <h6>Responsibilities:</h6>

                                                            <p>
                                                                Oversee the collection, analysis, and management of large sets of business data.
                                                                Work with various departments within the organization to understand their data needs and provide support as necessary.
                                                                Develop and implement strategies for data governance, quality control, and security.
                                                                Ensure data accuracy and integrity by performing regular audits and implementing data cleansing procedures.
                                                                Create reports and visualizations to help inform business decisions.
                                                                Identify trends and patterns in data and provide insights to relevant stakeholders.
                                                                Collaborate with IT teams to ensure proper data storage, backup, and recovery.
                                                                Stay up-to-date with emerging trends and technologies in the field of data management.

                                                            </p>

                                                            <h6>Qualifications:</h6>
                                                            <p>
                                                                Bachelor's degree in computer science, data management, or related field.
                                                                At least 5 years of experience in data management, business intelligence, or related field.
                                                                Excellent knowledge of data management principles and techniques.
                                                                Proficiency in SQL and experience working with large datasets.
                                                                Experience with data visualization tools such as Tableau or Power BI.
                                                                Excellent communication and collaboration skills.
                                                                Strong analytical and problem-solving skills.
                                                                Experience with data governance, quality control, and security.
                                                                Familiarity with emerging trends and technologies in the field of data management.

                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="3">
                                                    <Accordion.Header><h6>Sr. Business Data Manager</h6> </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Sr. Business data  manager</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>


                                                            <h6>Job Summary:</h6>
                                                            <p>
                                                                We are seeking an experienced Sr. Business Data Manager to join our organization. The Sr. Business Data Manager will be responsible for managing and maintaining our company's data, analyzing trends, and creating reports that help drive business decisions. The ideal candidate will have a strong background in data management, data analysis, and business operations.
                                                            </p>
                                                            <h6>Responsibilities:</h6>

                                                            <p>
                                                                Develop and implement data management policies and procedures.
                                                                Oversee the data collection process, ensuring accuracy, completeness, and reliability.
                                                                Develop and maintain data models, data dictionaries, and other data-related documentation.
                                                                Analyze data to identify trends, patterns, and insights that can inform business decisions.
                                                                Collaborate with cross-functional teams to understand business requirements and identify data-related needs.
                                                                Develop and implement data quality control processes to ensure accuracy and completeness of data.
                                                                Ensure compliance with data privacy and security policies and regulations.
                                                                Communicate data-related insights and findings to stakeholders in a clear and concise manner.

                                                            </p>

                                                            <h6>Requirements:</h6>
                                                            <p>
                                                                Bachelor's or Master's degree in Computer Science, Information Systems, Business Administration or related field.
                                                                8+ years of experience in data management, data analysis, and business operations.
                                                                Experience with data modeling, data warehousing, and data governance.
                                                                Strong analytical and problem-solving skills.
                                                                Excellent communication and interpersonal skills.
                                                                Experience with SQL, Python, or other programming languages.
                                                                Experience with data visualization tools such as Tableau, PowerBI, or QlikView.
                                                                Experience with project management and team leadership.
                                                                Knowledge of data privacy and security regulations such as GDPR and CCPA.

                                                            </p>
                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="4">
                                                    <Accordion.Header><h6>Sr. IT Business Analyst (Pre Sales)</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Sr. IT Business Analyst(Pre Sales)</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary:</h6>
                                                            <p>
                                                                We are seeking a highly skilled Sr. IT Business Analyst to join our pre-sales team. In this role, you will be responsible for identifying, analyzing, and documenting business requirements for IT solutions, as well as communicating those requirements to our sales team and potential clients. The ideal candidate will have extensive experience in IT business analysis, including pre-sales activities, and possess excellent communication and problem-solving skills.
                                                            </p>
                                                            <h6>Responsibilities:</h6>

                                                            <p>
                                                                Work with the sales team to identify potential clients and understand their business needs.
                                                                Conduct requirements gathering sessions with clients to identify their IT solution requirements.
                                                                Analyze and document business requirements and create functional specifications for proposed IT solutions.
                                                                Collaborate with technical teams to ensure the feasibility of proposed solutions and provide input for solution design.
                                                                Develop and present proposals to potential clients that demonstrate the value and feasibility of proposed solutions.
                                                                Work with the sales team to develop and deliver sales presentations and demonstrations of proposed IT solutions.
                                                                Provide subject matter expertise during the sales process to address client questions and concerns.
                                                                Collaborate with project managers and technical teams during the transition from pre-sales to project delivery to ensure a smooth handover.
                                                                Continuously improve pre-sales processes and methodologies to increase efficiency and effectiveness.

                                                            </p>

                                                            <h6>Requirements:</h6>
                                                            <p>
                                                                Bachelor's degree in Computer Science, Information Systems, or a related field.
                                                                At least 8 years of experience in IT business analysis, with a focus on pre-sales activities.
                                                                Strong understanding of IT solutions and technology trends.
                                                                Experience with requirements gathering and analysis, including creating functional specifications.
                                                                Excellent communication skills, including the ability to communicate complex technical concepts to non-technical stakeholders.
                                                                Strong problem-solving skills and the ability to think creatively to develop solutions that meet client needs.
                                                                Ability to work independently and collaboratively in a fast-paced environment.
                                                                Strong attention to detail and the ability to manage multiple tasks simultaneously.
                                                                Familiarity with project management methodologies and tools.

                                                            </p>
                                                            <h6>Benefits</h6>
                                                            <p>Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="5">
                                                    <Accordion.Header><h6>Sr. IT Business Data analyst Sales</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Sr. IT Business Data Analyst Sales</p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary:</h6>

                                                            <p>
                                                                We are looking for an experienced Senior IT Business Data Analyst to join our sales team. The Senior IT Business Data Analyst will be responsible for analyzing sales data, identifying trends, and making recommendations to improve sales performance. The ideal candidate will have a strong understanding of sales processes and data analysis, with experience working in a sales environment.

                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Analyze sales data to identify trends and areas for improvement
                                                                Work with sales teams to identify key performance indicators (KPIs) and develop dashboards to track performance
                                                                Collaborate with cross-functional teams to identify data needs and requirements
                                                                Design, develop and maintain sales data models and reporting tools
                                                                Ensure data accuracy and completeness, and troubleshoot data issues
                                                                Communicate findings and recommendations to stakeholders, including sales leadership, marketing, and product teams
                                                                Continuously improve sales reporting and analysis processes to support business growth
                                                                Keep up-to-date with industry trends and best practices in data analysis and reporting

                                                            </p>
                                                            <h6>Qualifications</h6>
                                                            <p>
                                                                Bachelor's degree in Business Administration, Computer Science, or related field
                                                                5+ years of experience in IT business data analysis, preferably in a sales environment
                                                                Strong analytical and problem-solving skills
                                                                Proficient in SQL, Excel, and data visualization tools (e.g. Tableau, Power BI)
                                                                Familiarity with CRM systems, preferably Salesforce
                                                                Excellent communication and collaboration skills
                                                                Ability to work independently and manage multiple projects simultaneously
                                                                Strong attention to detail and commitment to data accuracy
                                                                Experience with Agile methodologies is a plus

                                                            </p>
                                                            <h6>Benefits</h6>
                                                            <p>Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item className={styles.hirringdropdowncontext} eventKey="6">
                                                    <Accordion.Header><h6>Sr. Marketing Executives</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className={styles.hirringJdDataContainer1}>
                                                            <h6>About Company</h6>
                                                            <h6>Web: <a href="https://bottomfunnel.net/">https://bottomfunnel.net/</a></h6>
                                                            <h6>Web: <a href=" https://service.bottomfunnel.net/"> https://service.bottomfunnel.net/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/bottomfunnel/"> https://www.linkedin.com/company/bottomfunnel/</a></h6>

                                                            <h6>LinkedIn: <a href="https://www.linkedin.com/company/blueberrygroup-co/"> https://www.linkedin.com/company/blueberrygroup-co/</a></h6>


                                                            <p>Bottom Funnel Technologies Private Limited is an Equal Opportunity Employer – By Choice. We believe we are best equipped to help our associates, customers and the communities we serve live better when we really know them. That means understanding, respecting and valuing diversity of unique styles, experiences, identities, ideas and opinions – while being inclusive of all people.</p>


                                                            <p>Bottom Funnel provides the system and framework that modern marketers need to generate clients from scratch. BOTTOM FUNNEL is a 360° digital branding and marketing agency that provides a wide spectrum of internet marketing services to enhance the online presence of all kinds of businesses. We offer global solutions of digital marketing and all IT trending technology solutions, communication through classifieds, web portals, social media networks, advertising channels, and search engines. Our digital experts and business consultants help clients by providing only the best digital marketing strategy to develop through innovation and creativity.</p>


                                                            <h6>Please find below-mentioned JD</h6>


                                                            <h6>Position:</h6> <p>Marketing Executives </p>

                                                            <h6>Employment Type:</h6> <p>Employee - Full Time</p>


                                                            <h6>Work Location:</h6> <p>Jaipur, Rajasthan ( Work From Office Only), Hybrid</p>

                                                            <h6>Notice Period :</h6> <p>Immediate - 30 Days only</p>

                                                            <h6>Experience Required:</h6> <p>3 Years to 8 Years</p>

                                                            <h6>Job Summary:</h6>

                                                            <p>
                                                                We are seeking a highly motivated and talented Marketing Executive to join our team. The successful candidate will be responsible for developing and executing marketing campaigns that will increase brand awareness, drive customer engagement, and generate leads. The Marketing Executive will work closely with the Marketing Manager and other team members to identify new opportunities, develop effective marketing strategies, and measure the success of marketing efforts.
                                                            </p>

                                                            <h6>Responsibilities:</h6>
                                                            <p>
                                                                Develop and execute marketing campaigns across multiple channels, including email, social media, and digital advertising.
                                                                Collaborate with the Marketing Manager and other team members to develop marketing plans and strategies that align with business goals.
                                                                Conduct market research to identify new opportunities, target audiences, and trends in the industry.
                                                                Create content for marketing materials, including emails, social media posts, blogs, and other collateral.
                                                                Measure and report on the success of marketing campaigns using data and analytics tools.
                                                                Manage and maintain the company's social media accounts, ensuring brand consistency and engagement with followers.
                                                                Work with external agencies and vendors as needed to execute marketing campaigns and initiatives.
                                                                Monitor and stay up-to-date with industry trends and best practices.

                                                            </p>
                                                            <h6>Qualifications</h6>
                                                            <p>
                                                                Bachelor's degree in Marketing, Business, or a related field.
                                                                2-3 years of experience in marketing, with a focus on digital marketing and lead generation.
                                                                Strong written and verbal communication skills.
                                                                Knowledge of digital marketing tools and platforms, including email marketing software, social media management tools, and Google Analytics.
                                                                Experience with content creation, including writing blog posts, creating social media content, and developing marketing collateral.
                                                                Ability to work collaboratively with team members and external partners.
                                                                Strong analytical and problem-solving skills.
                                                                Detail-oriented with excellent project management skills.
                                                                Ability to manage multiple projects and priorities in a fast-paced environment.

                                                            </p>
                                                            <h6>Benefits</h6>
                                                            <p>Opportunity to work on highly challenging international projects.

                                                                Opportunity to travel & work with International clients.

                                                                Flexible and friendly work environment

                                                                Great organizational culture, focus on employee well-being.
                                                            </p>

                                                            <h6>Work-life balance.</h6>
                                                            <p>Be part of the best place to work for certified company</p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>

                                            <div className={styles.hirringmaincontainer1}>
                                                <div className={styles.hirringouterDiv}>
                                                    <h4>Apply Now!</h4>
                                                    <input type="text" placeholder="Enter Your Name" />
                                                    <input type="text" placeholder="Enter Email" />
                                                    <input type="text" placeholder="Enter Phone number" />
                                                    <input type="text" placeholder="Job Category" />
                                                    <label>Experience</label>
                                                    <input type="number" placeholder="Year" />
                                                    <input type="number" placeholder="Month" />
                                                    <textarea rows="4" cols="50" placeholder="Enter Description"></textarea>
                                                    <input type="file" className={styles.hirringChooseFile} />
                                                    <p>Please upload Only pdf,rtf, docx and doc files
                                                        <br />Please upload CV.</p>
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

