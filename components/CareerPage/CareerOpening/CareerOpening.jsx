import React from "react";
import career from "./CareerOpening.module.css";
import Accordion from 'react-bootstrap/Accordion';

export const CareerOpening = () => {
  const OpeningData = [
    "SSE - Blockchain Developer",
    "Business Development/Business manager",
    "Content Writer",
    "Angular Developer",
    "Node.js Lead",
    "React.js Developer",
    "Flutter Developer",
    "IOS Engineer",
    "Sr. Devops Engineer",
    "React Native",
  ];

  return (
    <div className={career.careerOpeningContainer}>
      <div className={career.careerOpengingSearchbar}>
        <input type="text" placeholder="Find your role" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>

      <div className={career.careerOpeningFilterButton}>
        <h2>Showing 10 openings</h2>
        <button>
          <p>Filters</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </button>
      </div>

      {/* <div className={career.careerOpengingMain}>
        {OpeningData.map((elem) => (
          <div key={elem}>
            <h2>{elem}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        ))}
      </div> */}

<div className={career.seoFaq_maincontainer}>
                <div className={career.seoFaqdropdownmaincontainer1}>

                    <Accordion className={career.seoFaq_dropdowncontext}>
                        <Accordion.Item className={career.seoFaq_dropdowncontext} eventKey="0">
                            <Accordion.Header className={career.seoFaq_dropdownDivContext}
                            ><h4>What is SEO?</h4>  </Accordion.Header>
                            <Accordion.Body className={career.seoFaq_dropdowncontext}
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

                        <Accordion.Item className={career.seoFaq_dropdowncontext} eventKey="1">
                            <Accordion.Header><h4> Why is SEO Important?</h4>  </Accordion.Header>
                            <Accordion.Body>
                                To book your car, all you need is a credit or debit card. When you pick the car up, you'll need:

                                For most car hire companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70,
                                you might have to pay an additional fee.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.seoFaq_dropdowncontext} eventKey="2">
                            <Accordion.Header> <h4>Is my data safe?</h4>  </Accordion.Header>
                            <Accordion.Body>

                                Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.seoFaq_dropdowncontext} eventKey="3">
                            <Accordion.Header><h4>How to hire a professional SEO services company?</h4> </Accordion.Header>
                            <Accordion.Body>

                                We work with all the major international car hire brands (and lots of smaller local companies)
                                to bring you a huge choice of cars at the very best prices. That's how we can find you cheap car
                                hire deals at over 60,000 locations worldwide. To compare prices and find your ideal car at an unbeatable price, just use our search form.

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className={career.seoFaq_dropdowncontext} eventKey="4">
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

                        <Accordion.Item className={career.seoFaq_dropdowncontext} eventKey="5">
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

                


            </div>

    </div>
  );
};
