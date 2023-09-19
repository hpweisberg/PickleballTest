import { useState } from 'react';
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
    <nav className={`nav flex flex-col items-end px-4 bg-slate-200 h-[100vh] absolute ${showNav ? 'open' : ''}`
    }
      style={{ zIndex: 1000 }}
    >

      <div className='flex items-start justify-start'>
        <button
          onClick={handleShowNav}
          className='p-2 transform transition-transform duration-300 ease-in-out'
          // style={{
          //   transform: showNav ? 'rotate(90deg)' : 'rotate(0deg)',
          // }}
        >
          {showNav ? (
            <XMarkIcon className='w-6 h-6' />
          ) : (
            <XMarkIcon className='w-6 h-6' />
          )}
        </button>
      </div>
      <div className={`nav-items z-10 ${showNav ? 'open' : ''}`}>
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
  );
};

export default Navbar;
