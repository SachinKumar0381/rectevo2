import React, { useState } from "react";

const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
 const [item,setItem]=useState(props.title);
 setItem(props.title);
  return (
    // <Stack data-cy="product">
    //   <Image data-cy="product-image" />
    //   <Text data-cy="product-category"></Text>
    //   <Tag>
    //     <TagLabel data-cy="product-gender"></TagLabel>
    //   </Tag>
    //   <Heading data-cy="product-title"></Heading>
    //   <Box data-cy="product-price"></Box>
      
    // </Stack>
    <>
    <h1>{item}</h1>
    </>
  );
};

export default Product;
