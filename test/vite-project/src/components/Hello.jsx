import React from "react";

function Hello({ person }) {
  return (
    <h1>
      Hello {person.name} {person.phone} {person.seats.join(',')}
    </h1>
  );
}

export default Hello;
