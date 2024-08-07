import {
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "Goals ",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-500 bg-opacity-10",
  },

  {
    title: "Popular Dishes",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-500 bg-opacity-10",
  },

  {
    title: "Menus",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-500 bg-opacity-10",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <div >
      {actions.map((action) => (
        <div
          key={action.title}
          className={classNames("group relative px-6 py-4 ")}
        >
          <div className="flex items-center space-x-3 ">
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "inline-flex rounded-full p-2 "
              )}
            >
              <action.icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <span>
              <h3 className="text-base font-semibold leading-6 text-white">
                <a href={action.href} className="focus:outline-none">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {action.title}
                </a>
              </h3>
            </span>
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
