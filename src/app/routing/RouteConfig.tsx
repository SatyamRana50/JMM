// import TestMultiSelect from 'app/pages/module/test/Test'

import FabricTxn from 'app/pages/module/fabricTxn/fabricTxnComponents/FabricTxn'
import FabricTxnDetailsCard from 'app/pages/module/fabricTxn/fabricTxnComponents/FabricTxnDetails'
import {lazy} from 'react'

const WalletDetailsCard = lazy(
  () => import('app/pages/module/fabricWallet/walletComponents/WalletDetails')
)
const Wallet = lazy(() => import('app/pages/module/fabricWallet/walletComponents/Wallet'))

const StripeCard = lazy(
  () => import('app/pages/module/stripeCards/stripeCardComponents/StripeCard')
)

const Feedback = lazy(() => import('app/pages/module/feedback/feedbackComponents/Feedback'))
const FeedbackDetailsCard = lazy(
  () => import('app/pages/module/feedback/feedbackComponents/FeedbackDetails')
)
const StripeCustomerDetailsCard = lazy(
  () => import('app/pages/module/stripeCustomer/stripeCustomerComponents/StripeCustomerDetails')
)
const StripeCustomer = lazy(
  () => import('app/pages/module/stripeCustomer/stripeCustomerComponents/StripeCustomer')
)
const TaskTrackDetailsCard = lazy(
  () => import('app/pages/module/taskTrack/taskTrackComponents/TaskTrackDetails')
)
const TaskTrack = lazy(() => import('app/pages/module/taskTrack/taskTrackComponents/TaskTrack'))
const TaskMgmtDetailsCard = lazy(
  () => import('app/pages/module/taskMgmt/taskMgmtComponents/TaskMgmtDetails')
)
const TaskMgmt = lazy(() => import('app/pages/module/taskMgmt/taskMgmtComponents/TaskMgmt'))
const SupervisorDetailsCard = lazy(() => import('app/pages/module/supervisor/SupervisorDetails'))
const ContractorJobtypeCard = lazy(
  () => import('app/pages/module/contractorJobtype/ContractorJobtype')
)
const HiredetailsCard = lazy(() => import('app/pages/module/contractorHiredetails/Hiredetails'))
const NotesDetails = lazy(() => import('app/pages/module/notes/NotesDetails'))
const CustomerAddressCard = lazy(() => import('app/pages/module/customer/CustomerAddress'))
const CustomerContactCard = lazy(() => import('app/pages/module/customerContact/CustomerContact'))
const IndividualFavCleanerCard = lazy(() => import('app/pages/module/favCleaner/FavCleaner'))
const WorkOrderApplicationDetailsCard = lazy(
  () => import('app/pages/module/workorderApplication/WorkOrderApplicationDetails')
)
const WorkOrderApplication = lazy(
  () => import('app/pages/module/workorderApplication/WorkOrderApplication')
)
const CustomerLocationCard = lazy(
  () => import('app/pages/module/customerLocation/CustomerLocation')
)
const CleanerFavWorkorderCard = lazy(() => import('app/pages/module/favWorkorder/FavWorkorder'))
const CleanerFavJobCard = lazy(() => import('app/pages/module/favJobs/FavJob'))
const CompanyAddInfoCard = lazy(() => import('app/pages/module/company/CompanyAddInfo'))
const CleanerJobTypeCard = lazy(() => import('app/pages/module/cleanerJobType/CleanerJobType'))
const CleanerPreferenceCard = lazy(
  () => import('app/pages/module/cleanerPreference/CleanerPreference')
)
const CleanerTrainingCard = lazy(() => import('app/pages/module/cleanerTraining/CleanerTraining'))
const CleanerMedicalCard = lazy(() => import('app/pages/module/cleanerMedical/CleanerMedical'))
const CleanerEmploymentCard = lazy(
  () => import('app/pages/module/cleanerEmployment/CleanerEmployment')
)
const CleanerReferenceCard = lazy(
  () => import('app/pages/module/cleanerReference/CleanerReference')
)
const IndividualJobCategoryCard = lazy(
  () => import('app/pages/module/individualJobCategory/IndividualJobCategory')
)
const IndividualJobCard = lazy(() => import('app/pages/module/individualJob/IndividualJob'))
const IndividualTasklistCard = lazy(
  () => import('app/pages/module/individualTasklist/IndividualTasklist')
)
const IndividualChecklistCard = lazy(
  () => import('app/pages/module/individualChecklist/IndividualChecklist.tsx')
)
const Branch = lazy(() => import('app/pages/module/companyBranch/Branch'))
const ContractorDetailsCard = lazy(() => import('app/pages/module/contractor/ContractorDetails'))
const ApplicationDetailsCard = lazy(
  () => import('app/pages/module/applications/ApplicationDetails')
)
const ProposalDetailCard = lazy(() => import('app/pages/module/proposalDetails/ProposalDetails'))
const WorkOrderDetailsCard = lazy(() => import('app/pages/module/workOrder/WorkOrderDetails'))
const TaskListDetailsCard = lazy(() => import('app/pages/module/taskList/TaskListDetails'))
const ChecklistDetailsCard = lazy(() => import('app/pages/module/checklist/ChecklistDetails'))
const ChecklistCard = lazy(() => import('app/pages/module/checklist/Checklist.tsx'))
const CustomerCard = lazy(() => import('app/pages/module/customer/Customer'))
const CustomerDetailsCard = lazy(() => import('app/pages/module/customer/CustomerDetails'))
const CleanerDetailsCard = lazy(() => import('app/pages/module/cleaner/CleanerDetails'))
const UserDetailCard = lazy(() => import('app/pages/module/user/UserDetail'))
const JobDetailsCard = lazy(() => import('app/pages/module/jobs/JobDetails'))
const Address = lazy(() => import('app/pages/module/address/Address'))
const BusinessCategory = lazy(() => import('app/pages/module/masterData/business/Business'))
const User = lazy(() => import('app/pages/module/user/User'))
const Jobs = lazy(() => import('app/pages/module/jobs/Jobs'))
const WorkOrder = lazy(() => import('app/pages/module/workOrder/WorkOrder'))
const Cleaner = lazy(() => import('app/pages/module/cleaner/Cleaner'))
const TaskList = lazy(() => import('app/pages/module/taskList/TaskList'))
const Company = lazy(() => import('app/pages/module/company/Company'))
const CompanyDetailCard = lazy(() => import('app/pages/module/company/CompanyDetail'))
// const Task = lazy(() => import('app/pages/module/task/Task'))
const ProposalDetails = lazy(() => import('app/pages/module/proposalDetails/ProposalDetails'))
const Contractor = lazy(() => import('app/pages/module/contractor/Contractor'))
const Messages = lazy(() => import('app/pages/module/messages/Messages'))
const Notes = lazy(() => import('app/pages/module/notes/Notes'))
const Supervisor = lazy(() => import('app/pages/module/supervisor/Supervisor'))
const Application = lazy(() => import('app/pages/module/applications/Application'))

