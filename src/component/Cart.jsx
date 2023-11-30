import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => {
    return state.products;
  });
  return (
    <div>
      <div className="p-4 shadow-inner rounded-lg  mt-8">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <ul>
          {data.map((product, index) => (
            <li key={index}>
              {product.name},{product.quantity}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-center">
          <button className="bg-red-200 hover:bg-red-900 text-white font-bold py-2 px-8 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
