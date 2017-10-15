import React, { Component } from 'react'

const BASERECORDTYPES = [
  {
    id: 1,
    type: 'USER',
    friendlyName: 'User',
    fields: [
      {
        id: 1,
        name: 'Username',
        value: 'String',
      },
      {
        id: 2,
        name: 'E-Mail',
        value: 'String',
      },
      {
        id: 3,
        name: 'Age',
        value: 'Int',
      },
    ],
  },
  {
    id: 2,
    type: 'PAYROLL',
    friendlyName: 'Payroll',
    fields: [
      {
        id: 1,
        name: 'UserID',
        value: 'Int',
      },
      {
        id: 2,
        name: 'Payment Type',
        value: 'String',
      },
      {
        id: 3,
        name: 'Payment Amount',
        value: 'Int',
      },
    ],
  },
]

const BASERECORDS = [
  {
    id: 1,
    recordType: 1,
    values: [
      {
        field: 1,
        value: 'bkd705',
      },
      {
        field: 2,
        value: 'bkd705@example.com',
      },
      {
        field: 3,
        value: 18,
      },
    ],
  },
  {
    id: 2,
    recordType: 1,
    values: [
      {
        field: 1,
        value: 'JackOfSports',
      },
      {
        field: 2,
        value: 'jack@example.com',
      },
      {
        field: 3,
        value: 23,
      },
    ],
  },
  {
    id: 3,
    recordType: 1,
    values: [
      {
        field: 1,
        value: 'MilanHarrisDev',
      },
      {
        field: 2,
        value: 'milan@example.com',
      },
      {
        field: 3,
        value: 25,
      },
    ],
  },
]

export default ComposedComponent => {
  class withRecords extends Component {
    state = {
      recordTypes: [],
      records: [],
    }

    componentDidMount() {
      this.setState({
        recordTypes: BASERECORDTYPES,
        records: BASERECORDS,
      })
    }

    addRecord = record => {
      this.setState({
        records: [...this.state.records, record],
      })
    }

    addRecordType = recordType => {
      this.setState({
        recordTypes: [...this.state.recordTypes, recordType],
      })
    }

    render() {
      return (
        <ComposedComponent
          addRecord={this.addRecord}
          addRecordType={this.addRecordType}
          records={this.state.records}
          recordTypes={this.state.recordTypes}
          {...this.props}
        />
      )
    }
  }

  return withRecords
}
