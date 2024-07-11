import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        margin: "0 auto",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Link to={"/"}> Pocetna</Link>{" "}
      <Link to={"/kategorije"}> Kategorije </Link>{" "}
      <Link to={"/about-us"}> O nama</Link>
    </div>
  );
}

export default Navigation;
