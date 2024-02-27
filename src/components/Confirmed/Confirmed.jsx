import React from "react";
import "./Confirmed.css";

export default function Confirmed() {
  return (
    <section className="h-full w-[70%] p-10 px-28 pb-0 flex flex-col gap-10 justify-center items-center">
      <div className="h-24 w-24 rounded-[50%] confirmed"></div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-5xl font-[ubuntuBlod] text-[#002551]">Thank you!</p>
        <p className="text-center text-lg font-[ubuntuMedium]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
}
