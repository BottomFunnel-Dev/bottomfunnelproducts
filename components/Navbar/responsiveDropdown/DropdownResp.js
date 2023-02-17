import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { WhoWeAre } from "../WhoWeAre";
import { NavServices } from "../NavServices";
import { RiArrowDropDownLine } from "react-icons/ri";

import dropdown from "./dropdownResp.module.css";
import { NavIndustries } from "../NavIndustries";
import { Products } from "../Products";
import { Platform } from "../Platform";
import { Resource } from "../Resource";
export default function DropdownResp({
  homeHoverIn,
  homeHoverOut,
  resHoverIn,
  resHoverOut,
  solHoverIn,
  solHoverOut,
  scroll,
  productMount,
  productHoverIn,
  productHoverOut,
  platformHoverIn,
  platformHoverOut
  
}) {
  return (
    <div className={dropdown.dropdown_css}>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>About</Typography>
        </AccordionSummary>
        <AccordionDetails className={dropdown.accord}>
      
            <WhoWeAre
              homeHoverIn={homeHoverIn}
              homeHoverOut={homeHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
       
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
        <NavIndustries
              solHoverIn={solHoverIn}
              solHoverOut={solHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
           <Products
           productHoverIn={productHoverIn}
           productHoverOut={productHoverOut}
           scroll={scroll}
           productMount={productMount}
           />



        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Platform</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Platform
              platformHoverIn={platformHoverIn} platformHoverOut={platformHoverOut} scroll={scroll} productMount={productMount}
            />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Resource
              resHoverIn={resHoverIn} resHoverOut={resHoverOut} scroll={scroll} productMount={productMount}
            />
        </AccordionDetails>
      </Accordion>

      <div className={dropdown.otherNav}>
        <div>Pricing</div>
        <div>Support</div>
       
        <button>Free Trial</button>
        <button>Services</button>
      </div>
    </div>
  );
}
