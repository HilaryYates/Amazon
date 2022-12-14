import React from "react";

const Product = (props) => {
  console.log(props);
  return (
    <div>
      <h>{props.brand}</h>
      <div>{props.type}</div>
    </div>
  );
};

export default Product;
