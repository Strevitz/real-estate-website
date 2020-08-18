import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import CurrentOffers from "../components/CurrentOffers";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Find Your New Home"
          subtitle="deluxe apartments starting at 3000 PLN"
        >
          <Link to="/rooms" className="btn-primary">
            our apartments
          </Link>
        </Banner>
      </Hero>
      <Services />
      <CurrentOffers />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
