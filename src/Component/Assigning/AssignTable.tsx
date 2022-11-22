import React from "react";

const tableHead = [
  "App#",
  "Loan type",
  "Created on",
  "Company name",
  "Loan amount",
  "Status",
  "Assigned to",
  "",
];

const AssignTable = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://63735b60348e9472990a1e01.mockapi.io/assignee"
      );
      const data = await res.json();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="font-roboto h-full border-2 border-transparent focus:border-blue-200">
      <table className="table-auto w-full relative">
        <thead className="border-b border-gray-300 sticky top-0 bg-white">
          <tr>
            {tableHead.map((item, index) => (
              <th className="text-start text-sm font-medium p-3" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((singleRecord, index) => (
              <tr key={index}>
                <td className="p-3 text-sm">
                  <a className="focus:text-blue-500" tabIndex={1}>
                    {singleRecord.app}
                  </a>
                </td>
                <td className="p-3 text-sm">{singleRecord.loanType}</td>
                <td className="p-3 text-sm">
                  {new Date(singleRecord.createdOn).toDateString()}
                </td>
                <td className="p-3 text-sm">{singleRecord.companyName}</td>
                <td className="p-3 text-sm pl-3 text-center">
                  {singleRecord.loanAmount}
                </td>
                <td className="p-3 text-sm">{singleRecord.status}</td>
                <td className="p-3 text-sm">{singleRecord.AssignedTo}</td>
                <td className="p-3 text-sm">
                  <select className="border border-gray-300 rounded-md p-1 px-2 w-[150px] text-sm">
                    <option>Assign to</option>
                    <option>Drake</option>
                  </select>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignTable;
