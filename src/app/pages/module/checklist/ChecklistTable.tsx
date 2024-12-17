import React from 'react'
import {FaEye} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Checklist} from 'sr/utils/api/checklistApi'
interface ChecklistTableProps {
  data: Checklist[] | undefined
}
const ChecklistTable: React.FC<ChecklistTableProps> = ({data}) => {
  return (
    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
      <table className='min-w-full leading-normal'>
        <thead>
          <tr>
            <th className='px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider'>
              Name
            </th>
            <th className='px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider'>
              Type
            </th>
            <th className='px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider'>
              SubType
            </th>
            <th className='px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider'>
              Company Name
            </th>
            <th className='px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider'>
              Customer Name
            </th>

            <th className='px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider'>
              Status
            </th>

            <th className='px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((checklist) => (
            <tr key={checklist.id} className='odd:bg-white even:bg-gray-50'>
              <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{checklist.name}</p>
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{checklist.type}</p>
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{checklist.subtype}</p>
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                <Link
                  to={`/company/${checklist.company_id._id}`}
                  className='text-blue-500 hover:font-medium'
                >
                  {checklist.company_id.company_name}
                </Link>
              </td>
              <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                <Link
                  to={`/customer/${checklist.customer_id.name}`}
                  className='text-blue-500 hover:font-medium'
                >
                  {checklist.customer_id.name}
                </Link>
              </td>

              <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                <p
                  className={`whitespace-no-wrap ${
                    checklist.status === 'active'
                      ? 'text-green-500'
                      : checklist?.status === 'draft'
                      ? 'text-orange-500'
                      : 'text-gray-500' // Default color for unknown statuses
                  }`}
                >
                  {checklist.status}
                </p>
              </td>

              <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                <Link to={`/checklist/${checklist.id}`} className='text-blue-500 hover:font-medium'>
                  <FaEye
                    className='cursor-pointer text-blue-500 hover:text-gray-700'
                    style={{fontSize: '1.1rem'}}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ChecklistTable