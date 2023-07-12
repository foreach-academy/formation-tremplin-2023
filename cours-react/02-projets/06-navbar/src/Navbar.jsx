import { FaBars } from 'react-icons/fa';
import img from './assets/logo.png';
import { links, socials } from './data.jsx';
import { useRef, useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : 0
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={img} alt='logo' className='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className={`links-container`} style={linksStyle}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {socials.map((social) => {
            const { id, url, icon } = social;

            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
