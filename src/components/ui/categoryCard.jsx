import { useNavigate } from "react-router-dom";
import Button from "./button";

function KarticaPica({ name, link, id }) {
  const navigate = useNavigate();

  const goVisit = () => {
    navigate("/pice/" + id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "280px",
        height: "330px",
        borderRadius: "16px",
        backgroundColor: "wheat",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "55%",
        }}
      >
        {" "}
        <img
          style={{
            height: "100%",
            width: "100%",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
          src={link}
          alt={`${name} img`}
        />
      </div>

      <div
        style={{
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          height: "100px",
          justifyContent: "space-between",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <h4 style={{ margin: 0, textAlign: "center" }}>{name}</h4>
        <p style={{ margin: 0, textAlign: "center" }}>ID:{id}</p>

        <Button
          text={"Vidi detalje"}
          tip={"default"}
          onClickOnButton={goVisit}
        ></Button>
      </div>
    </div>
  );
}

export default KarticaPica;
