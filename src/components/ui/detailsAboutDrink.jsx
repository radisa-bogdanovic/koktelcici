import { useEffect, useState } from "react";

function Details(props) {
  const [sastojci, setSastojci] = useState([]);

  useEffect(() => {
    if (props && Object.keys(props).length > 0) {
      const array = [];
      for (let i = 1; i < 15; i++) {
        const object = {
          zacin: props[`strIngredient${i}`],
          kolicina: props[`strMeasure${i}`],
        };

        array.push(object);
      }
      setSastojci(array);
    }
  }, [props]);

  return (
    <div
      style={{ backgroundColor: "wheat", width: "100%", padding: "32px 16px" }}
    >
      <div
        style={{
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "300px", height: "300px" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={props.strDrinkThumb}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "8px",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h4> Naziv pica: {props.strDrink}</h4>
          <p> ID Pica:{props.idDrink}</p>
          <p>Tip case: {props.strGlass}</p>
          <p>
            Alkohol:{" "}
            {props.strAlcoholic === "Alcoholic" ? "Alkohol" : "Nije alkohol"}
          </p>

          <p style={{ maxWidth: "600px", textAlign: "left" }}>
            {props.strInstructions}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        {sastojci
          .filter((sastojak) => sastojak.zacin || sastojak.kolicina)
          .map((sastojak) => {
            return (
              <p key={sastojak.zacin}>
                - {sastojak.zacin} :{" "}
                {sastojak.kolicina ? sastojak.kolicina : "Po izboru"}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default Details;
