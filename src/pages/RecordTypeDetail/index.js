import React from 'react'
import { withRecords } from '../../components/HOCs'
import { RecordTable } from '../../components/RecordTable'
import './styles/recordtypedetail.css'

const RecordTypeDetail = ({ recordTypes, records, match }) => {
  const recordTypeId = match.params.id
  const recordType = recordTypes.find(rt => rt.id === Number(recordTypeId))

  if (!recordType) {
    return (
      <p className="text-error">
        Record with ID: {recordTypeId} does not exist!
      </p>
    )
  }

  const recordTypeFields = recordType.fields.map(field => (
    <div key={field.name + field.id} className="record-detail-field">
      <strong>{field.name}</strong>
      <br />
      {field.value}
    </div>
  ))

  return (
    <div className="record-type-detail">
      <div className="record-type-meta">
        <div className="container">
          <div className="columns">
            <div className="col-4">
              <ul>
                <li className="record-type-meta-item">
                  <strong>ID: </strong> {recordType.id}
                </li>
                <li className="record-type-meta-item">
                  <strong>Record Count: </strong> {records.length}
                </li>
              </ul>
            </div>

            <div className="col-8">
              <h6>Fields</h6>
              <div className="record-type-fields">{recordTypeFields}</div>
            </div>
          </div>
        </div>
      </div>
      <RecordTable recordType={recordType} records={records} />
    </div>
  )
}

export default withRecords(RecordTypeDetail)
