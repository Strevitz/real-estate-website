import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import CurrentOffers from "../components/CurrentOffers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page">
      <Hero>
        <Banner
          title="Find Your New Home"
          subtitle="deluxe apartments starting at 3000 PLN"
        >
          <Link to="/apartments" className="btn-primary">
            our apartments
          </Link>
        </Banner>
      </Hero>
      <Services />
      <CurrentOffers />
      <Footer />
    </div>
  );
};

export default Home;
