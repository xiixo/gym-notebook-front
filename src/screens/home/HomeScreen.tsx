import { Link } from "react-router";
import styles from "./HomeScreen.module.css";

export default function HomeScreen() {
  return (
    <>
      <h1 className={styles.head}>Home</h1>
      <p>Hello</p>
      <Link to="/workout">Go to workout</Link>
    </>
  );
}
