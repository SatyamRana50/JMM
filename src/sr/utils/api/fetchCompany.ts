import {get} from 'sr/utils/axios/index'

export interface CompanyResponse {
  username: string
  email: string
  mobile_number: string
  company_name: string
  business_type: string[]
  intent: string[]
  candidate_msg: boolean
  no_of_clients?: number
  user_id: string
  status: string
  createdAt: string
  updatedAt: string
  id: string
}

interface Pagination {
  total: number
  page: number
  pageSize: number
  sort: Record<string, number>
}

interface FetchCompanyResponse {
  success: boolean
  data: CompanyResponse[]
  pagination: Pagination
}

export interface CompanyFilters {
  limit?: number
  page?: number
  sortBy?: string
  projectBy?: string
  business_type?: string
  intent?: string
  candidate_msg?: boolean
  status?: string
}

const filterPayload = (payload: CompanyFilters) => {
  return Object.fromEntries(
    Object.entries(payload).filter(([_, value]) => value !== undefined && value !== null)
  )
}

export const fetchCompany = async (payload: CompanyFilters): Promise<FetchCompanyResponse> => {
  const filteredPayload = filterPayload(payload)

  try {
    const res = await get<FetchCompanyResponse>(`/company`, filteredPayload)

    if (res.data && res.data.length > 0) {
      return res // Return the fetched data
    } else {
      throw new Error('No data found')
    }
  } catch (error) {
    throw new Error(`Failed to fetch: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
