import styles from "./sidebarSocials.module.css";
import { social } from "../../../data";

export default function SidebarSocials() {
  return (
    <ul className={styles["social-icons"]}>
      {social.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
}
