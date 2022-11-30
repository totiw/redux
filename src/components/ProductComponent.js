import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../features/product/productSlice";

const ProductComponent = () => {
  const product = useSelector((state) => state.product.name);
  const dispatch = useDispatch();
  return (
    <>
      <div>{product}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeName(e.target.nama.value));
        }}
      >
        <input type="text" name="nama" placeholder="masukkan nama" />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default ProductComponent;
