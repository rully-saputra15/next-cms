import { RiAccountCircleFill } from 'react-icons/ri';

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center border-b p-5">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-md font-bold">Next CMS</h1>
        <ul className="flex flex-row gap-5">
          <li>Home</li>
          <li>Insight</li>
          <li>Content</li>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-3xl">
          <RiAccountCircleFill />
        </h1>
      </div>
    </nav>
  );
};

export default Header;
