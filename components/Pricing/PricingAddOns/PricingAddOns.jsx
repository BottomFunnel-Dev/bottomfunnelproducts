
import styles from "./PricingAddOns.module.css";


export const PricingAddOns = () => {
    return (
        <div className={styles.PricingAddOnsParent}>
            <h3>Get add-ons that help you do more with bottom funnel services</h3>
            <div>
                <button>
                    Add ON
                </button>
            </div>

            <div className={styles.PricingAddOnsParentChild} >
                <div className={styles.PricingAddOnsParentChildfirst}>
                    <div>
                        <h5>Orchestration Transaction Pack</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>

                    <div>
                        <h5>Orchestration Transaction Pack</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>

                    <div>
                        <h5>Orchestration Transaction Pack</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>

                    <div>
                        <h5>Orchestration Transaction Pack</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>

                    <div>
                        <h5>Orchestration Transaction Pack</h5>
                        <p>Started,Growth,Pro,Enterprise</p>
                    </div>
                </div>
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
            </div>

        </div>
    )
}