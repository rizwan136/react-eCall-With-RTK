const Navbar = () => {
  return (
    <>
      {/* <nav className=" border-gray-200 bg-gray-900 flex">
        <div className="flex-1  p-6">
          <h1 className="text-3xl text-white">eShop</h1>
        </div>
        <div className=" p-6">
          <h1 className="text-2xl text-white">Cart</h1>
        </div>
      </nav> */}
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl ">eShop</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <p className="hover:underline text-2xl">cart</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
