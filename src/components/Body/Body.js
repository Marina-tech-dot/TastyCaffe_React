import { useLoaderData } from "react-router-dom";
import { Menu } from './Menu/Menu'
import styles from './Body.module.scss'

export const Body = () => {
  const transformData = (data) => {
    const loaded = [];
    for (let key in data) {
      loaded.push({ ...data[key], id: key });
    }
    return loaded
  };

    const data = useLoaderData();


  return (
    <main className={styles.container}>
      <div className={styles.background}></div>
      <Menu meals={transformData(data)} />
    </main>
  );
}

export async function loader () {
  const response = await fetch("https://tastycaffe-38e0d-default-rtdb.europe-west1.firebasedatabase.app/meals.json") 
  if (!response.ok) {
    console.log('новый упс')
  }
  return response
}