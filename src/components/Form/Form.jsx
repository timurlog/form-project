import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StepBar from "../StepBar/StepBar";
import YourInfo from "../YourInfo/YourInfo";
import Plan from "../Plan/Plan";
import YourAddOns from "../YourAddOns/YourAddOns";
import Summary from "../Summary/Summary";
import Confirmed from "../Confirmed/Confirmed";

export default function Form() {
  const [currentPage, setCurrentPage] = useState("yourinfo");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTel, setUserTel] = useState("");

  const [selectPlan, setSelectPlan] = useState("");
  const [pricePlan, setPricePlan] = useState(0);
  const [totalPlanPrice, setTotalPlanPrice] = useState(0);
  const [monthPrice, setMonthPrice] = useState(true);

  const [addOn1, setAddOn1] = useState(false);
  const [addOn2, setAddOn2] = useState(false);
  const [addOn3, setAddOn3] = useState(false);
  const [addOn1Price, setAddOn1Price] = useState(0);
  const [addOn2Price, setAddOn2Price] = useState(0);
  const [addOn3Price, setAddOn3Price] = useState(0);

  useEffect(() => {
    if (selectPlan === "arcade") {
      setPricePlan(monthPrice ? 9 : 90);
    }
    if (selectPlan === "advanced") {
      setPricePlan(monthPrice ? 12 : 120);
    }
    if (selectPlan === "pro") {
      setPricePlan(monthPrice ? 15 : 150);
    }
  }, [selectPlan, monthPrice]);

  useEffect(() => {
    setAddOn1Price(0)
    setAddOn2Price(0)
    setAddOn3Price(0)
    if (addOn1) {
      setAddOn1Price(monthPrice ? 1 : 10);
    }
    if (addOn2) {
      setAddOn2Price(monthPrice ? 2 : 20);
    }
    if (addOn3) {
      setAddOn3Price(monthPrice ? 2 : 20);
    }
  }, [addOn1, addOn2, addOn3, monthPrice]);

  useEffect(() => {
    setTotalPlanPrice(pricePlan + addOn1Price + addOn2Price + addOn3Price);
  }, [pricePlan, addOn1Price, addOn2Price, addOn3Price, monthPrice]);

  return (
    <section className="bg-[#fefefe] h-[650px] w-[1100px] rounded-[25px] p-5 flex">
      <StepBar currentPage={currentPage} />
      {currentPage === "yourinfo" && (
        <YourInfo
          changePage={setCurrentPage}
          userName={userName}
          userEmail={userEmail}
          userTel={userTel}
          setUserName={setUserName}
          setUserEmail={setUserEmail}
          setUserTel={setUserTel}
        />
      )}
      {currentPage === "plan" && (
        <Plan
          changePage={setCurrentPage}
          monthPrice={monthPrice}
          setMonthPrice={setMonthPrice}
          myPlan={selectPlan}
          changePlan={setSelectPlan}
          changePrice={setPricePlan}
        />
      )}
      {currentPage === "youraddons" && (
        <YourAddOns
          changePage={setCurrentPage}
          monthPrice={monthPrice}
          firstAdd={addOn1}
          secondAdd={addOn2}
          thirdAdd={addOn3}
          changeFirstAdd={setAddOn1}
          changeSecondAdd={setAddOn2}
          changeThirdAdd={setAddOn3}
        />
      )}
      {currentPage === "summary" && (
        <Summary
          changePage={setCurrentPage}
          myPlan={selectPlan}
          myPrice={pricePlan}
          totalPrice={totalPlanPrice}
          monthPrice={monthPrice}
          firstAdd={addOn1}
          secondAdd={addOn2}
          thirdAdd={addOn3}
        />
      )}
      {currentPage === "confirmed" && <Confirmed />}
    </section>
  );
}
