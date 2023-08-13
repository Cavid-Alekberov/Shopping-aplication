import { useState, useEffect, useCallback } from "react";
import { IData } from "../types";

export const useFetch = (url: string) => {
    const [items, setItems] = useState([] as IData[]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchItems = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            const loadedItems = [];

            for (const key in data) {
                loadedItems.push({
                    id: key,
                    category: data[key].category,
                    description: data[key].description,
                    image: data[key].image,
                    price: data[key].price,
                    title: data[key].title,
                });
            }

            setItems(loadedItems);

        } catch (error) {
            setError("An error occurred. Awkward..");
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    return { items, loading, error };
};
