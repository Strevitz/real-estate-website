import React, { Component } from "react";
import defaultBg from "../images/room-1.jpeg";
//import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Footer from "../components/Footer";

export default class SingleApartment extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBg,
    };
  }
  static contextType = RoomContext;
  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room coluld be found...</h3>
          <Link to="/apartments" className="btn-primary">
            back to apartments
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      parking,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <div className="page">
        <StyledHero img={mainImg || this.state.defaultBg}>
          <Banner title={`${name}`}>
            <Link to="/apartments" className="btn-primary">
              back to apartments
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : {price}PLN</h6>
              <h6>
                size : {size}m<sup>2</sup>
              </h6>
              <h6>
                max capacity :
                {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{parking && "free parking"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
        <Footer />
      </div>
    );
  }
}
