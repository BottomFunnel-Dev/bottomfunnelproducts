import React from "react";
import career from "./HirringProcess.module.css";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';

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
        <div className={career.hirringProcessButtons}>
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
                    <h4>
                        Entry level
                    </h4>
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
                    <h4>
                        Entry level
                    </h4>
                    <p>
                        Hirring
                    </p>
                </div>
            </div>
        </div>

        {/* <div className={career.hirringmaincontainer}>
                <div className={career.hirringdropdownmaincontainer1}>

                    <Accordion className={career.hirringdropdowncontext}>
                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="0">
                            <Accordion.Header className={career.hirringdropdownDivContext}
                            ><h4>PHP Developer</h4>  </Accordion.Header>
                            <Accordion.Body className={career.hirringdropdowncontext}
                            >
                                SEO, also known as Search Engine Optimization, is a technique to increase your website’s visibility, traffic and rankings in Search Engines (Google, Yahoo or Bing).
                                <ul>
                                    <li className={career.list_tags}>
                                        The main driver's credit / debit card, with enough available funds for the car's deposit.
                                    </li>
                                    <li>
                                        Each driver's full, valid driving licence, which they've held for at least 12 months (often 24).
                                    </li>

                                    <li>
                                        Your passport and any other ID the car hire company needs to see.
                                    </li>

                                </ul>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="1">
                            <Accordion.Header><h4>Business Analyst</h4>  </Accordion.Header>
                            <Accordion.Body>
                                To book your car, all you need is a credit or debit card. When you pick the car up, you'll need:

                                For most car hire companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70,
                                you might have to pay an additional fee.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="2">
                            <Accordion.Header> <h4>Is my data safe?</h4>  </Accordion.Header>
                            <Accordion.Body>

                                Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="3">
                            <Accordion.Header><h4>How to hire a professional SEO services company?</h4> </Accordion.Header>
                            <Accordion.Body>

                                We work with all the major international car hire brands (and lots of smaller local companies)
                                to bring you a huge choice of cars at the very best prices. That's how we can find you cheap car
                                hire deals at over 60,000 locations worldwide. To compare prices and find your ideal car at an unbeatable price, just use our search form.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="4">
                            <Accordion.Header><h4>Why should I choose bottom funnel for professional SEO services?</h4> 
                            </Accordion.Header>
                            <Accordion.Body>
                                    SEO, also known as Search Engine Optimization, is a technique to increase your website’s visibility, traffic and rankings in Search Engines (Google, Yahoo or Bing).
                                <ul>
                                    <li className={career.list_tags}>
                                        The main driver's credit / debit card, with enough available funds for the car's deposit.
                                    </li>
                                    <li>
                                        Each driver's full, valid driving licence, which they've held for at least 12 months (often 24).
                                    </li>

                                    <li>
                                        Your passport and any other ID the car hire company needs to see.
                                    </li>

                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.hirringdropdowncontext} eventKey="5">
                            <Accordion.Header><h4>When can I expect to see results for my SEO campaigns?</h4>   </Accordion.Header>
                            <Accordion.Body>

                                The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes,
                                airport surcharges and any road fees. You'll pay for any ‘extras' when you pick your car up, along
                                with any young driver, additional driver or one-way fees – but we'll explain any additional costs
                                before you book your car (and taking your own child seats or GPS can be an easy way to reduce your
                                costs). For more details on what's included, just check the Ts&Cs of any car you're looking at.

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                


        </div> */}

      </div>
    </>
  );
};
