import React from "react";
import Title from "../Title/Title";
import Total from "../Total/Total";
import BackBtn from "../BackBtn/BackBtn";
import ConfirmBtn from "../ConfirmBtn/ConfirmBtn";

export default function Summary(props) {
  return (
    <section className="h-full w-[70%] p-10 px-28 pb-0 flex flex-col justify-between">
      <Title
        title="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />
      <Total
        changePage={props.changePage}
        myPlan={props.myPlan}
        myPrice={props.myPrice}
        monthPrice={props.monthPrice}
        firstAdd={props.firstAdd}
        secondAdd={props.secondAdd}
        thirdAdd={props.thirdAdd}
        totalPrice={props.totalPrice}
      />
      <div className="flex justify-between">
        <BackBtn changePage={props.changePage} page="youraddons" />
        <ConfirmBtn changePage={props.changePage} />
      </div>
    </section>
  );
}
