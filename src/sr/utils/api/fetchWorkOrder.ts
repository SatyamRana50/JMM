import {get} from 'sr/utils/axios/index'

interface ChecklistDetails {
  _id: string
  name: string
  type: string
  subtype: string
  company_id: string
  customer_id: string
  task_ids: string[]
  status: string
  createdAt: string
  updatedAt: string
}

interface CompanyDetails {
  _id: string
  username: string
  email: string
  mobile_number: string
  company_name: string
  business_type: string[]
  intent: string[]
  candidate_msg: boolean
  user_id: string
  status: string
  createdAt: string
  updatedAt: string
}

interface CustomerDetails {
  _id: string
  company_id: string
  email: string
  mobile_number: string
  name: string
  type: string
  remarks: string
  location_ids: string[]
  checklist_ids: string[]
  status: string
  contacts: string[]
  createdAt: string
  updatedAt: string
}

interface CustomerLocationDetails {
  _id: string
  customer_id: string
  company_id: string
  address: {
    address_line_1: string
    address_line_2: string
    city: string
    state: string
    postal: string
    country: string
    lat: number
    lng: number
  }
  checklist_ids: string[]
  geofence_ids: string[]
  contacts: string[]
  createdAt: string
  updatedAt: string
}

export interface WorkOrderResponse {
  title: string
  description: string
  type: string
  contractor_id: Record<string, any>
  checklist_id: ChecklistDetails
  company_id: CompanyDetails
  customer_id: CustomerDetails
  customer_location_id: CustomerLocationDetails
  job_type: string
  pay_type: string
  pay_type_rate: number
  entry_time: string
  exit_time: string
  one_time_date: string
  time_for_work_completion: number
  recurring: boolean
  payment_status: string
  workorder_status: string
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
  counts: {
    statusCounts: Record<string, number>
    approvalStatusCounts: Record<string, number>
    paymentStatusCounts: Record<string, number>
    workorderStatusCounts: Record<string, number>
  }
}

interface FetchWorkOrderResponse {
  data: WorkOrderResponse[]
  success: boolean
  pagination: Pagination
}
export interface FetchSingleWorkOrderResponse extends Omit<FetchWorkOrderResponse, 'data'> {
  data: WorkOrderResponse
}

interface PayloadType {
  limit?: number
  page?: number
  sortBy?: string
  filterBy?: string
}

const filterPayload = (payload: PayloadType) => {
  return Object.fromEntries(
    Object.entries(payload).filter(([_, value]) => value !== undefined && value !== null)
  )
}

export const fetchWorkOrder = async (payload: PayloadType): Promise<FetchWorkOrderResponse> => {
  const filteredPayload = filterPayload(payload)

  try {
    const res = await get<FetchWorkOrderResponse>(`/workorder`, filteredPayload)

    if (res.data && res.data.length > 0) {
      return res // Return the fetched data
    } else {
      throw new Error('No data found')
    }
  } catch (error) {
    throw new Error(`Failed to fetch: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
export const fetchSingleWorkOrder = async (id: string): Promise<FetchSingleWorkOrderResponse> => {
  try {
    const res = await get<FetchSingleWorkOrderResponse>(`/workorder`, {id})

    if (res.success === true && res.data) {
      return res // Return the fetched data
    } else {
      throw new Error('No data found')
    }
  } catch (error) {
    throw new Error(`Failed to fetch: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
