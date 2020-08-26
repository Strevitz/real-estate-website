import React from "react";
import Apartment from "./Apartment";

export default function RoomlList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no apartments matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Apartment key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
