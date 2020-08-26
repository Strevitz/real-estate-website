import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="page">
      <Hero>
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <Footer />
    </div>
  );
};

export default Error;
