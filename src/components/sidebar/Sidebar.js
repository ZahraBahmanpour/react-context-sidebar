import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import styles from "./sidebar.module.css";
import SidebarMenu from "./sidebarMenu/SidebarMenu";
import SidebarSocials from "./sidebarSocials/SidebarSocials";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, direction } = useGlobalContext();
  const openClass = isSidebarOpen
    ? `${styles.sidebar} ${styles["show-sidebar"]}`
    : `${styles.sidebar}`;

  const directionClass =
    direction === "rtl"
      ? `${styles["sidebar-rtl"]}`
      : `${styles["sidebar-ltr"]}`;

  return (
    <aside className={`${openClass} ${directionClass}`}>
      <div className={styles["sidebar-header"]}>
        <button className={styles["close-btn"]} onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <SidebarMenu />
      <SidebarSocials />
    </aside>
  );
};

export default Sidebar;
