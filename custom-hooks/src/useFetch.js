import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(undefined);
    setIsError(false);
    setIsLoading(true);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch((e) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isError, isLoading };
}
