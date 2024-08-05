import React from "react";

export default function MainHeader() {
  return (
    <div className="flex justify-between items-center py-10 fixed top-0 left-0 right-0 w-[80%] max-w-7xl mx-auto my-0">
      <div className="w-[50px]">
        <svg
          className="w-[50px]"
          width="1015"
          height="auto"
          viewBox="0 0 1015 1300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M147.02 8.6086C150.756 3.21682 156.899 0 163.459 0H995C1006.05 0 1015 8.95431 1015 20V195C1015 206.046 1006.05 215 995 215H42.1917C26.0545 215 16.5616 196.872 25.7529 183.609L147.02 8.6086Z"
            fill="#D9D9D9"
          />
          <path
            d="M799.805 656.609C799.805 651.469 801.784 646.525 805.333 642.805L980.528 459.139C992.984 446.08 1015 454.897 1015 472.943V962.891V1280C1015 1291.05 1006.05 1300 995 1300H799.805H21C9.95431 1300 1 1291.05 1 1280V1101.29C1 1090.24 9.9543 1081.29 21 1081.29H779.805C790.85 1081.29 799.805 1072.33 799.805 1061.29V962.891V656.609Z"
            fill="#D9D9D9"
          />
          <path
            d="M0 353C0 341.954 8.95431 333 20 333H456.5H865.407C883.126 333 892.094 354.339 879.693 366.996L708.13 542.113C704.368 545.952 699.219 548.116 693.843 548.116H271C259.954 548.116 251 557.071 251 568.116V726.454C251 737.499 259.954 746.453 271 746.453H682.248C693.294 746.453 702.248 755.408 702.248 766.453V942C702.248 953.046 693.294 962 682.248 962H215.127H20C8.95429 962 0 953.046 0 942L0 548.116V353Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div>
        <div className="w-[50px] h-[50px] bg-white rounded-full py-2 px-3 flex flex-col gap-1 justify-center items-end cursor-pointer group">
          <div className="w-[50%] group-hover:w-full h-[3px] bg-[#1A1A1A] transition-all"></div>
          <div className="w-[75%] group-hover:w-full h-[3px] bg-[#1A1A1A] transition-all"></div>
          <div className="w-full h-[3px] bg-[#1A1A1A]"></div>
        </div>
      </div>
    </div>
  );
}
