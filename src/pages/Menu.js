import { useLoaderData } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";
import styles from "../components/Body/Body.background.module.scss";

export const MenuPage = () => {
  const transformData = (data) => {
    const loaded = [];
    for (let key in data) {
      loaded.push({ ...data[key], id: key });
    }
    return loaded;
  };

  const data = useLoaderData();
  console.log(data)

  return (
    <div className={styles.container}>
      <Menu meals={transformData(data)} />
    </div>
  );
};

export async function loader() {
  const response = await fetch(
    "https://tastycaffe-38e0d-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
  );
  if (!response.ok) {
    console.log("новый упс");
  }
  return response;
}
