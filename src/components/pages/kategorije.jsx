import Button from "../ui/button";
import { useState } from "react";
import useFetchData from "../../utils/hooks/useFechData";
import { useNavigate } from "react-router-dom";

function Kategorije() {
  const navigate = useNavigate();
  const { data } = useFetchData("list.php?c=list");

  const onClc = (route) => {
    const finalRoute = route.replace("/", "or").split(" ").join("_");
    navigate(`/kategorije/${finalRoute}`);
  };

  return (
    <div
      style={{
        padding: "32px 16px",
      }}
    >
      <h3>Kategorije</h3>
      <div
        style={{
          padding: "24px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {data &&
          data.drinks.map((drink) => {
            return (
              <Button
                text={drink.strCategory}
                tip={"default"}
                onClickOnButton={() => {
                  onClc(drink.strCategory);
                }}
                key={drink.strCategory}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Kategorije;
