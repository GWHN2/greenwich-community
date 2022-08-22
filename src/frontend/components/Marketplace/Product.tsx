import Image from "next/image";
import React from "react";
import Button from "../common/Button";

interface ProductProps {
  id: string;
  name: string;
  image: any;
  value: number;
}

const Product = (props: ProductProps) => {
  const { id, name, image, value } = props;

  return (
    <div className="flex flex-col items-center justify-center p-3 transition duration-300 bg-white rounded-lg shadow-xl cursor-pointer hover:scale-105">
      <div className="relative h-40 w-72 lg:w-96">
        <Image src={image} alt="logo" layout="fill" objectFit="contain" />
      </div>
      <div className="w-full">
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <span className="flex items-center justify-center w-full font-semibold">
        <span className="text-lg">Price: </span>
        {value} Tokens
      </span>
      <Button className="px-8">Buy</Button>
    </div>
  );
};

export default Product;
