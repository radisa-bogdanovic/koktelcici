import Button from "../ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Details from "../ui/detailsAboutDrink";

function Pocetna() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const instance = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  });

  const onClc = () => {
    navigate("/kategorije");
  };

  async function getRandom() {
    try {
      const response = await instance.get();

      if (response.data) {
        setData(response.data);
        setError(null);
      }
    } catch (error) {
      if (error) {
        setError(error.message);
        setData(null);
      }
    }
  }

  const onRequestSend = () => {
    setData(null);
    setError(null);
    setMessage("Loading...");
    getRandom();
  };

  return (
    <div
      style={{
        padding: "32px 16px",
      }}
    >
      <h3>
        Dobrodosli na nas sajt, kliknite na button i pogledajte kategorije
      </h3>
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          paddingBottom: "24px",
        }}
      >
        <Button text={"Kategorije"} tip={"default"} onClickOnButton={onClc} />
        <Button
          text={"Ucitaj nasumicnu kategoriju"}
          tip={"default"}
          onClickOnButton={onRequestSend}
        />
      </div>

      {data ? (
        <Details {...data.drinks[0]} />
      ) : error ? (
        <p style={{ textAlign: "center" }}>{error}</p>
      ) : (
        <p style={{ textAlign: "center" }}>{message}</p>
      )}
    </div>
  );
}

export default Pocetna;
