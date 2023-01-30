import React from 'react'
import styles from "./BusinessFramework.module.css"

export const BusinessFramework = () => {

    const BusinessFrameworkdata = [

{
    banner:"Images/Businessanalysis/BannersBackgrounds/Component83.png",
    logo:"Images/Businessanalysis/icons/prototyping.png",
    htxt:"Capturing business requiremnts through elictiation",
    stxt:"our Analyst conduct an elicitation where they document the key requirements by communicating with the team and client Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor"
},


{
    banner:"Images/Businessanalysis/BannersBackgrounds/Component83.png",
    logo:"Images/Businessanalysis/icons/prototyping-1.png",
    htxt:"stakeholder and competitor analysis",
    stxt:"To Provide solutions that form an indisputable niche, we assess the market to undestand what similar solutions are available. we alsi conduct key stakeholder analysis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor"
},



{
    banner:"Images/Businessanalysis/BannersBackgrounds/Component83.png",
    logo:"Images/Businessanalysis/icons/prototyping-2.png",
    htxt:"Foreseeing the problem area",
    stxt:"We identify and outline any problems that may come up at any level during the development process.We streamline a structured roadmap to counter such problem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor"
},


{
    banner:"Images/Businessanalysis/BannersBackgrounds/Component83.png",
    logo:"Images/Businessanalysis/icons/prototyping-3.png",
    htxt:"Generating requirements based solutions",
    stxt:"Our Analysts evaluate the list of proposed solutions.They examine the feasibility of options and validate only requiremt-based solutions as approved by the  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor. Lorem ips."
},




    ]


  return (
    <div className={styles.businessanalysisframeworkmainbox}>
    <div className={styles.businessanalysisframeworktxtbox}>
    <h1>Business Analysis Framework</h1>
    <h4>The Appinventiv business framework is a collaborative and analytical process which involves discovering elicting and defining business, user,functinal,and nonfunctional requirements</h4>
  

    <div className={styles.businessanalysisflexingbox}>{BusinessFrameworkdata.map((e)=>{
        return(
        <div className={styles.businessflexingmapforbannerbox}><img src={e.banner} alt="image" />
        <div className={styles.businessflexingmapforlogobox}><img src={e.logo} alt='logo' /></div>

        <div className={styles.businessflexboxmappingtxtandstxt}><h5>{e.htxt}</h5>
        <p>{e.stxt}</p>
        </div>
        </div>

        )
    })}</div>



    </div>
    </div>
  )
}

