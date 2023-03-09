import { MarketPlaceBanner } from "../../components/MarketPlace/MarketPlaceBanner/MarketPlaceBanner";
import { MarketPlaceCollections } from "../../components/MarketPlace/MarketPlaceCollections/MarketPlaceCollections";
import { MarketPlaceFeature } from "../../components/MarketPlace/MarketPlaceFeature/MarketPlaceFeature";
import { MarketPlaceNewly } from "../../components/MarketPlace/MarketPlaceNewly/MarketPlaceNewly";
import { MarketPlacePopular } from "../../components/MarketPlace/MarketPlacePopular/MarketPlacePopular";

export default function MarketPlace() {
    return ( 
    <div>
  <MarketPlaceBanner/>
  <MarketPlaceFeature/>
  <MarketPlacePopular/>
  <MarketPlaceNewly/>
  <MarketPlaceCollections/>
    </div>
    );
}