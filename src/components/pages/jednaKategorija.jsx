import Button from "../ui/button";
import { useState } from "react";
import useFetchData from "../../utils/hooks/useFechData";
import { useParams } from "react-router-dom";
import KarticaPica from "../ui/categoryCard";

function JednaKategorija() {
  const params = useParams();
  const { data } = useFetchData(
    `filter.php?c=${
      params.kategorija.includes("_or_")
        ? params.kategorija.replace("_or_", "_/_")
        : params.kategorija
    }`
  );
  const title = params.kategorija.includes("_or_")
    ? params.kategorija.split("_or_").join(" / ").split("_").join(" ")
    : params.kategorija.split("_").join(" ");

  return (
    <div
      style={{
        padding: "32px 16px",
      }}
    >
      <h3>{title}</h3>
      <div
        style={{
          padding: "24px 0",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "48px",
        }}
      >
        {data &&
          data.drinks &&
          data.drinks.map((pice) => {
            return (
              <KarticaPica
                id={pice.idDrink}
                link={pice.strDrinkThumb}
                name={pice.strDrink}
                key={pice.strDrink}
              />
            );
          })}
      </div>
    </div>
  );
}

export default JednaKategorija;
