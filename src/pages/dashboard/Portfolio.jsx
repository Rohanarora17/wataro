import React from "react";
import PieChart from "../../charts/PieChart";


function Portfolio(props) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-sm chart-box">
      <header className="px-5 py-4 ">
        <h2 className="font-semibold text-lg text-slate-800">Portfolio</h2>
        
      </header>
      <div className="flex flex-col justify-center items-center">
        <PieChart coins={props.coins} />
      </div>
    </div>
  );
}

export default Portfolio;
