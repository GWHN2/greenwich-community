import React from "react";
import { importFolder } from "../../utils/importFolder";
import Product from "./Product";

const ProductList = () => {
  const Images = importFolder(
    require.context(
      "../../../public/images/marketplace",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const products = [
    {
      id: "products-1",
      name: "products-",
      image: Images["1.jpg"],
      value: 10,
    },
    {
      id: "products-2",
      name: "products-",
      image: Images["2.png"],
      value: 10,
    },
    {
      id: "products-3",
      name: "products-",
      image: Images["3.jpg"],
      value: 10,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((course, index) => {
          return (
            <div key={index}>
              <Product {...course} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
