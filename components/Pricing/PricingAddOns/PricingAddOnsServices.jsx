
import styles from "./PricingAddOns.module.css";

import React, { useState } from "react";
export const PricingAddOnsServices = () => {


    const orchestrationTransactionPack = (
        <div className={styles.PricingAddOnsParentChildsec}>
            <h2>Orchestration Transaction Pack</h2>
            <hr />
            <h3>Your Plan</h3>
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
            <h2>Project Management</h2>
            <hr />
            <h3>Your Plan</h3>
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
        <h2>Assest Pack</h2>
        <hr />
        <h3>Your Plan</h3>
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




    // const saaSManagement = (
    //     <div className={styles.PricingAddOnsParentChildsec}>
    //     <h2>SaaS Management</h2>
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


    // const handleOnClickSaaS = () => {
    //     setaddOn(saaSManagement)
    // }


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
                        <h5>Orchestration Transaction Pack</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>

                    <div onClick={handleOnClickProject}>
                        <h5>Project Management</h5>
                        <p>Pro,Enterprise</p>
                    </div>

                    <div  onClick={handleOnClickAssest}>
                        <h5>Assest Pack</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>

                    {/* <div onClick={handleOnClickSaaS}>
                        <h5>SaaS Management</h5>
                        <p>Pro,Enterprise</p>
                    </div>

                    <div onClick={handleOnClickBusiness}>
                        <h5>Business Agent</h5>
                        <p>Pro,Enterprise</p>
                    </div> */}
                </div>
                {addOn}
            </div>

        </div>
    )
}