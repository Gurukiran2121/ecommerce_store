import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiCheckedShield } from "react-icons/gi";
import { FiRepeat } from "react-icons/fi";
import Addtocart from "./Addtocart";

const Singledetails = (props) => {
  const { data } = props;

  const [name, price, reviews, description, company] = data;
  console.log(name);
  return (
    <>
      <div className="main flex flex-col gap-3 p-3 flex-1">
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
        </div>

        <div className="flex gap-2">
          <span className="text-blue-300">Reviews : </span>
          <h1 className="text-blue-300">{reviews}</h1>
        </div>

        <div className="font-bold">
          <span>MRP : </span>
          <FormatPrice price={price} />
        </div>

        <div>
          <p className="text-justify">{description}</p>
        </div>

        <div className="flex justify-evenly">
          <div className="flex flex-col items-center">
            <MdOutlineLocalShipping className="text-2xl" />
            <h1 className="text-sm">Free Delivery</h1>
          </div>

          <div className="flex flex-col items-center">
            <GiCheckedShield className="text-2xl" />
            <h1 className="text-sm">2 year Warrenty</h1>
          </div>

          <div className="flex flex-col items-center">
            <FiRepeat className="text-2xl" />
            <h1 className="text-sm">10 Days Replacement</h1>
          </div>
        </div>

        <div>
          <span className="font-bold">Brand : </span> <span>{company}</span>{" "}
          <br />
          <span className="font-bold">Avilable : </span> <span>In Stock</span>
        </div>
        

            <div>
                <Addtocart/>
            </div>

      </div>
     
    </>
  );
};

export default Singledetails;
