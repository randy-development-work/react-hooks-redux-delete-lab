import React from "react";
import { bandRemoved } from "./bandsSlice";
import { useDispatch } from "react-redux";

function Band({ band }) {
  const dispatch = useDispatch();
  const handleBandDelete = () => {
    dispatch(bandRemoved(band.id));
  };
  return (
    <li>
      {band.name}
      <button onClick={handleBandDelete}>Delete Band</button>
    </li>
  );
}

export default Band;
