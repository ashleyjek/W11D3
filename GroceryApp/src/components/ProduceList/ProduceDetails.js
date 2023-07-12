import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart";
import { likeProduce } from "../../store/produce";


function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          onClick={(e => dispatch(likeProduce(produce)))}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={(e => dispatch(addItem(produce.id)))}  
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;