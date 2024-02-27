import React from "react";
import { useState } from "react";
import "./Plan.css";
import Title from "../Title/Title";
import NextBtn from "../NextBtn/NextBtn";
import BackBtn from "../BackBtn/BackBtn";
import NextDisableBtn from "../NextDisableBtn/NextDisableBtn";

export default function Plan(props) {
  const [isChecked, setIsChecked] = useState(props.monthPrice);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    props.setMonthPrice(!isChecked);
  };

  return (
    <section className="h-full w-[70%] p-10 px-28 pb-0 flex flex-col justify-between">
      <Title
        title="Select your plan"
        desc="You have the option of monthly or yearly billing"
      />
      <div className="flex justify-between">
        <div
          onClick={() => props.changePlan("arcade")}
          className={`${
            props.myPlan === "arcade" ? "bg-gray-200 border-purple-600" : ""
          } h-44 w-40 border-2 rounded-2xl flex flex-col justify-between p-5 pb-2 cursor-pointer transition-colors  hover:border-purple-600`}
        >
          <div className="img img1"></div>
          <div>
            <p className="text-[#03336e] font-[ubuntuBlod] text-xl">Arcade</p>
            <p className="font-[ubuntuBlod]">
              {props.monthPrice ? "$9/mo" : "$90/yr"}
            </p>
          </div>
        </div>

        <div
          onClick={() => props.changePlan("advanced")}
          className={`${
            props.myPlan === "advanced" ? "bg-gray-200 border-purple-600" : ""
          } h-44 w-40 border-2 rounded-2xl flex flex-col justify-between p-5 pb-2 cursor-pointer transition-colors  hover:border-purple-600`}
        >
          <div className="img img2"></div>
          <div>
            <p className="text-[#03336e] font-[ubuntuBlod] text-xl">Advanced</p>
            <p className="font-[ubuntuBlod]">
              {props.monthPrice ? "$12/mo" : "$120/yr"}
            </p>
          </div>
        </div>

        <div
          onClick={() => props.changePlan("pro")}
          className={`${
            props.myPlan === "pro" ? "bg-gray-200 border-purple-600" : ""
          } h-44 w-40 border-2 rounded-2xl flex flex-col justify-between p-5 pb-2 cursor-pointer transition-colors  hover:border-purple-600`}
        >
          <div className="img img3"></div>
          <div>
            <p className="text-[#03336e] font-[ubuntuBlod] text-xl">Pro</p>
            <p className="font-[ubuntuBlod]">
              {props.monthPrice ? "$15/mo" : "$150/yr"}
            </p>
          </div>
        </div>
      </div>
      <div className="h-16 w-full bg-[#edf3fd] flex justify-evenly items-center">
        <p
          className={`text-lg font-[ubuntuBlod] ${
            props.monthPrice ? "text-[#002551]" : null
          }`}
        >
          Monthly
        </p>
        <input
          checked={!isChecked}
          onClick={() => {
            handleCheckboxChange();
            props.setMonthPrice(!props.monthPrice);
          }}
          type="checkbox"
          value="synthwave"
          className="toggle bg-[#fefefe] "
        />
        <p
          className={`text-lg font-[ubuntuBlod] ${
            props.monthPrice ? null : "text-[#002551]"
          }`}
        >
          Yearly
        </p>
      </div>
      <div className="flex justify-between">
        <BackBtn changePage={props.changePage} page="yourinfo" />
        {props.myPlan <= 0 ? (
          <NextDisableBtn />
        ) : (
          <NextBtn changePage={props.changePage} page="youraddons" />
        )}
      </div>
    </section>
  );
}
