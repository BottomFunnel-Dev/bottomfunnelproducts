
import styles from "./PricingAddOns.module.css";

import React, { useState } from "react";
export const PricingAddOnsmarketers = () => {


    const orchestrationTransactionPack = (
        <div className={styles.PricingAddOnsParentChildsec}>
            <h2>Marketing Contacts</h2>
            <hr />
            <h3>Purchase additional contact records to expand your marketing outreach.</h3>
            <div>
                <div>
                    <div ><h5 className={styles.PricingAddOnsforspace}>Transaction  :</h5></div>
                    <div><p>Any action taken via the App node in the Workflow Automator</p>
                        <p>1000 Transatiion per pack Starter,Growth,Pro,Enterprise</p></div>
                </div>
                <div>
                    <h5 className={styles.PricingAddOnsforspace}>validity  :</h5>
                    <p>End of Biling cycle</p>
                </div>
            </div>
            <button>Get started For Free</button>

        </div>
    );




    const projectManagement = (
        <div className={styles.PricingAddOnsParentChildsec}>
            <h2>Conversion Rate Optimization</h2>
            <hr />
            <h3>Analyze your website visitors' behavior and optimize your site for improved conversions.</h3>
            <div>
                <div>
                    <div ><h5 className={styles.PricingAddOnsforspace}>Transaction  :</h5></div>
                    <div><p>₹5400 for 1000
                        bot sessions/month</p>
                        {/* <p>1000 Transatiion per pack Starter,Growth,Pro,Enterprise</p> */}
                    </div>
                </div>
                <div>
                    <h5 className={styles.PricingAddOnsforspace}>validity  :</h5>
                    <p>End of Biling cycle</p>
                </div>
            </div>
            <button>Get started For Free</button>

        </div>
    );




    const assestPack = (
        <div className={styles.PricingAddOnsParentChildsec}>
            <h2>Messaging Agent</h2>
            <hr />
            <h3>Get access to the Agent Inbox to manage chat conversations across channels—Email, Chat, SMS, & WhatsApp—in one place</h3>
            <div>
                <div>
                    <div ><h5 className={styles.PricingAddOnsforspace}>Transaction  :</h5></div>
                    <div><p>Any action taken via the App node in the Workflow Automator</p>
                        <p>1000 Transatiion per pack Starter,Growth,Pro,Enterprise</p></div>
                </div>
                <div>
                    <h5 className={styles.PricingAddOnsforspace}>validity  :</h5>
                    <p>End of Biling cycle</p>
                </div>
            </div>
            <button>Get started For Free</button>

        </div>
    );




    const saaSManagement = (
        <div className={styles.PricingAddOnsParentChildsec}>
            <h2>Additional Bot Sessions</h2>
            <hr />
            <h3>Purchase additional bot sessions and automate chat flows.</h3>
            <div>
                <div>
                    <div ><h5 className={styles.PricingAddOnsforspace}>Transaction  :</h5></div>
                    <div><p>Any action taken via the App node in the Workflow Automator</p>
                        <p>1000 Transatiion per pack Starter,Growth,Pro,Enterprise</p></div>
                </div>
                <div>
                    <h5 className={styles.PricingAddOnsforspace}>validity  :</h5>
                    <p>End of Biling cycle</p>
                </div>
            </div>
            <button>Get started For Free</button>

        </div>
    );

    // const businessAgent = (
    //     <div className={styles.PricingAddOnsParentChildsec}>
    //     <h2>Business Agent</h2>
    //     <hr />
    //     <h3>Your Plan</h3>
    //     <div>
    //         <div>
    //             <div ><h5 className={styles.PricingAddOnsforspace}>Transaction  :</h5></div>
    //             <div><p>Any action taken via the App node in the Workflow Automator</p>
    //                 <p>1000 Transatiion per pack Starter,Growth,Pro,Enterprise</p></div>
    //         </div>
    //         <div>
    //             <h5 className={styles.PricingAddOnsforspace}>validity  :</h5>
    //             <p>End of Biling cycle</p>
    //         </div>
    //     </div>
    //     <button>Get started For Free</button>

    // </div>
    // );
    const [addOn, setaddOn] = useState(orchestrationTransactionPack);
    const handleOnClickOrchestration = () => {
        setaddOn(orchestrationTransactionPack)
    }
    const handleOnClickProject = () => {
        setaddOn(projectManagement)
    }


    const handleOnClickAssest = () => {
        setaddOn(assestPack)
    }


    const handleOnClickSaaS = () => {
        setaddOn(saaSManagement)
    }


    // const handleOnClickBusiness = () => {
    //     setaddOn(businessAgent)
    // }




    return (
        <div className={styles.PricingAddOnsParent} >
            <h3>Get add-ons that help you do more with bottom funnel services</h3>
            <div>
                <button>
                    Add ON
                </button>
            </div>

            <div className={styles.PricingAddOnsParentChild} >
                <div className={styles.PricingAddOnsParentChildfirst}>
                    <div onClick={handleOnClickOrchestration}>
                        <h5>Meeting control</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>

                    <div onClick={handleOnClickProject}>
                        <h5>Conversion Rate Optimization</h5>
                        <p>Pro,Enterprise</p>
                    </div>

                    <div onClick={handleOnClickAssest}>
                        <h5>Additional Bot Session</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>

                    <div onClick={handleOnClickSaaS}>
                        <h5>Messaging agent</h5>
                        <p>Pro,Enterprise</p>
                    </div>

                    {/* <div onClick={handleOnClickBusiness}>
                        <h5>Business Agent</h5>
                        <p>Pro,Enterprise</p>
                    </div> */}
                </div>
                {addOn}
            </div>

        </div>
    )
}