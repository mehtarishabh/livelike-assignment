import "./ProductList.scss";
import ProductCard from "./ProductCard/ProductCard";
import { useState } from "react";

function ProductList({ products }) {
  return (
    <div className="ProductList">
        <div className="ProductList-filter">
            
        </div>
      <div className="ProductList-list">
        {products.map((product) => {
            return <ProductCard product={product} key={product.id}/>;
        })}
      </div>
    </div>
  );
}

export default ProductList;
