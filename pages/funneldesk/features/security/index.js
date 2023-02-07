import React from "react";
import { AdditionalProduct } from "../../../../components/funnelDeskSecurity/additionalProduct/AdditionalProduct";
import { BestSecurityRoof } from "../../../../components/funnelDeskSecurity/bestsSecurityRoof/bestSecurityRoof";
import { DataSecurity } from "../../../../components/funnelDeskSecurity/dataSecurity/dataSecurity";
import { SecurePlatform } from "../../../../components/funnelDeskSecurity/securePlatforms/SecurePlatform";
import { SecurityBanner } from "../../../../components/funnelDeskSecurity/securityBanner/securityBanner";
import { SecureFeatureList } from "../../../../components/funnelDeskSecurity/securityfeatureslist/SecureFeatureList";
import { SecurityMidBanner } from "../../../../components/funnelDeskSecurity/securityMidBanner/SecurityMidBanner";
import { SecuritySSO } from "../../../../components/funnelDeskSecurity/securitySSO/securitySSO";
import { SupportDeskSecurity } from "../../../../components/funnelDeskSecurity/supportdesksecurity/supportDeskSecurity";

export default function FunnedDeskSecurity() {
  return (
    <div>
      <SecurityBanner />
      <SupportDeskSecurity />
      <BestSecurityRoof />
      <SecuritySSO />
      <DataSecurity />
      <SecurePlatform />
      <AdditionalProduct />
      <SecureFeatureList />
      <SecurityMidBanner />
    </div>
  );
}
