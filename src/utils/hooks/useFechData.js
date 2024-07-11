import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(url) {
  const instance = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
  });

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function getFact() {
    try {
      const response = await instance.get(url);

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
  useEffect(() => {
    getFact();
  }, []);

  return { data, error };
}

export default useFetchData;

// 200 - ok
// 400 -error na frontendu (nesto dobro ne saljemo)
// 401 - unautorized - nemamo neki key u heaederu (neki sajtovi/apis traze kljuc da bi mogli da dobijemo podatke)
// 402 - payment required - ovaj error iskoci kada istrosimo neke besplatne stvari
// 403 - nemamo permission da pristupimo podacima
// 404 - not found - stranica nije pronadjena
// 429 - previse requestova
// 500 - server error - to je uvek greska kod be
