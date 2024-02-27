import React from "react";
import Title from "../Title/Title";
import NextBtn from "../NextBtn/NextBtn";
import BackBtn from "../BackBtn/BackBtn";

export default function YourAddOns(props) {
  return (
    <section className="h-full w-[70%] p-10 px-28 pb-0 flex flex-col justify-between">
      <Title
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-4">
        <div
          onClick={() => props.changeFirstAdd(!props.firstAdd)}
          className={`h-20 w-full px-5 border-2 transition-colors hover:border-purple-600 rounded-xl cursor-pointer flex justify-between items-center ${
            props.firstAdd ? "bg-gray-200 border-purple-600" : ""
          }`}
        >
          <input
            checked={props.firstAdd}
            type="checkbox"
            className="checkbox checkbox-sm w-[9%] flex justify-center items-center"
          />
          <div className="w-[91%] flex items-center justify-between">
            <div>
              <p className="font-[ubuntuBlod] text-lg text-[#002551]">
                Online service
              </p>
              <p>Access to multiplayer games</p>
            </div>
            <div>
              <p className="text-xl text-purple-600">
                {props.monthPrice ? "+$1/mo" : "+$10/yr"}
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => props.changeSecondAdd(!props.secondAdd)}
          className={`h-20 w-full px-5 border-2 transition-colors hover:border-purple-600 rounded-xl cursor-pointer flex justify-between items-center ${
            props.secondAdd ? "bg-gray-200 border-purple-600" : ""
          }`}
        >
          <input
            checked={props.secondAdd}
            type="checkbox"
            className="checkbox checkbox-sm w-[9%] flex justify-center items-center"
          />
          <div className="w-[91%] flex items-center justify-between">
            <div>
              <p className="font-[ubuntuBlod] text-lg text-[#002551]">
                Larger storage
              </p>
              <p>Extra 1TB of cloud save</p>
            </div>
            <div>
              <p className="text-xl text-purple-600">
                {props.monthPrice ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => props.changeThirdAdd(!props.thirdAdd)}
          className={`h-20 w-full px-5 border-2 transition-colors hover:border-purple-600 rounded-xl cursor-pointer flex justify-between items-center ${
            props.thirdAdd ? "bg-gray-200 border-purple-600" : ""
          }`}
        >
          <input
            checked={props.thirdAdd}
            type="checkbox"
            className="checkbox checkbox-sm w-[9%] flex justify-center items-center"
          />
          <div className="w-[91%] flex items-center justify-between">
            <div>
              <p className="font-[ubuntuBlod] text-lg text-[#002551]">
                Customizable Profile
              </p>
              <p>Custom theme on your profile</p>
            </div>
            <div>
              <p className="text-xl text-purple-600">
                {props.monthPrice ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <BackBtn changePage={props.changePage} page="plan" />
        <NextBtn changePage={props.changePage} page="summary" />
      </div>
    </section>
  );
}
