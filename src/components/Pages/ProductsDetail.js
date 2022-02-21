import React from "react";
import {useParams} from "react-router";

const ProductsDetail = () => {
  const params = useParams();

  console.log(params);
  return (
    <section>
      <h1>ProductsDetail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductsDetail;
