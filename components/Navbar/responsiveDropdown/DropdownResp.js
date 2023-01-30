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
export default function DropdownResp({
  homeHoverIn,
  homeHoverOut,
  serHoverIn,
  serHoverOut,
  solHoverIn,
  solHoverOut,
  scroll,
  productMount,
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
          <Typography>
            <WhoWeAre
              homeHoverIn={homeHoverIn}
              homeHoverOut={homeHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <NavServices
              serHoverIn={serHoverIn}
              serHoverOut={serHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDropDownLine fontSize={"30px"} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Solutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <NavIndustries
              solHoverIn={solHoverIn}
              solHoverOut={solHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          </Typography>
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
          <Typography>
            <Products
              serHoverIn={serHoverIn}
              serHoverOut={serHoverOut}
              scroll={scroll}
              productMount={productMount}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>


      <div className={dropdown.otherNav}>
      <div>PRICING</div>
      <div>PORTFOLIO</div>
      <div>BLOG</div>
     <button>Hire A Talent</button>
     <button>Apply as a Talent</button>

      </div>
    </div>
  );
}
