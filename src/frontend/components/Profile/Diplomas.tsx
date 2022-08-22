import React from "react";
import { importFolder } from "../../utils/importFolder";
import Diploma from "./Diploma";

const Diplomas = () => {
  const Images = importFolder(
    require.context(
      "../../../public/images/diplomas",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const diplomas = [
    {
      id: "diploma-1",
      image: Images["1.png"],
    },
    {
      id: "diploma-2",
      image: Images["1.png"],
    },
    {
      id: "diploma-3",
      image: Images["1.png"],
    },
  ];
  return (
    <div className="flex flex-row justify-center">
      {diplomas.map((course, index) => {
        return (
          <div key={index}>
            <Diploma {...course} />
          </div>
        );
      })}
    </div>
  );
};

export default Diplomas;
