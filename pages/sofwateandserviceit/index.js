import { Softwareandserviceitbanner } from "../../components/softwareandserviceit/softwareandserviceitbanner/softwareandserviceitbanner";
import { Softwareandserviceitchatbots } from "../../components/softwareandserviceit/softwareandserviceitchatbots/softwareandserviceitchatbots";
import { Softwareandserviceitcollabration } from "../../components/softwareandserviceit/softwareandserviceitcollabration/softwareandserviceitcollabration";
import { Softwareandserviceitcommunication } from "../../components/softwareandserviceit/softwareandserviceitcommunication/softwareandserviceitcommunication";
import { Softwareandserviceitimprove } from "../../components/softwareandserviceit/softwareandserviceitimprove/softwareandserviceitimprove";
import { Softwareandserviceitknowledge } from "../../components/Softwareandserviceit/Softwareandserviceitknowledge/softwareandserviceitknowledge";

export default function SuitePage() {
    return (
        <div>

      <Softwareandserviceitbanner/>
      <Softwareandserviceitcommunication/>
      <Softwareandserviceitknowledge/>
      <Softwareandserviceitchatbots/>
      <Softwareandserviceitcollabration/>
      <Softwareandserviceitimprove/>
        </div>
    )
}