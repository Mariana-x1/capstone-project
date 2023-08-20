import React from "react";
import BildDaten from "@/lib/db";

export default function GalleryCoffeeList() {
  return (
    <section>
      {BildDaten.map((BildInfo) => (
        <div key={BildInfo.id}>
          <img src={BildInfo.imageUrl} alt={BildInfo.name} />
          <h3>{BildInfo.name}</h3>
          <p>{BildInfo.text}</p>
        </div>
      ))}
    </section>
  );
}
