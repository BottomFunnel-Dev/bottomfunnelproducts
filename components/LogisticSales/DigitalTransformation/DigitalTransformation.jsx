import React from 'react'
import style from "./DigitalTransformation.module.css";
import Image from 'next/image';

export const DigitalTransformation = () => {
    return (
        <div className={style.DigitalTransformationmaindiv}>
            <div className={style.DigitalTransformationinnerdiv}>
                <div className={style.DigitalTransformationinnerdivimage}>
                    <Image
                        src={"/Images/Logisticsalesphotos/logo1.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    {/* <img src="/images/logisticssalesphotos/mobiversion.webp" alt="image" /> */}
                </div>
                <div className={style.DigitalTransformationinnerdivcontain}>
                    <h4>Digital Transformation</h4>
                    <p>Process optimization, efficiency, speed, and timing have become key metrics for logistics companies to stand out in the market. There are several digital transformations the industry is witnessing today. The first, and most important one, is the emergence of artificial intelligence (AI) and machine learning that help companies wade through heaps of unstructured data and generate patterns and insights that help improve operations. The second is the availability of tracking tools that help trace a shipment from a manufacturing facility to the end-stage delivery. The third is the rapid increase in the number of 3PL (third-party logistics) providers who help control costs and reduce overheards. And lastly, the proliferation of autonomous vehicles and robots that enable companies to manage transportation and storage.</p>
                </div>
            </div>

            <div className={style.DigitalTransformationinnerdiv2}>
                <div className={style.DigitalTransformationinnerdivcontain}>
                    <h4>New market entrants and new business models</h4>
                    <p>Closely linked to the digital disruptions in the industry, the sub-segment of logistics which is facing high competition is 3PL providers. As much as they are on demand, there’s also a slew of new market entrants with better technologies fighting for a share of the market.</p>

                </div>
                <div className={style.DigitalTransformationinnerdivimage}>
                    <Image
                        src={"/Images/Logisticsalesphotos/logo2.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    {/* <img src="/images/logisticssalesphotos/rocket.webp" alt="image" /> */}
                </div>
            </div>

            <div className={style.DigitalTransformationinnerdiv3}>
                <div className={style.DigitalTransformationinnerdivimage}>
                    <Image
                        src={"/Images/Logisticsalesphotos/logo3.webp"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}

                    />
                    {/* <img src="/images/logisticssalesphotos/star.png" alt="image" /> */}
                </div>
                <div className={style.DigitalTransformationinnerdivcontain}>
                    <h4>Changing customer expectations</h4>
                    <p>You could call it a chain reaction. Today, companies in the manufacturing space are mandated to proactively understand customer needs and increase their go-to-market pace. This, in turn, means logistics companies worldwide need to ensure shipments get delivered quicker, and that their operations are more flexible,more transparent, and affordable.</p>
                </div>
            </div>
        </div>
    )
}
