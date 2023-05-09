import { useFetch } from "../../CustomHooks/useFetch";
import { ItemsList } from "../../Items/ItemsList";
import classes from "./All.module.scss";

export const Electronics = () => {
  const { items, loading, error } = useFetch(
    "https://main-shoppin-app-default-rtdb.firebaseio.com/items.json"
  );

  let filterElectronics = items.filter(
    (item) => item.category === "electronics"
  );

  let content =
    filterElectronics.length > 0 ? (
      filterElectronics.map((item) => (
        <ItemsList
          key={item.id}
          id={item.id}
          category={item.category}
          description={item.description}
          image={item.image}
          price={item.price}
          title={item.title}
        />
      ))
    ) : (
      <p>No found items..</p>
    );

  if (error) {
    content = <p>An error occurred </p>;
  }
  if (loading) {
    content = <p>Loading....</p>;
  }

  return <div className={classes.allPage}>{content}</div>;
};
