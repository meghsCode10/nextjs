import { FaShoppingBasket } from "react-icons/fa";

const Card = ({ name, img }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg text-center">
      <img src={img} alt={name} className="mx-auto h-24" />
      <h3 className="text-white text-xl font-bold mt-2">{name}</h3>
      <button className="mt-4 bg-orange-500 px-4 py-2 rounded-full flex items-center justify-center gap-2 text-white">
        <FaShoppingBasket /> Add to cart
      </button>
    </div>
  );
};

export default Card;
