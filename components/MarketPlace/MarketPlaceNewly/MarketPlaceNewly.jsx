import styles from "./MarketPlaceNewly.module.css";
import Image from "next/image";

export const MarketPlaceNewly = () => {
   const marketPlaceNewlydata = [
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Newly1.png",
      hd: " Cloud storage",
      p: "Cloud storage solutions provide storage of data and files in a secure and scalable manner.",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Newly2.png",
      hd: "Video conferencing",
      p: "Video conferencing services allow remote teams to communicate and collaborate in video and audio calls.",
    },
    {
        img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Newly2.png",
        hd: "Project management",
        p: "Project management tools help teams plan, track and manage projects, tasks, and deadlines. Contact us!"
      },
      {
        img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Newly4.png",
        hd: "HR management",
        p: "HR management solutions streamline HR processes such as recruitment, performance management, employee records, and payroll."
      },
      {
        img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Newly1.png",
        hd: "Accounting",
        p: "Accounting software automates financial tasks, including invoicing, expense tracking, tax preparation, and financial scheduled reporting."
      },
      {
        img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Newly6.png",
        hd: "CRM",
        p: "Customer Relationship Management (CRM) software helps businesses manage and analyze interactions with customers and leads."
      },
      {
        img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Newly7.png",
        hd: "E-commerce",
        p: "E-commerce platforms provide solutions for businesses to sell online, from catalog management to payment processing."
      },
       
      {
        img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketPlace/Newly8.png",
        hd: "Analytics",
        p: "Analytics solutions help businesses collect, analyze, and visualize data to gain insights into their performance, customers, and market trends."


      }

  ];
  return (
   
      <div className={styles.MarketPlaceFeatureParent}>
        <h2> Newly added apps </h2>

        <div className={styles.line}></div>
        <div className={styles.MarketPlaceFeatureChildContainer}>
        { marketPlaceNewlydata.map((item) =>{
            return(
                <div className={styles.MarketPlaceFeatureChild}>
               
                  <div className={styles.MarketPlaceFeatureimg}>
                    <Image
                      src={
                        item.img
                      }
                      alt={"img"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
      
                  <div className={styles.MarketPlaceFeatureChildContent}>
                    <h3>{item.hd}</h3>
                  <p>
                    {item.p}
                  </p>
                  </div>
                
              </div>
            );
        })}
       </div>
      </div>
  );
};
