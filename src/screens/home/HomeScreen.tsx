import { Link } from "react-router";
import styles from "./HomeScreen.module.css";

import WebApp from "@twa-dev/sdk";

export default function HomeScreen() {
  return (
    <>
      <h1 className={styles.head}>Home</h1>
      <p>Hello {WebApp?.initDataUnsafe?.user?.first_name}</p>
      <p>Hello {JSON.stringify(WebApp?.safeAreaInset)}</p>
      <p>Hello {JSON.stringify(WebApp?.contentSafeAreaInset)}</p>
      <Link to="/workout">Go to workout</Link>
    </>
  );
}
