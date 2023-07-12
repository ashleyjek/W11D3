// import { useDispatch } from "react-redux";
// import { addItem } from "../../store/cart";
// import { useState } from "react";

function ProduceDetails({ produce }) {
  const cartItem = {};
  // const dispatch = useDispatch();
  // const [item, setItem] = useState("");

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
        onClick={console.log("CLICKED")}
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          // onClick={console.log("CLICKED")}  
          className={"plus-button" + (cartItem ? " selected" : "")}
          // onClick={dispatch(addItem(produce.id))}  
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;