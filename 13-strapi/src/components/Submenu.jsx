import { useGlobalContext } from '../context';
import sublinks from '../data';
import { useRef } from 'react';

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  function handleMouseLeave(event) {
    const submenu = submenuContainer.current;
    const { clientX, clientY } = event;

    const { left, bottom, right } = submenu.getBoundingClientRect();

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  }

  return (
    <div
      className={`submenu ${currentPage ? 'show-submenu' : ''}`}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default Submenu;
