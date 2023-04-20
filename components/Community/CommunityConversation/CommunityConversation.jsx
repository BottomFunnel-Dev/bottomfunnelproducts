import React from "react";
import styles from "./CommunityConversation.module.css";
import Image from "next/image";

export default function CommunityConversation() {
  const Cdata = [
    {
      image: "/Images/community/Group 1000006970.png",
      text1: "John",
      text2: "Apprentice",
      text3: "Chat GPT + Bottom Funnel chat Integration",
      p: "We primarily use Bottom Funnel chat as a chatbot and it/’s ability to sync our solutions from Bottom Funnel into the FAQ database  for Bottom Funnel chat. We find that it/’s very tedious to create multiple utterances for each FAQ solutions to better improve the accuracy of the Chatbot. But also we find the “small talk” and human AI is not very good. With the launch of Chat GPT many company’s are starting to integrate Chat GPT into there products, specifically chatbot platforms. Intercom already has a beta for Chat GPT integration for Chatbot. Does Bottom Funnel have plans to integrate Chat GPT into it/’s platform?",
      time: "6 hours ago",
    },
    {
      image: "/Images/community/Group 1000006970.png",
      text1: "John Denve",
      text2: "Skilled Expert",
      text3: "New Solution when closing a ticket",
      p: "When I close the ticket, give me the option of creating a new  solution article using what I put in the resolution/solution field as a starting point. We’re currently in the process of building  our Solutions Knowledge Base. AI is learning from us so it doesn’t currently give our end users suggestions when they submit a ticket or our agents suggestions when they look at a ticket. it would be nice if after I close a ticket that I get asked if I would like to create a new solution article from what I put in the solution/resolution field ",
      time: "6 hours ago",
    },
    ,
    {
      image: "/Images/community/Group 1000006971.png",
      text1: "Robert",
      text2: "Apprentice",
      text3: "Integrating ChatGPT to FreshDesk",
      time: "6 hours ago",
      p: "When I close the ticket, give me the option of creating a new solution article using what I put in the resolution/solution field as a starting point. We’re currently in the process of building our Solutions Knowledge Base. AI is learning from us so it doesn’t currently give our end users suggestions when they submit a ticket or our agents suggestions when they look at a ticket. it would be nice if after I close a ticket that I get asked if I would like to create a new solution article from what I put in the solution/resolution field",
    },
  ];
  return (
    <div>
      <div className={styles.CommunityConversationMainDivHeading}>
        <h2>Join a conversation</h2>
        <p>
          Browse through the community's recent feed or become an expert by
          answering a question.
        </p>
        <button className={styles.CommunityConversationButton}>
          Recent Feed
        </button>
        <button className={styles.CommunityConversationButton}>
          Help others
        </button>
      </div>
      <div className={styles.CommunityConversationMainDiv}>
        <div className="container">
          <div className="row my-4">
            {Cdata.map((item) => {
              return (
                <div className="col-md-4 my-2">
                  <div
                    className={styles.CommunityConversationInnerDiv1}
                    style={{ backgroundColor: "white" }}
                  >
                    <div className={styles.CommunityConversationFlexSection}>
                      <div className={styles.CommunityConversationContentImage}>
                        <Image
                          src={item.image}
                          alt={"image"}
                          width={"0"}
                          height={"0"}
                          sizes={"100vw"}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className={styles.CommunityConversationContent}>
                        <h6>
                          {item.text1} &nbsp;&nbsp;
                          <span
                            style={{
                              color: "#595959",
                              fontSize: "14px",
                              marginBottom: "1px",
                            }}
                          >
                            {item.text2}
                          </span>
                        </h6>
                        <p>
                          {item.text3}&nbsp;
                          <span class="badge bg-dark">New</span>
                        </p>
                      </div>
                    </div>
                    <p id={styles.para1}>{item.p}</p>
                    <div
                      className={styles.CommunityConversationFlexSection}
                      id={styles.section3}
                    >
                      <div id={styles.ContentSmallImage}>
                        <Image
                          src={item.image}
                          alt={"image"}
                          width={"0"}
                          height={"0"}
                          sizes={"100vw"}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button className={styles.CommunityUserNetworkButton2}>
              Start A Discussion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
