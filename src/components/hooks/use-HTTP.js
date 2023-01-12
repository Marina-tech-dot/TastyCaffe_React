import { useState, useCallback } from "react"

export const useHTTP = () => {
  const [isLoading, setIsLoading] = useState(true)

  const sendRequest = useCallback(
    async (httpInfo={}, fn) => {
  
      const response = await fetch(httpInfo.url, {
        method: httpInfo.method || "GET",
        headers: httpInfo.headers ? httpInfo.headers : {},
        body: JSON.stringify(httpInfo.data)
          ? JSON.stringify(httpInfo.data)
          : null,
      });

      if (response.ok) {
        if (!httpInfo.hasOwnProperty("method")) {
          let responseData = await response.json();
          fn(responseData);
        } 

        setIsLoading(false);
      } else {
        throw new Error("Ups");
      }
    },
    []
  ); 

  return { isLoading, sendRequest};
}