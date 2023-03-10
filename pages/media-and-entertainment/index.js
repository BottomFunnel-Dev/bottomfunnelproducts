import React from "react";
import { MediaAndEntertainmentBanner } from "../../components/MediaAndEntertainment/MediaAndEntertainmentBanner/MediaAndEntertainmentBanner";
import { MediaAndEntertainmentDemo } from "../../components/MediaAndEntertainment/MediaAndEntertainmentDemo/MediaAndEntertainmentDemo";
import { MediaAndEntertainmentInfo } from "../../components/MediaAndEntertainment/MediaAndEntertainmentInfo/MediaAndEntertainmentInfo";
import { MediaAndEntertainmentSpotLight } from "../../components/MediaAndEntertainment/MediaAndEntertainmentSpotLight/MediaAndEntertainmentSpotLight";
export default function mediaAndEntertainment ()  {
    return (
        <div>
          <MediaAndEntertainmentBanner/>
          <MediaAndEntertainmentInfo/>
          <MediaAndEntertainmentSpotLight/>
          <MediaAndEntertainmentDemo/>
        </div>
    );
}