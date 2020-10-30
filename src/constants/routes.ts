import { CreateCustomerPage } from '../containers/CreateCustomer/CreateCustomerPage'
import { CustomerDetailsPage } from '../containers/CustomerDetails/CustomerDetailsPage'
import { CustomerFeedPage } from '../containers/CustomerFeed/CustomerFeedPage'
import { DashboardPage } from '../containers/Dashboard/DashboardPage'
import { HierarchyManagementPage } from '../containers/HierarchyManagement/HierarchyManagementPage'
import { AppRouteType } from '../types'

export const ROUTE = {
  createcustomer: () => '/createcustomer',
  customerdetails: (params?: { id: string }) =>
    `/customerdetails/${params ? params.id : ':id?'}`,
  customerfeed: (params?: { id: string }) =>
    `/customerfeed/${params ? params.id : ':id?'}`,
  dashboard: () => '/dashboard',
  hierarchymanagement: () => '/hierarchymanagement',
  taskmanager: () => '/taskmanager'
}

export const ROUTES: AppRouteType[] = [
  {
    component: CreateCustomerPage,
    exact: true,
    path: ROUTE.createcustomer()
  },
  {
    component: CustomerDetailsPage,
    exact: true,
    path: ROUTE.customerdetails()
  },
  {
    component: CustomerFeedPage,
    exact: true,
    path: ROUTE.customerfeed()
  },
  {
    component: DashboardPage,
    exact: true,
    path: ROUTE.dashboard()
  },
  {
    component: HierarchyManagementPage,
    exact: true,
    path: ROUTE.hierarchymanagement()
  }
]
