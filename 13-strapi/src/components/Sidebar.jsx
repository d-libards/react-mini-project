import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import sublinks from '../data';

function Sidebar() {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
