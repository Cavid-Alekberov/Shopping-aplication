import { useState, useEffect, useCallback } from "react";
import {  IItems } from "../../types";

export const usePost = (url: string, cartItems: IItems[]) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(cartItems),
        headers: {
          "Content-type": "aplication/json",
        },
      });
      const data = await response.json();
    } catch (error) {
      setError("An error occurred. Awkward..");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { loading, error };
};
