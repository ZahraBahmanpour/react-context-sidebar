import { useGlobalContext } from "../../../utils/context";
import { i18n } from "../../../utils/i18n";
import styles from "./sidebarMenu.module.css";
import { links } from "../../../utils/data";
import { Link } from "react-router-dom";

export default function SidebarMenu() {
  const { direction } = useGlobalContext();
  const translation = direction === "rtl" ? i18n.links.fa : i18n.links.en;
  return (
    <ul className={styles.links}>
      {Object.keys(links).map((link) => {
        const { id, url, icon } = links[link];
        return (
          <li key={id}>
            <Link to={url}>
              {icon}
              {translation[link]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
