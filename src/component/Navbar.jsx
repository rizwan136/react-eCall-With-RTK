import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => {
    return state.products;
  });
  return (
    <>
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl ">eShop</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="flex gap-2">
                <p className="hover:underline text-2xl uppercase">
                  cart{data.length > 0 && <span>:</span>}
                </p>
                <p className="text-2xl">{data.length > 0 && data.length}</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
