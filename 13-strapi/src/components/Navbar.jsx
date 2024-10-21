import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import NavLinks from './NavLinks';

function NavBar() {
  const { toggleSidebar, setPageId } = useGlobalContext();
  function handleSubmenu(e) {
    // console.log(e.target);
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  }
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}
export default NavBar;
