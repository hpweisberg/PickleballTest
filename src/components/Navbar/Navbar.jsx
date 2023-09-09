import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    { text: 'DUPR Account', link: '/account' },
    { text: 'Contact Us', link: '/contact' },
    { text: 'Captains Sign Up', link: '/signup' },
    { text: 'Fall 2023', link: '/fall-2023' },
    { text: 'About', link: '/about' },
    { text: 'League Rules', link: '/league-rules' },
    { text: 'USA Pickleball Rules', link: '/pickleball-rules' },
    { text: 'Follow Us', link: '/follow-us' },
    { text: 'Photo Gallery', link: '/photo-gallery' },
    { text: 'FAQ', link: '/faq' },
    { text: 'Forms', link: '/forms' },
    { text: 'Minor League Pickleball', link: '/minor-league' },
    { text: 'MiLP All State Leaderboard', link: '/milp-leaderboard' },
  ];

  return (
    <nav className='flex flex-col items-end h-screen px-4 bg-slate-200'>
      <div className='flex items-start justify-start'>
        <button onClick={() => setShowNav(!showNav)} className='p-2'>
          <Bars3Icon className='w-6 h-6' />
        </button>
      </div>
      <div className={showNav ? 'flex' : 'hidden'}>
        <ul className='flex flex-col'>
          {navItems.map((item, index) => (
            <li key={index} className='nav-item'>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
