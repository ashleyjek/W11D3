import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateCount } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);


  const handleChange = (e) => {
    setCount(e.target.value);
    dispatch(updateCount(item, 5))
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={handleChange}
        />
        <button
          onClick={() => setCount(count + 1)}
          className="cart-item-button"
        >
          +
        </button>
        <button
          onClick={(e => (count === 1) ? dispatch(removeItem(item.id)) : setCount(count - 1))}
          className="cart-item-button"
        >
          -
        </button>
        <button
          onClick={(e => dispatch(removeItem(item.id)))}
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;