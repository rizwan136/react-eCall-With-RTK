import { useDispatch, useSelector } from "react-redux";
import { selectProduct, removeProduct } from "../store/slice/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const data = useSelector((state) => {
    console.log(state.products);
    return state.products;
  });
  const dispatch = useDispatch();
  const addProduct = (payload) => {
    dispatch(selectProduct(payload));
  };
  const deleteProduct = (payload) => {
    dispatch(removeProduct(payload));
  };
  return (
    <div>
      <div className="p-4 shadow-inner rounded-lg  mt-8">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <table className="min-w-full  border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((product, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.quantity}</td>
                <td className="py-2 px-4 border-b">
                  <div className="">
                    <button className="">
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="p-2 "
                        onClick={() => {
                          deleteProduct(product);
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="p-2"
                        onClick={() => {
                          addProduct(product);
                        }}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-950 text-white font-bold py-2 px-8 rounded">
            CheckOut!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
