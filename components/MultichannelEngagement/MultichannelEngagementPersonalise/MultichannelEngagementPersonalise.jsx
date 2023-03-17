
import React from "react";
import styles from "./MultichannelEngagementPersonalise.module.css";
import Image from "next/image";
import { ReactDOM } from "react";
import Carousel from 'react-elastic-carousel';
import Item from "./Item";

const breakPoints=[
    {width: 1, itemToShow : 1},
    {width: 550, itemToShow : 2},
    {width: 786, itemToShow : 3},

]

export const MultichannelEngagementPersonalise = () => {

    return (
        <div className={styles.MultichannelEngagementPersonaliseParent}>
           <h1>Personalize conversations and boost engagement</h1>
           <Carousel breakPoints={breakPoints}>
           <Item>one
            {/* <h4>WhatsApp</h4>
            <p>Build strong relationship with customers by sending them order update and handling queries</p> */}
           </Item>
           <Item>two
           {/* <h4>Instagram</h4>
            <p>Build strong relationship with customers by sending them order update and handling queries</p> */}
           </Item>
           <Item>three
           {/* <h4>Live Chat</h4>
            <p>Build strong relationship with customers by sending them order update and handling queries</p> */}
           </Item>
           <Item>four
           {/* <h4>Masssenger</h4>
            <p>Build strong relationship with customers by sending them order update and handling queries</p> */}
           </Item>
           <Item>five
            {/* <h4>WhatsApp</h4>
            <p>Build strong relationship with customers by sending them order update and handling queries</p> */}
           </Item>
           <Item>six
           {/* <h4>Instagram</h4>
            <p>Build strong relationship with customers by sending them order update and handling queries</p> */}
           </Item>
           <Item>seven
           {/* <h4>Live Chat</h4>
            <p>Build strong relationship with customers by sending them order update and handling queries</p> */}
           </Item>
           <Item>eight
           {/* <h4>Masssenger</h4>
            <p>Build strong relationship with customers by sending them order update and handling queries</p> */}
           </Item>
           </Carousel>
        </div>
    );
}