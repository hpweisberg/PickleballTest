import { Bars3Icon } from '@heroicons/react/20/solid';

const TopTitle = ({ handleShowNav, showNav }) => {
  return (
    <div className="flex justify-start items-center z-10">
      <div className="flex justify-center items-center flex-grow">
        <img
          src="/pickleballLogo.png"
          alt="All State Pickleball League logo"
          className="w-[250px] md:w-auto max-h-[150px] h-[100px] md:h-auto mt-2 ml-4 md:ml-0"
        />
      </div>
    </div>
  );
};

export default TopTitle;
