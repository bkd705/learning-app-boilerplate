import Dashboard from '../pages/Dashboard'
import RecordTypeDetail from '../pages/RecordTypeDetail'

export default [
  {
    path: '/',
    component: Dashboard,
    exact: true,
    friendlyName: 'Dashboard',
  },
  {
    path: '/recordtypes/:id',
    component: RecordTypeDetail,
    exact: false,
  },
]
