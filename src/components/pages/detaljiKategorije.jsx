import useFetchData from "../../utils/hooks/useFechData";
import { useParams } from "react-router-dom";
import Details from "../ui/detailsAboutDrink";

function DetaljiKategorije() {
  const params = useParams();
  const { data } = useFetchData(`lookup.php?i=${params.id}`);

  return (
    <div>
      {/* <h3>{data && data.drinks && data.drinks[0].strDrink}</h3> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data ? <Details {...data.drinks[0]} /> : <p> Loading data...</p>}
      </div>
    </div>
  );
}

export default DetaljiKategorije;
