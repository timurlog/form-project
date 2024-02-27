import React from "react";

export default function Total(props) {
  return (
    <section>
      <div className="min-h-32 w-full bg-[#f7f9fd] rounded-xl p-8 flex flex-col justify-between gap-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-[ubuntuBlod] text-xl text-[#07387b]">
              {props.myPlan.charAt(0).toUpperCase() + props.myPlan.slice(1)}(
              {props.monthPrice ? "Monthly" : "Yearly"})
            </p>
            <p
              onClick={() => props.changePage("plan")}
              className="cursor-pointer underline"
            >
              Change
            </p>
          </div>
          <div>
            <p className="font-[ubuntuBlod] text-xl text-[#07387b]">
              ${props.myPrice}/{props.monthPrice ? "mo" : "yr"}
            </p>
          </div>
        </div>
        <div className="h-[2px] my-4 w-full bg-gray-200"></div>
        {props.firstAdd ? (
          <div className="flex justify-between">
            <p>Online service</p>
            <p className="font-[ubuntuBlod] text-base text-[#07387b]">
              {props.monthPrice ? "+$1/mo" : "+$10/yr"}
            </p>
          </div>
        ) : null}
        {props.secondAdd ? (
          <div className="flex justify-between">
            <p>Larger storage</p>
            <p className="font-[ubuntuBlod] text-base text-[#07387b]">
              {props.monthPrice ? "+$2/mo" : "+$20/yr"}
            </p>
          </div>
        ) : null}
        {props.thirdAdd ? (
          <div className="flex justify-between">
            <p>Customizable Profile</p>
            <p className="font-[ubuntuBlod] text-base text-[#07387b]">
              {props.monthPrice ? "+$2/mo" : "+$20/yr"}
            </p>
          </div>
        ) : null}
      </div>
      <div className="px-8 pt-5 flex justify-between items-center">
        <p>Total (per {props.monthPrice ? "month" : "year"})</p>
        <p className="text-[#3d36fe] font-[ubuntuBlod] text-2xl">
          ${props.totalPrice}/{props.monthPrice ? "mo" : "yr"}
        </p>
      </div>
    </section>
  );
}
