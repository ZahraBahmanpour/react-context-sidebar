import { useGlobalContext } from "../../../context";
import { i18n } from "../../../i18n";
import styles from "./sidebarMenu.module.css";
import { links } from "../../../data";

export default function SidebarMenu() {
  const { direction } = useGlobalContext();
  const translation = direction === "rtl" ? i18n.links.fa : i18n.links.en;
  return (
    <ul className={styles.links}>
      {Object.keys(links).map((link) => {
        const { id, url, icon } = links[link];
        return (
          <li key={id}>
            <a href={url}>
              {icon}
              {translation[link]}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
