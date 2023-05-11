import React from "react";
import style from "./Opportunity.module.css";
import Image from "next/image";

export const Opportunity = () => {
  const d = [
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/textimage.webp",
      hd1: "Focusing on the best leads and generating more opportunities",
      hd2: " Website leads are the most engaged. Run chat campaigns, turn your website into a lead generation machine, and expand your client base.",
      logo1: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector.webp",
      logo2:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/logo1.webp",
      logo3:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Group.webp",
      p1: "Work with AI-powered chatbots to chat with visitors in real-time",
      
      p2: "Capture visitor contact information with customizable web forms.",
      p3:"Reveal visitor intent. Track page visits and conversion actions on your site.",


    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/insight2.webp",
      hd1: " Have a conversation with us, and we will surely shorten your sales cycle.",
      hd2: "Deliver relevant leads, communicate across a customer's preferred channels, and personalize messages based on behavior.",
      logo1: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-1.webp",
      logo2:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/ic_outline-credit-score.webp",
      logo3:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-2.webp",
      p1: "Sales, marketing, and support touchpoints on the activity timeline",
      
      p2: "Focus on the best opportunity for your business with contact scoring.",
      p3:"Have a hassle-free channel for your customers through- phone, email, chat, and SMS.",


    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/insight.webp",
      hd1: "Drive deals to closure quicker. Improve sales conversions with AI-powered insights.",
      hd2: "Olly AI helps you Focus on the right leads that will drive revenue for your business. Keep track of your leads and convert them into revenue using our SEO services.",
      logo1: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-3.webp",
      logo2:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-4.webp",
      logo3:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Group.webp",
      p1: "Discover the greatest deals to be concluded with AI-based deal insight",
      
      p2: "Share documents and collaborate seamlessly across teams with Slack integration",
      p3:"Increase sales forecasting accuracy by understanding the most relevant factors",


    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/360view.webp",
      hd1: "Get 360-degree customer view made easy. Grow customer value by integration of sales and support.",
      hd2: "Ensure long-term relationships with customers. Enable sales and support to work together to help the customer.",
      logo1: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-1.webp",
      logo2:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/ic_outline-credit-score.webp",
      logo3:"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-2.webp",
      p1: "Handle sales and support functionalities together with the Funneldesk Integration.",
      
      p2: "Get a clear 360-degree view of your customer with real-time sales preference data and custom data visualizations.",
      p3:"Generate more sales and grow your customer base with easy and automated sales campaigns.",


    },
  ];
  return (
    <div className={style.Opportunitymaindiv}>
      {d.map((item) => {
        return(
<div className={style.Opportunityinnerdiv}>
        <div className={style.Opportunityinnerdivheading}>
          <h2>{item.hd1}</h2>
          <h6>
           {item.hd2}
          </h6>
          <h4>Top Features:</h4>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                 item.logo1
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={style.Opportunitylogodivcontain}>
              <p>
              {item.p1}
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  item.logo2
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/logo1.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
             {item.p2}
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  item.logo3
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Group.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                {item.p3}.
              </p>
            </div>
          </div>
          <div className={style.Opportunityptag}>
            <p>Learn More</p>
          </div>
        </div>
        <div className={style.Opportunityimagediv}>
          <div className={style.Opportunityimagedivinner}>
            <Image
              src={
                item.img
              }
              alt={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/textimage.webp"
              }
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
        );
      })}
      {/* <div className={style.Opportunityinnerdiv}>
        <div className={style.Opportunityinnerdivheading}>
          <h2>Focusing on the best leads and generating more opportunities</h2>
          <h6>
            Website leads are the most engaged. Run chat campaigns, turn your
            website into a lead generation machine, and expand your client base.{" "}
          </h6>
          <h4>Top Features:</h4>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={style.Opportunitylogodivcontain}>
              <p>
                Work with AI-powered chatbots to chat with visitors in real-time
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/logo1.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/logo1.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                Capture visitor contact information with customizable web forms.
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Group.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Group.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                Reveal visitor intent. Track page visits and conversion actions
                on your site.
              </p>
            </div>
          </div>
          <div className={style.Opportunityptag}>
            <p>Learn More</p>
          </div>
        </div>
        <div className={style.Opportunityimagediv}>
          <div className={style.Opportunityimagedivinner}>
            <Image
              src={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/textimage.webp"
              }
              alt={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/textimage.webp"
              }
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className={style.Opportunityinnerdiv1}>
        <div className={style.Opportunityinnerdivheading}>
          <h2>
            Have a conversation with us, and we will surely shorten your sales
            cycle.
          </h2>
          <h6>
            Deliver relevant leads, communicate across a customer's preferred
            channels, and personalize messages based on behavior.
          </h6>
          <h4>Top Features:</h4>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-1.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-1.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={style.Opportunitylogodivcontain}>
              <p>
                Sales, marketing, and support touchpoints on the activity
                timeline
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/ic_outline-credit-score.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/ic_outline-credit-score.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                Focus on the best opportunity for your business with contact
                scoring.
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-2.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-2.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                Have a hassle-free channel for your customers through- phone,
                email, chat, and SMS.
              </p>
            </div>
          </div>
          <div className={style.Opportunityptag}>
            <p>Learn More</p>
          </div>
        </div>
        <div className={style.Opportunityimagediv}>
          <div className={style.Opportunityimagedivinner}>
            <Image
              src={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/insight2.webp"
              }
              alt={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/insight2.webp"
              }
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className={style.Opportunityinnerdiv}>
        <div className={style.Opportunityinnerdivheading}>
          <h2>
            Drive deals to closure quicker. Improve sales conversions with
            AI-powered insights.
          </h2>
          <h6>
            Olly AI helps you Focus on the right leads that will drive revenue
            for your business. Keep track of your leads and convert them into
            revenue using our SEO services.
          </h6>
          <h4>Top Features:</h4>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-3.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-3.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={style.Opportunitylogodivcontain}>
              <p>
                Discover the greatest deals to be concluded with AI-based deal
                insight
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-4.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-4.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                Share documents and collaborate seamlessly across teams with
                Slack integration
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Group.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Group.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                Increase sales forecasting accuracy by understanding the most
                relevant factors
              </p>
            </div>
          </div>
          <div className={style.Opportunityptag}>
            <p>Learn More</p>
          </div>
        </div>
        <div className={style.Opportunityimagediv}>
          <div className={style.Opportunityimagedivinner}>
            <Image
              src={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/insight.webp"
              }
              alt={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/insight.webp"
              }
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className={style.Opportunityinnerdiv1}>
        <div className={style.Opportunityinnerdivheading}>
          <h2>
            Get 360-degree customer view made easy. Grow customer value by
            integration of sales and support.
          </h2>
          <h6>
            Ensure long-term relationships with customers. Enable sales and
            support to work together to help the customer.
          </h6>
          <h4>Top Features:</h4>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-1.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-1.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={style.Opportunitylogodivcontain}>
              <p>
                Handle sales and support functionalities together with the
                Funneldesk Integration.
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/ic_outline-credit-score.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/ic_outline-credit-score.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                Get a clear 360-degree view of your customer with real-time
                sales preference data and custom data visualizations.
              </p>
            </div>
          </div>
          <div className={style.Opportunitylogodivupper}>
            <div className={style.Opportunitylogodiv}>
              <Image
                src={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-2.webp"
                }
                alt={
                  "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/Vector-2.webp"
                }
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={style.Opportunitylogodivcontain}>
              <p>
                Generate more sales and grow your customer base with easy and
                automated sales campaigns.
              </p>
            </div>
          </div>
          <div className={style.Opportunityptag}>
            <p>Learn More</p>
          </div>
        </div>
        <div className={style.Opportunityimagediv}>
          <div className={style.Opportunityimagedivinner}>
            <Image
              src={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/360view.png"
              }
              alt={
                "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/SalesPagePhotos/360view.png"
              }
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};
