/* eslint-disable react/prop-types */

import { ShoppingCartIcon } from "@heroicons/react/20/solid";


const OrderCard = ({ totalOrders, percentageChange }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col place-items-start justify-center space-y-3">
        <div className="p-2 bg-blue-500 rounded-md">
          <ShoppingCartIcon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-400 mb-2">Total Orders</p>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-sm font-semibold flex items-center">
          <span
            className={`flex items-center ${
              percentageChange >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {percentageChange >= 0 ? (
              <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414L10 4.586l4.707 4.707a1 1 0 11-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414L10 16.414 5.293 11.707a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {Math.abs(percentageChange)}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
