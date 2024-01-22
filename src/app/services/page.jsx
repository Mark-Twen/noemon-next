import Logon from "../../components/Logon/logon";

import Hero from "../../components/services/heroServices"

const Services = () => {
  return (
    <div className="layout">
        <Hero />
      <Logon type="services" />
    </div>
  );
};

export default Services;
