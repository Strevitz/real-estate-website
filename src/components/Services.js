import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem eos alias molestias fuga expedita, aspernatur sint illo debitis aperiam.",
      },
      {
        icon: <FaHiking />,
        title: "free hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem eos alias molestias fuga expedita, aspernatur sint illo debitis aperiam.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free trips",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem eos alias molestias fuga expedita, aspernatur sint illo debitis aperiam.",
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem eos alias molestias fuga expedita, aspernatur sint illo debitis aperiam.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
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
