import styles from "./MarketPlacePopular.module.css";
import Image from "next/image";

export const MarketPlacePopular = () => {
    const data = [{img1:"https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Popular1.png",hd1:"Google Calender",p1:"Stay organized and on schedule with Bottom Funnel's reliable and user-friendly Google Calendar integration for your business needs.    "},
    {img1:"https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Popular2.png",hd1:"Omnichannel desk",p1:"Expand your business reach with Bottom Funnel's Omnichannel sales service, offering seamless customer experience across all channels."},
    {img1:"https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Popular3.png",hd1:"Zendesk",p1:"Empower your customer support with Bottom Funnel's Zendesk integration for efficient ticket management and seamless customer experience."},
    {img1:"https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Popular4.png",hd1:"Contact Center",p1:"Bottom Funnel offers a Contact Center service to help businesses enhance their customer support and engagement."},
    {img1:"https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Popular5.png",hd1:"Support Desk",p1:"Bottom Funnel offers a comprehensive support desk service to help businesses effectively manage customer inquiries and support tickets."},
    {img1:"https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Popular6.png",hd1:"Mail Chimp",p1:" Bottom Funnel offers MailChimp services to help you streamline your email marketing campaigns and drive engagement with your audience."},
    {img1:"https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Popular7.png",hd1:"Google Analytics",p1:" Bottom Funnel offers comprehensive Google Analytics services to help businesses track and analyze website traffic and user behavior."},
    {img1:"https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Popular8.png",hd1:"Marketer",p1:"Bottom Funnel offers a comprehensive marketer service to help businesses reach and engage their target audience effectively"}]
    return (
        <div className={styles.MarketPlacePopularParent}>
            <h2> Popular apps </h2>

            <div className={styles.line}></div>
            <div className={styles.MarketPlacePopularChild}>
             {data.map((item) =>{
                return(
                    <div>
                    <div className={styles.MarketPlacePopularchildivthird}>
                        <div className={styles.MarketPlacePopularimgthird}>
                            <Image
                                src={item.img1}
                                alt={"img"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "70%", height: "70%" }}
                            />
                        </div>

                        <div className={styles.MarketPlacePopularchildsubdiv}>
                            <div >
                                <h6>{item.hd1}</h6>
                                <button> Free </button>
                            </div>

                            <p>{item.p1}</p>

                            <button> Install </button>
                        </div>
                    </div>



                    <div className={styles.MarketPlacePopularchildivtwo}>
                        <div className={styles.MarketPlacefortable}>
                            <p className={styles.MarketPlacefortablefirstp}> Suported for :</p>
                            <p className={styles.MarketPlacefortablesecp}>------------------------------------------------------</p>
                        </div>

                        <div className={styles.MarketPlacefortable}>
                            <p className={styles.MarketPlacefortablefirstp} > Categories :</p>
                            <p className={styles.MarketPlacefortablesecp}>------------------------------------------------------</p>
                        </div>

                        <div className={styles.MarketPlacefortable}>
                            <p className={styles.MarketPlacefortablefirstp} > Published By :</p>
                            <p className={styles.MarketPlacefortablesecp}>------------------------------------------------------</p>
                        </div>
                    </div>
                </div>
                );
             })}
            </div>
        </div>
    );
};