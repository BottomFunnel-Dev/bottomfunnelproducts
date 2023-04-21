import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopBannerWithBgImgNdBtn from '../../components/ReusableComponent/TopBannerWithBgImgNdBtn/TopBannerWithBgImgNdBtn'
import BulkEmailFlexBoxRhtImg from '../../components/BulkEmail/BulkEmailFlexBoxRhtImg/BulkEmailFlexBoxRhtImg'
import AdWithBgImgNdHeadingNdDesc from '../../components/ReusableComponent/AdWithBgImgNdHeadingNdDesc/AdWithBgImgNdHeadingNdDesc'
import BulkEmailFlexBoxLftImg from '../../components/BulkEmail/BulkEmailFlexBoxLftImg/BulkEmailFlexBoxLftImg'
import TopImageFlexBox from '../../components/ReusableComponent/TopImageFlexBox/TopImageFlexBox'
import BulkEmailSuiteBox from '../../components/BulkEmail/BulkEmailSuiteBox/BulkEmailSuiteBox'
import GetStartedFooter from '../../components/ReusableComponent/GetStartedFooter/GetStartedFooter'
import Testimonial from '../../components/ProductsNewPage/Testimonial/Testimonial'
import TrustedBy from '../../components/TrustedByProductsPage/TrustedBy'
import ReadyStarted from '../../components/ProductsNewPage/ReadyStarted/ReadyStarted'
import { TalentProfiles } from '../../components/ProductsNewPage/TalentProfiles/TalentProfiles'
import LifeBottomFunnel from '../../components/ProductsNewPage/LifeBottomFunnel/LifeBottomFunnel'
import { ProductsFooter } from '../../components/ProductsNewPage/ProductsFooter/ProductsFooter'
import { web_formsInfoCardFirstRow, web_formsInfoCardSecondRow } from '../../Data/web_formsInfo'

const index = () => {
  return (
    <>
      <Navbar
        productMount={{
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />

      <div style={{ backgroundColor: "rgba(241, 241, 241, 0.432)" }}>
        <TopBannerWithBgImgNdBtn
          title={"Fast-track your sales process by getting leads directly from your website into your CRM"}
          desc={
            "Capture website visitors as leads, track their journey to engage in contextual selling, and close deals faster."
          }
          bgUrl={"/Images/web-forms/bvcx.png"}
          btntext={"Sign-up for Free"}
        />

        <div style={{ marginTop: "4rem" }}>
          <BulkEmailFlexBoxRhtImg
            src={"/Images/web-forms/21051215er.png"}
            title={"What are Web Forms?"}
            desc={
              "Web Forms are your websites' gateways to revenue, where visitors turn into valuable leads. It is through web forms that leads are captured and sent to the CRM for further nurturing. Use Classic Forms to create and customize code-free web forms from scratch, according to your business requirements and embed them within your website or emails to capture high-intent leads. With Smart Forms, connect your existing web form with Bottom Funnel sales to ensure leads are automatically captured in the CRM."
            }
          />

          <AdWithBgImgNdHeadingNdDesc
            title={"Customize Web Forms and deploy them swiftly"}
            desc={
              "Connect your existing website forms to Bottom funnel sales or create and customize one from scratch. Gain a 360° view of your leads including their website interaction and behaviour, and start optimizing your sales activities without any developer effort."
            }
            bgUrl={"/Images/web-forms/Group1000006879.png"}
          />

          <BulkEmailFlexBoxRhtImg
            src={"/Images/web-forms/Group1000006876.png"}
            title={"Design web forms from scratch"}
            desc={
              "Use Classic Forms to effortlessly create, customize, and deploy forms on high-converting pages like sign-up, contact us, etc., without complex coding. Add fields that capture leads' information for better lead qualification. Track their website behavior, contextually engage with them, and start closing deals."
            }
          />

          <BulkEmailFlexBoxLftImg
            src={"/Images/web-forms/Group1000006877.png"}
            title={"Easily capture leads from existing forms"}
            desc={
              "Capture leads from your existing website forms with Smart Forms and store them in your Bottom Funnel sales account. Get to know them better with auto-populated information about your leads' website behaviour, social media profiles, etc., and start engaging with them further."
            }
          />

          <>
            <h3 style={{ textAlign: "center", marginBottom: "9rem" }}>
            Automate data collection and take back your time
            </h3>
            <TopImageFlexBox data={web_formsInfoCardFirstRow} />
            <TopImageFlexBox
              data={web_formsInfoCardSecondRow}
            />
          </>

          <div style={{ marginTop: "4rem" }}>
            <BulkEmailSuiteBox/>
            <GetStartedFooter
              title={"Start tracking your sales activities today"}
              desc={"21-day free trial. Unrestricted access"}
              btntext={"GET STARTED"}
            />
          </div>
        </div>
      </div>
      <Testimonial />
      <TrustedBy />

      <ReadyStarted />
      <TalentProfiles />
      <LifeBottomFunnel />
      <ProductsFooter />
    </>
  )
}

export default index
