import { FaBars, FaLanguage } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Home = () => {
  const { openSidebar, direction, toggleDirection } = useGlobalContext();
  return (
    <main style={{ direction }}>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={toggleDirection} className="language-toggle">
        <FaLanguage />
      </button>
    </main>
  );
};

export default Home;
