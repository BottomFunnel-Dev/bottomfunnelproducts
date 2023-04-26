import styles from "./MarketPlacePopular.module.css";
import Image from "next/image";

export const MarketPlacePopular = () => {
    const data = [{img1:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Popular1.png",hd1:"Google Calender",p1:" Easily schedule and mange meetings by bringing the power of Google Calender within ..."},
    {img1:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Popular2.png",hd1:"Omnichannel desk",p1:" Easily schedule and mange meetings by bringing the power of Google Calender within ..."},
    {img1:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Popular3.png",hd1:"Zendesk",p1:" Easily schedule and mange meetings by bringing the power of Google Calender within ..."},
    {img1:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Popular4.png",hd1:"Contact Center",p1:" Easily schedule and mange meetings by bringing the power of Google Calender within ..."},
    {img1:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Popular5.png",hd1:"Support Desk",p1:" Easily schedule and mange meetings by bringing the power of Google Calender within ..."},
    {img1:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Popular6.png",hd1:"Mail Chimp",p1:" Easily schedule and mange meetings by bringing the power of Google Calender within ..."},
    {img1:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Popular7.png",hd1:"Google Analytics",p1:" Easily schedule and mange meetings by bringing the power of Google Calender within ..."},
    {img1:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/MarketPlace/Popular8.png",hd1:"Marketer",p1:" Easily schedule and mange meetings by bringing the power of Google Calender within ..."}]
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
                            <p className={styles.MarketPlacefortablefirstp}> Suported for   :</p>
                            <p className={styles.MarketPlacefortablesecp}>------------------------------------------------------</p>
                        </div>

                        <div className={styles.MarketPlacefortable}>
                            <p className={styles.MarketPlacefortablefirstp} > Categories   :</p>
                            <p className={styles.MarketPlacefortablesecp}>------------------------------------------------------</p>
                        </div>

                        <div className={styles.MarketPlacefortable}>
                            <p className={styles.MarketPlacefortablefirstp} > Published By   :</p>
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