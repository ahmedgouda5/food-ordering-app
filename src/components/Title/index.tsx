import React from "react";
import { TittleProps } from "../../../constents";

const Tittle = ({head,para}:TittleProps) => {
  return (
    <div className="flex justify-center flex-col items-center py-5">
      <h4  className="text-xl uppercase  text-gray-500">{head}</h4>
      <p className="text-4xl text-orange-600 font-semibold" >{para}</p>
    </div>
  );
};

export default Tittle;
