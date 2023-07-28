import { RootState } from '@/redux/store';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

export default function ProductCart() {
  //  cart Length
  const cart = useSelector((state: RootState) => state.carts.cart.length);
  return (
    <div className="relative">
      <AiOutlineShoppingCart color="white" title="Cart" size={22} />
      <span className=" absolute -right-1.5 -top-1.5 rounded-full bg-red-600 px-1 text-xs font-bold text-gray-100">
        {cart}
      </span>
    </div>
  );
}
