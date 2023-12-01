import { useSelector } from "react-redux";
import "./App.css";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
const cart = true;

function App() {
  const cart = useSelector((state) => {
    return state.products;
  });
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 gap-2">
        <div className={cart.length ? "col-span-9" : "col-span-12"}>
          <Home />
        </div>

        {cart.length && (
          <div className="col-span-3 ">
            <Cart />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
