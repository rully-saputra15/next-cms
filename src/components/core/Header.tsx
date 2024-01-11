const Header = () => {
  return (
    <nav className="w-screen flex flex-row justify-between items-center border-b p-5">
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-2xl font-bold">Next.js</h1>
      </div>
      <div className="flex flex-row items-center gap-5">
        <h1 className="text-lg">Action</h1>
      </div>
    </nav>
  );
};

export default Header;
