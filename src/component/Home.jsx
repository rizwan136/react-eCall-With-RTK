import { useDispatch } from "react-redux";
import { selectProduct, removeProduct } from "../store/slice/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    name: "Product A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel nunc ut justo sagittis commodo.",
  },
  {
    id: 2,
    name: "Product B",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 3,
    name: "Product C",
    description:
      "Integer feugiat justo vitae nisl bibendum, nec malesuada libero interdum. Aliquam erat volutpat.",
  },
  {
    id: 4,
    name: "Product D",
    description:
      "Suspendisse potenti. Nullam ullamcorper lacinia diam, vel efficitur eros rhoncus nec.",
  },
  {
    id: 5,
    name: "Product E",
    description:
      "Vivamus vestibulum dolor a est ornare, a tincidunt odio laoreet. Etiam tempus mauris id fringilla suscipit.",
  },
];
const Home = () => {
  const dispatch = useDispatch();
  const addProduct = (payload) => {
    dispatch(selectProduct(payload));
  };
  const deleteProduct = (payload) => {
    dispatch(removeProduct(payload));
  };
  return (
    <>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-xs rounded overflow-hidden shadow-lg p-6 bg-white"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600">{product.description}</p>
                <hr className="my-4" />
              </div>
              <div className="flex float-right items-center ">
                <div className="shadow-inner shadow-slate-300 rounded-lg">
                  <button className="">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="px-4 py-2 text-slate-500 hover:text-2xl hover:font-bold"
                      onClick={() => {
                        deleteProduct(product);
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="px-4 py-2 text-slate-500 hover:text-2xl hover:font-bold"
                      onClick={() => {
                        addProduct(product);
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
