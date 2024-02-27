import React from "react";

export default function ConfirmBtn(props) {
  return (
    <button
      onClick={() => props.changePage("confirmed")}
      className="btn h-14 w-32 text-lg text-[#FEFEFE] border-none bg-[#3d36fe] hover:bg-[#3d36fe] font-[ubuntuBlod]"
    >
      Confirm
    </button>
  );
}
