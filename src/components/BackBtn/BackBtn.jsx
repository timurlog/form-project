import React from "react";

export default function BackBtn(props) {
  return (
    <button
      onClick={() => props.changePage(props.page)}
      className="btn border-none h-14 w-32 text-lg text-[#002551] shadow-none bg-transparent hover:bg-transparent hover:text-[#00367e] font-[ubuntuBlod]"
    >
      Go Back
    </button>
  );
}
