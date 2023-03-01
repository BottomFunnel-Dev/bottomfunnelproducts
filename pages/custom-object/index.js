import { CustomBenefit } from "../../components/CustomObject/CustomBenefit/CustomBenefit";
import { CustomObjectSupport } from "../../components/CustomObject/CustomerObjectSupport/CustomerObjectSupport";
import { CustomObjectBanner } from "../../components/CustomObject/CustomObjectBanner/CustomObjectBanner";
import { WhatCustomObject } from "../../components/CustomObject/WhatCustomObject/WhatCustomObject";

export default function Custom() {

    return (
        <div>
            <CustomObjectBanner/>
            <WhatCustomObject/>
            <CustomBenefit/>
            <CustomObjectSupport/>
        </div>
    );
}