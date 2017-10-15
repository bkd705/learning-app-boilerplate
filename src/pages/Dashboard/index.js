import React from 'react'
import { withRecords } from '../../components/HOCs'
import { RecordTypePanel } from '../../components/RecordTypePanel'
import './styles/dashboard.css'

const Dashboard = ({ recordTypes, ...rest }) => {
  const recordTypePanels = recordTypes.map(rt => (
    <RecordTypePanel recordType={rt} className="dashboard-record-panel" />
  ))
  return (
    <div className="dashboard">
      <div className="dashboard-container">{recordTypePanels}</div>
    </div>
  )
}

export default withRecords(Dashboard)
