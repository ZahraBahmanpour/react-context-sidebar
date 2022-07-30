import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import styles from "./sidebar.module.css";
import { i18n } from "./i18n";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, direction } = useGlobalContext();
  const openClass = isSidebarOpen
    ? `${styles.sidebar} ${styles["show-sidebar"]}`
    : `${styles.sidebar}`;

  const directionClass =
    direction === "rtl"
      ? `${styles["sidebar-rtl"]}`
      : `${styles["sidebar-ltr"]}`;

  const translation = direction === "rtl" ? i18n.links.fa : i18n.links.en;

  return (
    <aside className={`${openClass} ${directionClass}`}>
      <div className={styles["sidebar-header"]}>
        <button className={styles["close-btn"]} onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
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
    </aside>
  );
};

export default Sidebar;
