import React from "react";

export default function Title(props) {
  return (
    <div>
      <p className="text-[#002551] font-[ubuntuBlod] text-4xl pb-2">
        {props.title}
      </p>
      <p className="font-[ubuntuRegular] text-lg">{props.desc}</p>
    </div>
  );
}
