import { FaBars, FaLanguage } from "react-icons/fa";
import { useGlobalContext } from "../utils/context";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const { openSidebar, direction, toggleDirection } = useGlobalContext();
  return (
    <>
      <main style={{ direction }}>
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
        <button onClick={toggleDirection} className="language-toggle">
          <FaLanguage />
        </button>
      </main>
      <Outlet />
    </>
  );
};

export default SharedLayout;
