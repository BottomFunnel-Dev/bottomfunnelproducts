import React from "react";
import career from "./CareerReason.module.css";
import { CaerrForm } from "../CarrerForm/CarrerForm";


export const CareerReason = () => {
  return (
    <div className={career.careerReasonContainer}>
      <span>REASON TO</span>
      <h1>
        Why Work with <span>Bottom Funnel</span>
      </h1>
      <div>
        <div className={career.careerReasonContent}>
          <p>
            Bottom Funnel is a start-up company that is committed to creating an
            environment where innovation, communication, and teamwork are valued
            and fostered. We understand that our success depends on the people
            who work here, so we are committed to creating an inclusive
            environment where everyone can thrive. We think it's important for
            everyone in our organization to feel like they have an opportunity
            to grow and contribute. That's why we offer competitive salaries,
            benefits, and opportunities for growth and development. This culture
            of openness leads to great team spirit, and we're proud of how our
            employees interact with each other every day.
          </p>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Get Started
          </button>


          <div>
            <div
              className="modal"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div>
                    <CaerrForm />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className={career.careerReasonImage}>
          <img src="https://d3op2l77j7wnti.cloudfront.net/Images/careerPhotos/reason.png" alt="whyBF.png" />
        </div>
      </div>


    </div>
  );
};
