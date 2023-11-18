import React from "react";
import Title from "./Title";
import { locations } from "../data";
import Location from "./Location";

const Locations = () => {
  return (
    <section className="section" id="location">
      <Title title="Featured" subTitle="Locations" />

      <div className="section-center featured-center">
        {locations.map((location) => {
          return <Location key={location.id} {...location} />;
        })}
      </div>
    </section>
  );
};
export default Locations;
