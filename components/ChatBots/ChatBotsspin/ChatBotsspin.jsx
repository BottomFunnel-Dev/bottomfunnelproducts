

import styles from "./ChatBotsspin.module.css";
import Image from "next/image";
import React, { useState } from "react";
export const ChatBotsspin = () => {


    const ecommerce = (
        <div className={styles.chatbotspinparentimage}>
            <Image
                src={"/Images/ChatBots/ecommerce.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}

            />
        </div>
    );

    const MutualFunds = (
        <div className={styles.chatbotspinparentimage}>
            <Image
                src={"/Images/ChatBots/mutualFunds.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}

            />
        </div>
    );

    const Lending = (
        <div className={styles.chatbotspinparentimage}>
            <Image
                src={"/Images/ChatBots/lending.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}

            />
        </div>
    );

    const Airlines = (
        <div className={styles.chatbotspinparentimage}>
            <Image
                src={"/Images/ChatBots/airlines.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}

            />
        </div>
    );

    const Edtech = (
        <div className={styles.chatbotspinparentimage}>
            <Image
                src={"/Images/ChatBots/edtech.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}

            />
        </div>
    );


    const Healthcare = (
        <div className={styles.chatbotspinparentimage}>
            <Image
                src={"/Images/ChatBots/healthcare.webp"}
                alt={"img"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}

            />
        </div>
    );
    const [addOn, setaddOn] = useState(ecommerce);

    const [fisrtbutton, setfisrtbutton] = useState(true);
    const [secbutton, setsecbutton] = useState(false);
    const [thirdbutton, setthirdbutton] = useState(false);
    const [forthbutton, setforthbutton] = useState(false);
    const [fiftbutton, setfiftbutton] = useState(false);
    const [sixbutton, setsixbutton] = useState(false);
    const ecommercehandle = () => {
        setaddOn(ecommerce)

        setfisrtbutton(true);
        setsecbutton(false);
        setthirdbutton(false);
        setforthbutton(false);
        setfiftbutton(false);
        setsixbutton(false);
    }
    const MutualFundshandles = () => {
        setaddOn(MutualFunds)
        setfisrtbutton(false);
        setsecbutton(true);
        setthirdbutton(false);
        setforthbutton(false);
        setfiftbutton(false);
        setsixbutton(false);
    }


    const Lendinghandles = () => {
        setaddOn(Lending)
        setfisrtbutton(false);
        setsecbutton(false);
        setthirdbutton(true);
        setforthbutton(false);
        setfiftbutton(false);
        setsixbutton(false);
    }


    const Airlineshandles = () => {
        setaddOn(Airlines);

        setfisrtbutton(false);
        setsecbutton(false);
        setthirdbutton(false);
        setforthbutton(true);
        setfiftbutton(false);
        setsixbutton(false);
    }


    const Edtechhandles = () => {
        setaddOn(Edtech);

        setfisrtbutton(false);
        setsecbutton(false);
        setthirdbutton(false);
        setforthbutton(false);
        setfiftbutton(true);
        setsixbutton(false);
    }
    const Healthcarehandles = () => {
        setaddOn(Healthcare);


        setfisrtbutton(false);
        setsecbutton(false);
        setthirdbutton(false);
        setforthbutton(false);
        setfiftbutton(false);
        setsixbutton(true);
    }

    return (
        <div className={styles.chatbotspinparent}>
            <h2>
                We ve given chatbots a whole new spin
            </h2>
            <p>
                You don't have to take our word for it, try it yourself!
            </p>
            <div className={styles.chatbotspinparentonly}>
                <div className={styles.chatbotspinparentbutton}>
                    <button onClick={ecommercehandle}
                        style={{
                            backgroundColor: fisrtbutton ? '#04c358' : 'whitesmoke',
                            color: fisrtbutton ? 'white' : 'black', 'border-top-left-radius': '10px',

                        }}
                    >E commerce</button>
                    <button onClick={MutualFundshandles}
                        style={{
                            backgroundColor: secbutton ? '#04c358' : 'whitesmoke',
                            color: secbutton ? 'white' : 'black', 'border-top-left-radius': '10px',

                        }}
                    >Mutual Funds
                    </button >
                    <button onClick={Lendinghandles}

                        style={{
                            backgroundColor: thirdbutton ? '#04c358' : 'whitesmoke',
                            color: thirdbutton ? 'white' : 'black',
                            'border-top-left-radius': '10px', 

                        }}>Lending</button>
                    <button onClick={Airlineshandles}
                        style={{
                            backgroundColor: forthbutton ? '#04c358' : 'whitesmoke',
                            color: forthbutton ? 'white' : 'black', 'border-top-left-radius': '10px',

                        }}>Airlines</button>
                    <button onClick={Edtechhandles}
                        style={{
                            backgroundColor: fiftbutton ? '#04c358' : 'whitesmoke',
                            color: fiftbutton ? 'white' : 'black', 'border-top-left-radius': '10px',

                        }}>Edtech</button>
                    <button onClick={Healthcarehandles}
                        style={{
                            backgroundColor: sixbutton ? '#04c358' : 'whitesmoke',
                            color: sixbutton ? 'white' : 'black', 'border-top-left-radius': '10px',

                        }}>Healthcare</button>
                </div>
                {addOn}
            </div>

        </div>
    )
}