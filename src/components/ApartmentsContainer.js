import React from "react";
import ApartmentsFilter from "./ApartmentsFilter";
import ApartmentsList from "./ApartmentsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function ApartmentsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ApartmentsFilter rooms={rooms} />
      <ApartmentsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(ApartmentsContainer);
