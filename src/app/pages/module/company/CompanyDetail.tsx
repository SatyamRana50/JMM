import React, { useState } from 'react'
import { Button } from 'sr/helpers/ui-components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import DashboardWrapper from 'app/pages/dashboard/DashboardWrapper'
import { useQuery } from '@tanstack/react-query'
import { fetchCompanyDetail } from 'sr/utils/api/fetchCompanyDetail'

const Custom: React.FC<any> = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  console.log("this is params :- ", id)

  // Local state to handle editable fields
  const [isEditing, setIsEditing] = useState(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['companyDetail', { id }],
    queryFn: async () => fetchCompanyDetail({ company_id: id }),
    retry: 2, // Retry the request in case of failure
  })

  const onGoBack = () => {
    navigate('/company')
  }

  const toggleEdit = () => {
    setIsEditing((prev) => !prev)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading company details.</div>

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-300 mx-4 my-8 w-full relative">
      {/* Go Back Button inside the card at the top-left */}
      <Button
        onClick={onGoBack}
        label="Go Back 🡸"
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-full absolute top-4 left-4"
      />
      
      {/* Title centered */}
      <h2 className="text-4xl font-bold mb-6 text-center">Company Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <strong className="font-medium text-lg mr-2">Company Name:</strong>
            <p>{data?.data.company_id}</p>
          </div>
          <div className="flex items-center">
            <strong className="font-medium text-lg mr-2">Website:</strong>
            <a href={data?.data.company_website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {data?.data.company_website}
            </a>
          </div>
          <div className="flex items-center">
            <strong className="font-medium text-lg mr-2">Employees:</strong>
            <p>{data?.data.no_of_employees}</p>
          </div>
          <div className="flex items-center">
            <strong className="font-medium text-lg mr-2">Date of Incorporation:</strong>
            <p>{data?.data.date_of_incorporation || 'Not Available'}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <strong className="font-medium text-lg mr-2">Annual Revenue:</strong>
            <p>{data?.data.annual_revenue}</p>
          </div>
          <div className="flex items-center">
            <strong className="font-medium text-lg mr-2">Number of Branches:</strong>
            <p>{data?.data.number_of_branches}</p>
          </div>
          <div className="flex items-center">
            <strong className="font-medium text-lg mr-2">About Company:</strong>
            <p>{data?.data.about_company}</p>
          </div>
          <div className="flex items-center">
            <strong className="font-medium text-lg mr-2">Created At:</strong>
            <p>{new Date(data?.data?.createdAt || Date.now()).toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="flex space-x-4">
          <Button
            onClick={toggleEdit}
            label={isEditing ? "Cancel" : "Edit Details"}
            className={isEditing ? "bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-full" : "bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full"}
          />
        </div>
      </div>
    </div>
  )
}

const CompanyDetailCard: React.FC = () => {
  return (
    <DashboardWrapper customComponent={Custom} selectedItem='/company' />
  )
}

export default CompanyDetailCard