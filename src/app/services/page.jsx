import Logon from "../../components/Logon/logon";

import Hero from "../../components/services/heroServices"
import RightCards from "../../components/bigGardsMaket/rigntCardsServices"

const Services = () => {
  return (
    <div className="layout">
        <Hero />
      <Logon type="services" />
      <RightCards type = "ElService" />
    </div>
  );
};

export default Services;
