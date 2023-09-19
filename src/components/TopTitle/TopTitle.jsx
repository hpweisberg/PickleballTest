import { Bars3Icon } from '@heroicons/react/20/solid';

const TopTitle = ({ handleShowNav, showNav }) => {
  return (
    <div className="flex justify-start items-center z-10">
      <div className="pl-4"> {/* Add padding here */}
        <button
          onClick={handleShowNav}
          className='p-2 transform transition-transform duration-300 ease-in-out'
        >
          <Bars3Icon className='w-10 h-10' />
        </button>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <img
          src="/pickleballLogo.png"
          alt="All State Pickleball League logo"
          className="w-[300px] md:w-auto h-[120px] mt-2 pr-4"
        />
      </div>
    </div>
  );
};

export default TopTitle;
