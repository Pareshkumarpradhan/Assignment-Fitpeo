const statuses = {
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};
const activityItems = [
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    commit: "12345671",
    duration: "$250.00",
    status: "Completed",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    commit: "12345672",
    duration: "$250.00",
    status: "Completed",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    commit: "12345673",
    duration: "$250.00",
    status: "Completed",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    commit: "12345674",
    duration: "$250.00",
    status: "Completed",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    commit: "12345675",
    duration: "$250.00",
    status: "Completed",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    commit: "12345676",
    duration: "$250.00",
    status: "Completed",
  },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ActivityList() {
  return (
    <div>
      {/* Activity list */}
      <div className="border-t border-white/10 pt-11">
        <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
          Recent Orders
        </h2>
        <table className="mt-6 w-full whitespace-nowrap text-left">
          <colgroup>
            <col className="w-full sm:w-4/12" />
            <col className="lg:w-4/12" />
            <col className="lg:w-2/12" />
            <col className="lg:w-1/12" />
            <col className="lg:w-1/12" />
          </colgroup>
          <thead className="border-b border-white/10 text-sm leading-6 text-white">
            <tr>
              <th
                scope="col"
                className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
              >
                Customer
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
              >
                Order No.
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
              >
                Amount
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
              >
                Status
              </th>

              {/* <th
                      scope="col"
                      className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
                    >
                      Deployed at
                    </th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {activityItems.map((item) => (
              <tr key={item.commit}>
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <div className="flex items-center gap-x-4">
                    <img
                      alt=""
                      src={item.user.imageUrl}
                      className="h-8 w-8 rounded-full bg-gray-800"
                    />
                    <div className="truncate text-sm font-medium leading-6 text-white">
                      {item.user.name}
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-gray-400">
                      {item.commit}
                    </div>
                    {/* <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                            {item.branch}
                          </span> */}
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                  {item.duration}
                </td>
                <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                  <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                    <time
                      dateTime={item.dateTime}
                      className="text-gray-400 sm:hidden"
                    >
                      {item.date}
                    </time>
                    <div
                      className={classNames(
                        statuses[item.status],
                        "flex-none rounded-full p-1"
                      )}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <div className="hidden text-white sm:block">
                      {item.status}
                    </div>
                  </div>
                </td>

                {/* <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                        <time dateTime={item.dateTime}>{item.date}</time>
                      </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityList;
