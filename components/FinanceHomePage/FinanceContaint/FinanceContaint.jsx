import React from 'react'
import style from "./FinanceContaint.module.css";
import Image from 'next/image';

export const FinanceContaint = () => {
    return (
        <div>
            <div className={style.FinanceContaintmaindiv}>
                <div className={style.FinanceContaintinnerdiv}>
                    <div className={style.FinanceContaintinnerdivimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/financesalesimage/banner (9).webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>

                    <div className={style.FinanceContaintinnerdivcontain}>
                        <h4>Organize customer data with modern view</h4>
                        <p>By creating customizable views in a click, Bottom funnel saleslets you access data on one screen and perform your daily tasks faster than before.

                            With quick actions and easy access to customer data from one place, you can visualize where each contact stands and spot roadblocks, thus enhancing your team’s productivity and efficiency.</p>
                        <p>Using drag-and-drop cards and group fields, you can track your contacts’ progress.

                            You can visualize and manage your contacts in a list, table, or Kanban view and work the way you like.</p>
                    </div>
                </div>

                <div className={style.FinanceContaintinnerdiv}>
                    <div className={style.FinanceContaintinnerdivcontain}>
                        <h4>Identify sales-ready leads with AI</h4>
                        <p>Your agents have to secure target accounts. But how do they know if the leads they are reaching out to will convert? This is where a Finance CRM can step in.

                            Bottom funnel salesCRM offers AI-based contact scoring that identifies clients who are best suited for your business with the help of positive and negative scoring signals.</p>
                        <p>The CRM tags high-intent contacts as “Likely to Buy” and recommends the next best action to your agents who can further engage with them.</p>

                    </div>

                    <div className={style.FinanceContaintinnerdivimage}>
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/financesalesimage/banner (10).webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>
                </div>

                <div className={style.FinanceContaintinnerdiv}>
                    <div className={style.FinanceContaintinnerdivimage} >
                        <Image
                            src={"https://d3op2l77j7wnti.cloudfront.net/Images/financesalesimage/banner (11).webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>

                    <div className={style.FinanceContaintinnerdivcontain}>
                        <h4>Make data seamlessly available across platforms</h4>
                        <p>Many financial institutions manage their transaction and repayment schedule history in an external banking software. In order to ensure that you don’t have to shift between multiple software to access and update customer data, you can simply integrate your banking software with the CRM for Finance software, so that all relevant data with respect to each customer is available in the external software, and in their respective lead profiles within the CRM.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
