import React from "react";
import "./StepBar.css";

export default function StepBar(props) {
  return (
    <section className="h-full w-[30%] rounded-[15px] step-bar pl-12 pt-12 flex flex-col gap-8">
      <div className="flex gap-6">
        <div
          className={`h-12 w-12 rounded-[50%] border-2 border-[#FEFEFE] flex justify-center items-center ${
            props.currentPage === "yourinfo" ? "bg-[#b6dcfa] border-none" : null
          }`}
        >
          <p className="text-[#FEFEFE] text-2xl font-[ubuntuBlod]">1</p>
        </div>
        <div>
          <p className="text-sm">STEP 1</p>
          <p className="text-[#FEFEFE] text-xl font-[ubuntuBlod]">YOUR INFO</p>
        </div>
      </div>

      <div className="flex gap-6">
        <div
          className={`h-12 w-12 rounded-[50%] border-2 border-[#FEFEFE] flex justify-center items-center ${
            props.currentPage === "plan" ? "bg-[#b6dcfa] border-none" : null
          }`}
        >
          <p className="text-[#FEFEFE] text-2xl font-[ubuntuBlod]">2</p>
        </div>
        <div>
          <p className="text-sm">STEP 2</p>
          <p className="text-[#FEFEFE] text-xl font-[ubuntuBlod]">
            SELECT PLAN
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div
          className={`h-12 w-12 rounded-[50%] border-2 border-[#FEFEFE] flex justify-center items-center ${
            props.currentPage === "youraddons"
              ? "bg-[#b6dcfa] border-none"
              : null
          }`}
        >
          <p className="text-[#FEFEFE] text-2xl font-[ubuntuBlod]">3</p>
        </div>
        <div>
          <p className="text-sm">STEP 3</p>
          <p className="text-[#FEFEFE] text-xl font-[ubuntuBlod]">ADD-ONS</p>
        </div>
      </div>

      <div className="flex gap-6">
        <div
          className={`h-12 w-12 rounded-[50%] border-2 border-[#FEFEFE] flex justify-center items-center ${
            props.currentPage === "summary" ? "bg-[#b6dcfa] border-none" : null
          }`}
        >
          <p className="text-[#FEFEFE] text-2xl font-[ubuntuBlod]">4</p>
        </div>
        <div>
          <p className="text-sm">STEP 4</p>
          <p className="text-[#FEFEFE] text-xl font-[ubuntuBlod]">SUMMARY</p>
        </div>
      </div>
    </section>
  );
}
