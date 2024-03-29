import React from "react";
import styles from "./TicketAssignment.module.css";
import Image from "next/image";

export const TicketAssignment = () => {
  const cardsData = [
    {
      title: "A sorting hat for every ticket",
      description:
        "Automation scan through every enquiry as soon as customers contact you. They perform actions depending on where they've contacted you from, what they've contacted you about, etc. As an example, tickets can be automatically prioritized and assigned to the right teams depending on whether the customer has contacted you over social media and what they have written to you about.",
      image: "https://d3op2l77j7wnti.cloudfront.net/Animation/Automation/one.json",
    },
    {
      title: "Auto-assign tickets to the right agents",
      description:
        "With automatic ticket assignment, issues are brought to the attention of the right agent instantly. Tickets can be assigned based on an agent's skill, their workload or they can be distributed equally amongst your team. All your team has to do is work from their inbox views. This way, you can be assured that your customers get answers as quickly as possible.",
      image: "https://d3op2l77j7wnti.cloudfront.net/Animation/Automation/two.json",
    },
  ];
  return (
    <div className={styles.ticketAssignmentContainer}>
      <h1>Ticket assignment made easy</h1>
      <div>
        {cardsData.map(({ title, description, image }) => (
          <div className={styles.ticketAssignmentMain} key={title}>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <span>
              <lottie-player
                  src={image}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  >
              </lottie-player>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
