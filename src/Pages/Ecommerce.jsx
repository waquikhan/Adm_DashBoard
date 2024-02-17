import React from "react";
import { BsCurrencyDollar, BsCurrentDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import DashBoardImage from "../data/DashBoardImage.png";

import {
  StackedChart,
  PieChart,
  Button,
  LineChart,
  SparkLineChart,
} from "../Components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  ecomPieChartData,
  SparklineAreaData,
} from "../data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-24">
      {/* Earning, Customer, Products, Sales, Refund All these developement */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3"
          style={{ background: `url(${DashBoardImage})`, objectFit: "cover" }}
        >
          <div className="flex justify-between item-center">
            <div>
              <p className="font-bold text-gray-300">Earning</p>
              <p className="text-xl text-white mt-2">$63, 448.78</p>
            </div>
          </div>
          <div className="mt-3">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-10 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue update */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-3 rounded-2xl lg:w-1200 md:w-800">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Update</p>
            <div className="flex  items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expenses</span>
              </p>
              <p className="flex items-center gap-2 text-green-500 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="font-semibold text-3xl">$98876</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer text-white ml-3 text-xs rounded-full bg-green-400">
                    40%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="font-semibold text-3xl">$48900</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLineChart
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button 
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <StackedChart width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
