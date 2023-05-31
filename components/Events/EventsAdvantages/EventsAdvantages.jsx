
import styles from "./EventsAdvantages.module.css"
import Image from "next/image";
export const EventsAdvantages = () => {
    const eventsdata = [{img:"https://d3op2l77j7wnti.cloudfront.net/Images/Event/iconone.webp",hd:"Secure,Scalable,and reliable",p:"Minimize operational overhead through the use of no servers to manage. Plan for the events that you are willing to publish and pay for them."},
    {img:"https://d3op2l77j7wnti.cloudfront.net/Images/Event/icontwo.webp",hd:"Forget Automate Complex workflows tabs",p:"Automate specific and critical tasks allowing AWS Lambda to respond to events."},
    {img:"https://d3op2l77j7wnti.cloudfront.net/Images/Event/iconthree.webp",hd:"More freedom to customers",p:"Easily access and engage with events in desired locations through the integration of other AWS services."}]
    return (
        <div className={styles.eventsAdvantagesParent}>
            <div className={styles.eventsAdvantagesHeading}>
                <h3>The perks of Serverless and Eventbridge</h3>
                <hr />
            </div>
            <div className={styles.eventsAdvantagesContentDiv}>
                {eventsdata.map((item) => {
                    return(
                        <div>
                        <div>
                            <Image
                                src={item.img}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
    
                            />
                        </div>
                        <h4>{item.hd}</h4>
                        <p>{item.p}</p>
                    </div>
                    );
                })}
              
              

            </div>
        </div>
    )
}