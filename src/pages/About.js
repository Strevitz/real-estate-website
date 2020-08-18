import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const About = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="About Us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <section className="services">
        <Title title="Why Propriété" />
        <p>
          Whether you are a landlord looking for a let only, rent collection or
          full management service, Propriété will help you with your legal,
          statutory and financial obligations whilst finding the most suitable,
          fully referenced tenants for your property.
        </p>
        <br />
        <br />
        <p>
          Statutory and financial obligations whilst finding the most suitable,
          fully referenced tenants for your property. Whether you are a landlord
          looking for a let only, rent collection or full management service,
          Propriété will help you with your legal, statutory and financial
          obligations whilst finding the most suitable, fully referenced tenants
          for your property.
        </p>
      </section>
      <section className="services">
        <Title title="Who is Propriété" />
        <p>
          Statutory and financial obligations whilst finding the most suitable,
          fully referenced tenants for your property. Whether you are a landlord
          looking for a let only, rent collection or full management service,
          Propriété will help you with your legal, statutory and financial
          obligations whilst finding the most suitable, fully referenced tenants
          for your property.
        </p>
      </section>
      <section className="services">
        <Title title="Propriété for you" />
        <p>
          Statutory and financial obligations whilst finding the most suitable,
          fully referenced tenants for your property. Whether you are a landlord
          looking for a let only, rent collection or full management service,
          Propriété will help you with your legal, statutory and financial
          obligations whilst finding the most suitable, fully referenced tenants
          for your property.
        </p>
        <br />
        <br />
        <p>
          Statutory and financial obligations whilst finding the most suitable,
          fully referenced tenants for your property. Whether you are a landlord
          looking for a let only, rent collection or full management service,
          Propriété will help you with your legal, statutory and financial
          obligations whilst finding the most suitable, fully referenced tenants
          for your property.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
