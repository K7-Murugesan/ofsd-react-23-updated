import { useEffect, useState } from "react";

let useFetch = (URL) => {
  let [apiData, setApiData] = useState([]);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await fetch(URL);

        if (!res.ok) {
          throw new Error("Newtwork Issue");
        }

        let data = await res.json();

        setApiData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

  }, []);

  return [ apiData, isLoading, error ];
};

export default useFetch;
