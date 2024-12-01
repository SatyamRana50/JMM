import React from 'react';

interface SkeletonApplicationTableProps {
  rowCount?: number;
}

const SkeletonApplicationTable: React.FC<SkeletonApplicationTableProps> = ({ rowCount = 8 }) => {
  return (
    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
              Job Title
            </th>
            <th className="px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
              Company Name
            </th>
            <th className="px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
              Cleaner Name
            </th>
            <th className="px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
              Start Date
            </th>
            <th className="px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
              Status
            </th>
            <th className="px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }).map((_, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <div className="skeleton-row h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <div className="skeleton-row h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <div className="skeleton-row h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <div className="skeleton-row h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <div className="skeleton-row h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <div className="skeleton-row h-4 bg-gray-300 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonApplicationTable;
