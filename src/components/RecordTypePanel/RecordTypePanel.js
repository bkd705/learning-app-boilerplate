import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, PanelBody, PanelHeader, PanelFooter } from '../Panel'
import { Button } from '../Button'

const RecordTypePanel = ({ recordType, className }) => {
  return (
    <div className={className}>
      <Panel>
        <PanelHeader title={recordType.friendlyName} />
        <PanelBody> </PanelBody>
        <PanelFooter>
          <Button isLink>
            <Link to={`/recordtypes/${recordType.id}`}>Go To Record Type</Link>
          </Button>
        </PanelFooter>
      </Panel>
    </div>
  )
}

export default RecordTypePanel
