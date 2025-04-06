import ProductList from "@/components/shared/products/product-list";
import sampleData from "@/db/sample-data";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <ProductList
        data={sampleData.products}
        title={"Newest Arrivale"}
        limit={4}
      />
    </div>
  );
};

export default Homepage;
