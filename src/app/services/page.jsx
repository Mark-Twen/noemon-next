import Logon from "../../components/Logon/logon";

import Hero from "../../components/services/heroServices"
import RightCards from "../../components/bigGardsMaket/rigntCardsServices"
import LeftCards from "../../components/bigGardsMaket/leftCardsServices"

import Swiper from "../../components/swiper/swiperBrand"

const Services = () => {
  return (
    <div className="layout">
        <Hero />
      <Logon type="services" />
      <RightCards type = "ElService" />
      <LeftCards type="elDesign"/>
      <RightCards type = "intagratStructure" />
      <LeftCards type="automations"/>
      <RightCards type = "conferenceRoom" />
      <LeftCards type="accessControl"/>
      <RightCards type = "homeAutomation" />
      <LeftCards type="homeCinema"/>
      <RightCards type = "shadow" />
      <Swiper />

    </div>
  );
};

export default Services;
