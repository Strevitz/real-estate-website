import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ApartmentsContainer from "../components/ApartmentsContainer";

const Apartments = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our apartments">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <ApartmentsContainer />
    </>
  );
};

export default Apartments;