export const routeConfigs = [
  {path: '/business-category', element: <BusinessCategory />},
  {path: '/job', element: <Jobs />},
  {path: '/job/:id', element: <JobDetailsCard />},
  {path: '/customer', element: <CustomerCard />},
  {path: '/customer/details/:customer_id', element: <CustomerDetailsCard />},
  {path: '/customer/address/:customer_id', element: <CustomerAddressCard />},
  {path: '/customer/contacts/:customer_id', element: <CustomerContactCard />},
  {path: '/customer/checklist/:customer_id', element: <ChecklistCard />},
  {path: '/customer/tasklist/:customer_id', element: <TaskList />},
  {path: '/customer/location/:customer_id', element: <CustomerLocationCard />},
  {path: '/checklist', element: <ChecklistCard />},
  {path: '/checklist/:id', element: <ChecklistDetailsCard />},
  {path: '/workorder', element: <WorkOrder />},
  {path: '/workorder/:id', element: <WorkOrderDetailsCard />},
  {path: '/workorderapplication', element: <WorkOrderApplication />},
  {path: '/workorderapplication/:id', element: <WorkOrderApplicationDetailsCard />},
  {path: '/cleaner', element: <Cleaner />},
  {path: '/cleaner/details/:cleanerId', element: <CleanerDetailsCard />},
  {path: '/cleaner/reference/:cleanerId', element: <CleanerReferenceCard />},
  {path: '/cleaner/employment/:cleanerId', element: <CleanerEmploymentCard />},
  {path: '/cleaner/medical/:cleanerId', element: <CleanerMedicalCard />},
  {path: '/cleaner/training/:cleanerId', element: <CleanerTrainingCard />},
  {path: '/cleaner/preference/:cleanerId', element: <CleanerPreferenceCard />},
  {path: '/cleaner/jobtype/:cleanerId', element: <CleanerJobTypeCard />},
  {path: '/cleaner/savedjob/:cleanerId', element: <CleanerFavJobCard />},
  {path: '/cleaner/workorder/:cleanerId', element: <WorkOrder />},
  {path: '/cleaner/savedworkorder/:cleanerId', element: <CleanerFavWorkorderCard />},
  {path: '/cleaner/appliedwordorder/:cleanerId', element: <WorkOrderApplication />},
  {path: '/cleaner/proposaldetails/:cleanerId', element: <ProposalDetails />},
  {path: '/cleaner/appliedjobs/:cleanerId', element: <Application />},
  {path: '/task', element: <TaskList />},
  {path: '/task/:id', element: <TaskListDetailsCard />},
  {path: '/taskmgmt', element: <TaskMgmt />},
  {path: '/taskmgmt/:id', element: <TaskMgmtDetailsCard />},
  {path: '/tasktrack', element: <TaskTrack />},
  {path: '/tasktrack/:id', element: <TaskTrackDetailsCard />},
  {path: '/company', element: <Company />},
  {path: '/company/details/:company_id', element: <CompanyDetailCard />},
  {path: '/company/additionalInfo/:company_id', element: <CompanyAddInfoCard />},
  {path: '/company/branch/:company_id', element: <Branch />},
  //   {path: '/task', element: <Task />},
  {path: '/proposaldetails', element: <ProposalDetails />},
  {path: '/proposaldetails/:id', element: <ProposalDetailCard />},
  {path: '/contractor', element: <Contractor />},
  {path: '/contractor/details/:contractor_id', element: <ContractorDetailsCard />},
  {path: '/contractor/hiredetails/:contractor_id', element: <HiredetailsCard />},
  {path: '/contractor/jobtype/:contractor_id', element: <ContractorJobtypeCard />},
  {path: '/user', element: <User />},
  {path: '/user/details/:userId', element: <UserDetailCard />},
  {path: '/user/checklist/:userId', element: <IndividualChecklistCard />},
  {path: '/user/tasklist/:userId', element: <IndividualTasklistCard />},
  {path: '/user/job/:userId', element: <IndividualJobCard />},
  {path: '/user/jobCategory/:userId', element: <IndividualJobCategoryCard />},
  {path: '/user/favcleaner/:userId', element: <IndividualFavCleanerCard />},
  {path: '/notes', element: <Notes />},
  {path: '/notes/:id', element: <NotesDetails />},
  {path: '/message', element: <Messages />},
  {path: '/supervisor', element: <Supervisor />},
  {path: '/supervisor/:supervisor_id', element: <SupervisorDetailsCard />},
  {path: '/address', element: <Address />},
  {path: '/user/address/:userId', element: <Address />},
  {path: '/application', element: <Application />},
  {path: '/application/:id', element: <ApplicationDetailsCard />},
  {path: '/feedback', element: <Feedback />},
  {path: '/feedback/:id', element: <FeedbackDetailsCard />},
  {path: '/stripecustomer', element: <StripeCustomer />},
  {path: '/stripecustomer/details/:stripe_customer_id', element: <StripeCustomerDetailsCard />},
  {path: '/stripecustomer/card/:stripe_customer_id', element: <StripeCard />},
  {path: '/wallet', element: <Wallet />},
  {path: '/wallet/:id', element: <WalletDetailsCard />},
  {path: '/fabrictxn', element: <FabricTxn />},
  {path: '/fabrictxn/:id', element: <FabricTxnDetailsCard />},
  // {path: '/test', element: <TestMultiSelect />},
]
