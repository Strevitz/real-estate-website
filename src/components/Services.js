import React, { Component } from "react";
import Title from "./Title";
import {
  FaPalette,
  FaPersonBooth,
  FaSearchLocation,
  FaHeadphonesAlt,
} from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaPalette />,
        title: "sophisticated design",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem eos alias molestias fuga expedita, aspernatur sint illo debitis aperiam.",
      },
      {
        icon: <FaPersonBooth />,
        title: "tailored to you",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem eos alias molestias fuga expedita, aspernatur sint illo debitis aperiam.",
      },
      {
        icon: <FaSearchLocation />,
        title: "best locations",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem eos alias molestias fuga expedita, aspernatur sint illo debitis aperiam.",
      },
      {
        icon: <FaHeadphonesAlt />,
        title: "personal service 24/7",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem eos alias molestias fuga expedita, aspernatur sint illo debitis aperiam.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="why we are a great choice?"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
