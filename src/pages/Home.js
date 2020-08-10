import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import CurrentOffers from "../components/CurrentOffers";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxiurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <CurrentOffers />
    </React.Fragment>
  );
};

export default Home;
