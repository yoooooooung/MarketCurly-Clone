import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import './Navbar.css'

// import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    // window.innerWidth > 960 && 
    setDropdown(true);
  };

  const onMouseLeave = () => {
    // window.innerWidth > 960 && 
    setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.subCtg ? (
        <>
          <button className="buttons"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {
            // window.innerWidth < 960 && 
            depthLevel === 0 ? (
              items.ctg
            ) : (
              <a href='#'>{items.ctg}</a>
            //   <Link to={items.url}>{items.ctg}</Link>
            )}

            {depthLevel > 0 
            // && window.innerWidth < 960 
            ? null : depthLevel > 0 
            // &&window.innerWidth > 960 
              ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.subCtg}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.subCtg ? (
        <>
          <button className="buttons"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.ctg}{' '}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.subCtg}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href={items.url}>{items.ctg}</a>
        // <Link to={items.url}>{items.ctg}</Link>
      )}
    </li>
  );
};

export default MenuItems;
