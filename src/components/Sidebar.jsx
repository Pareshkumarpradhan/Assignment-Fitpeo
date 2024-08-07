/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  TransitionChild,
} from "@headlessui/react";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  HomeIcon,
  ShoppingBagIcon,
  UsersIcon,
  WalletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import ActivityList from "./ActivityList";
import Feedback from "./Feedback";
import Services from "./Services";
import OrderCard from "./OrderCard";
import DeliveryCard from "./DeliveryCard";
import CancelledCard from "./CancelledCard";
import RevenueCard from "./RevenueCard";
import ProfiteCard from "./ProfiteCard";
import ActivityChart from "./ActivityChart";
import GoalChart from "./GoalChart";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Chart-bar", href: "#", icon: ChartBarSquareIcon, current: false },
  { name: "Shopping-bag", href: "#", icon: ShoppingBagIcon, current: false },
  { name: "Wallet", href: "#", icon: WalletIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
  {
    name: "Logout",
    href: "#",
    icon: ArrowRightStartOnRectangleIcon,
    current: false,
  },
];
// const userNavigation = [
//   { name: "Your profile", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="-mx-2 flex-1 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 shrink-0"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
          <div className="flex h-16 shrink-0 items-center justify-center">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>
          <nav className="mt-8">
            <ul role="list" className="flex flex-col items-center space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white",
                      "group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6"
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0"
                    />
                    <span className="sr-only">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="lg:pl-20">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 bg-gray-900">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="h-6 w-px bg-gray-900/10 lg:hidden"
            />

            <div className="flex flex-1 gap-x-4 lg:gap-x-6  ">
              <form action="#" method="GET" className="relative flex flex-1 ">
                <label htmlFor="search-field" className="sr-only ">
                  Search
                </label>
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-1 h-full w-5 text-gray-400"
                />
                <input
                  id="search-field"
                  name="search"
                  type="search"
                  placeholder="Search..."
                  className="block h-full sm:w-80 w-full border-0 py-0 pl-8 pr-0 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-gray-600/40 rounded-sm"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <EnvelopeIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <Cog6ToothIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Separator */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-white"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />
                    {/* <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                      >
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 text-gray-400"
                      />
                    </span> */}
                  </MenuButton>
                  {/* <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems> */}
                </Menu>
              </div>
            </div>
          </div>

          <main className=" bg-black">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
              <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              </div>
              <div className="mt-6 grid sm:grid-cols-12 gap-y-10 gap-x-6 xl:gap-x-8">
                <div className=" rounded-lg shadow min-h-[80px]  sm:col-span-8 grid sm:grid-cols-12 gap-2 sm:gap-4 p-2">
                  <div className=" rounded-lg shadow min-h-[60px]  sm:col-span-3">
                          <OrderCard totalOrders={75} percentageChange={3}/>
                  </div>
                  <div className=" rounded-lg shadow min-h-[60px] sm:col-span-3">
                          <DeliveryCard totalDelivered={70} percentageChange={-3}/>
                  </div>
                  <div className=" rounded-lg shadow min-h-[60px] sm:col-span-3">
                          <CancelledCard totalCancelled={"05"} percentageChange={3}/>
                  </div>
                  <div className=" rounded-lg shadow min-h-[60px]  sm:col-span-3">
                        <RevenueCard totalRevenue={"$75k"} percentageChange={-3}/>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg shadow min-h-[80px] sm:col-span-4 ">
                  <div className="flex sm:justify-between items-center p-4">
                      <ProfiteCard totalRevenue={"$7559.25k"} percentageChange={3}/>
                      <GoalChart />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-12 gap-y-10 gap-x-6 xl:gap-x-8">
                <div className="bg-gray-800 rounded-lg shadow min-h-[150px] sm:col-span-8">
                  <ActivityChart />
                </div>
                <div className="bg-gray-800 rounded-lg shadow min-h-[150px] sm:col-span-4">
                  <Services />
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-12 gap-y-10 gap-x-6 xl:gap-x-8">
                <div className="bg-gray-800 rounded-lg shadow min-h-[300px] sm:col-span-8">
                  <ActivityList />
                </div>
                <div className="bg-gray-800 rounded-lg shadow min-h-[300px] sm:col-span-4">
                  <Feedback />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
