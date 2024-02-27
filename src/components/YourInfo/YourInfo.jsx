import React from "react";
import Title from "../Title/Title";
import NextBtn from "../NextBtn/NextBtn";
import NextDisableBtn from "../NextDisableBtn/NextDisableBtn";

export default function YourInfo(props) {
  return (
    <section className="h-full w-[70%] p-10 px-28 pb-0 flex flex-col justify-between">
      <Title
        title="Personal info"
        desc="Please provide your name, email address, and phone number."
      />
      <form className="w-full">
        <p className="text-[#002551] text-base font-[ubuntuBlod] pb-2">
          Your name is : {props.userName}
        </p>
        <input
          maxLength={40}
          value={props.userName}
          className="w-full h-14 mb-4 px-5 bg-[#FEFEFE] rounded-xl border border-[#002551] text-[#002551] font-[ubuntuRegular] text-lg focus:outline outline-2 outline-purple-800"
          onChange={(e) => props.setUserName(e.target.value)}
          type="text"
          name="yourName"
          id="yourName"
          placeholder="Vingt-Six"
        />

        <p className="text-[#002551] text-base font-[ubuntuBlod] pb-2">
          Your email is : {props.userEmail}
        </p>
        <input
          maxLength={40}
          value={props.userEmail}
          className="w-full h-14 mb-4 px-5 bg-[#FEFEFE] rounded-xl border border-[#002551] text-[#002551] font-[ubuntuRegular] text-lg focus:outline outline-2 outline-purple-800"
          onChange={(e) => props.setUserEmail(e.target.value)}
          type="email"
          name="yourEmail"
          id="yourEmail"
          placeholder="vingt_six@email.com"
        />

        <p className="text-[#002551] text-base font-[ubuntuBlod] pb-2">
          Your phone number is : {props.userTel}
        </p>
        <input
          maxLength={40}
          value={props.userTel}
          className="w-full h-14 mb-4 px-5 bg-[#FEFEFE] rounded-xl border border-[#002551] text-[#002551] font-[ubuntuRegular] text-lg focus:outline outline-2 outline-purple-800"
          onChange={(e) => props.setUserTel(e.target.value)}
          type="tel"
          name="yourNumber"
          id="yourNumber"
          placeholder="e.g.+1 234 567 890"
        />
      </form>
      <div className="flex justify-end">
        {props.userName.length <= 0 ||
        props.userEmail.length <= 0 ||
        props.userTel.length <= 0 ? (
          <NextDisableBtn />
        ) : (
          <NextBtn changePage={props.changePage} page="plan" />
        )}
      </div>
    </section>
  );
}
