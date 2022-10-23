import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
  // const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  // const dispatch = useDispatch();
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);
  console.log(value)
  return (
    <div>
      <h2>Number of ice Creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice Cream</button>
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(parseInt(event.currentTarget.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice Creams
      </button>
    </div>
  );
};

export default IceCreamView;
