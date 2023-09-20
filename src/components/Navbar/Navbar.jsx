import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

const Navbar = ({ handleShowNav, showNav }) => {
  // const [showNav, setShowNav] = useState(false);

  const navItems = [
    { text: 'DUPR Account', link: 'https://mydupr.com/' },
    { text: 'Contact Us', link: 'https://www.allstatepickleball.com/contact-us' },
    { text: 'Captains Sign Up', link: 'https://www.allstatepickleball.com/' },
    { text: 'Fall 2023', link: '/https://www.pbrally.com/clubs/allstate/leagues/all-state-fall-23' },
    { text: 'About', link: 'https://www.allstatepickleball.com/general-1' },
    { text: 'League Rules', link: '/league-rules' },
    { text: 'USA Pickleball Rules', link: 'https://usapickleball.org/docs/USA-Pickleball-Official-Rulebook-2023-v4-1.pdf' },
    { text: 'Follow Us', link: 'https://www.allstatepickleball.com/home' },
    { text: 'Photo Gallery', link: 'https://www.allstatepickleball.com/photo-gallery' },
    { text: 'FAQ', link: 'https://www.allstatepickleball.com/faqs' },
    { text: 'Forms', link: 'https://www.allstatepickleball.com/grievance' },
    { text: 'Minor League Pickleball', link: 'https://www.allstatepickleball.com/minor-league-pickleball' },
    { text: 'MiLP All State Leaderboard', link: 'https://www.allstatepickleball.com/minor-league-pickleball-with-all-state' },
  ];

  return (
    <div className='fixed top-0 left-0 w-20 z-10 '>
      <button
        onClick={handleShowNav}
        className='p-6 transform transition-transform duration-300 ease-in-out'
      >
        <Bars3Icon className='w-10 h-10' />
      </button>
      <nav className={`nav flex flex-col items-end px-4 bg-slate-200 h-[100vh] fixed top-0 left-0 ${showNav ? 'open' : ''}`
      }
        style={{ zIndex: 1000 }}
      >

        <div className='flex items-start justify-start '>
          <button
            onClick={handleShowNav}
            className='m-4 transform transition-transform duration-300 ease-in-out'
          >
            {showNav ? (
              <XMarkIcon className='w-8 h-8' />
            ) : (
              <XMarkIcon className='w-8 h-8' />
            )}
          </button>
        </div>
        <div className={`nav-items z-10  ${showNav ? 'open' : ''} overflow-y-auto`}>
          <ul className='flex flex-col'>
            {navItems.map((item, index) => (
              <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                <li className='nav-item'>
                  {item.text}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
