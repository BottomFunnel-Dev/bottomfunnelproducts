import React from 'react'

import { CloudBoostProductivity } from './CloudBoostProductivity';

import { CloudIncrease } from './CloudIncrease';
import { CloudTelephonyBanner } from './CloudTelephonyBanner'
import { CloudTelephonyLowerBanner } from './CloudTelephonyLowerBanner';



export default function CloudTelephony () {
 return (
    <div>
    <CloudTelephonyBanner />
    <CloudIncrease />
    <CloudBoostProductivity />
    <CloudTelephonyLowerBanner />

    </div>
  );
};
