import React from "react";

export default function NextBtn(props) {
  return (
    <button
      onClick={() => props.changePage(props.page)}
      className="btn h-14 w-32 text-lg text-[#FEFEFE] border-none bg-[#002551] hover:bg-[#00367e] font-[ubuntuBlod]"
    >
      Next Step
    </button>
  );
}
