import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Banner({ children, title, subtitle }) {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 0.6, {
      delay: 0.4,
      ease: "power3.out",
      opacity: 0,
      y: 10,
      stagger: {
        amount: 0.2,
      },
    });
  }, [line1, line2]);

  return (
    <div className="banner">
      <span className="line-wrap">
        <h1 ref={(el) => (line1 = el)}>{title}</h1>
      </span>
      <div></div>
      <span className="line-wrap">
        <p ref={(el) => (line2 = el)}>{subtitle}</p>
      </span>
      {children}
    </div>
  );
}
