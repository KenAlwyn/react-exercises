import React from "react";

const Table = ({ tabData, onEdit, onDelete }) => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Middle Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Suffix</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Birthdate</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Options</th>
            </tr>
          </thead>
          <tbody>
            {tabData.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-4 py-4 text-center text-gray-500">
                  No data available.
                </td>
              </tr>
            ) : (
              tabData.map((userInfo, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2 font-medium">{idx + 1}</td>
                  <td className="px-4 py-2">{userInfo.firstName}</td>
                  <td className="px-4 py-2">{userInfo.middleName == "" ? "NA" : userInfo.middleName}</td>
                  <td className="px-4 py-2">{userInfo.lastName}</td>
                  <td className="px-4 py-2">{userInfo.suffix == "" ? "NA" : userInfo.suffix}</td>
                  <td className="px-4 py-2">{userInfo.age}</td>
                  <td className="px-4 py-2">{userInfo.birthdate}</td>
                  <td className="px-4 py-2">{userInfo.address}</td>
                  <td className="px-4 py-2">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => onEdit(idx)}
                        className="btn btn-sm bg-yellow-600 hover:bg-yellow-700 text-white"
                      >
                        Edit
                      </button>
                <button
                  className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                  onClick={() => onDelete(idx)}
                >
                  Delete
                </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
