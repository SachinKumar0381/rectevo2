import React, { useEffect, useState } from "react";
import Product from "./Product";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [items,setItems]=useState([]);
  useEffect(()=>{
    const data=()=>{
      fetch('http://localhost:8080/products')
      .then((r)=>r.json())
      .then((r)=>{
        setItems(r);
      })
    }
    data();
  },[]);
  
  
  return (
    <div>
        <h1>products</h1>
           <Product {...items}/>
        
    </div>
  );
};

export default Products;
