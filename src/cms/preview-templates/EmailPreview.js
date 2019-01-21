import React from 'react'
import PropTypes from 'prop-types'
import { EmailTemplate } from '../../templates/email'

const EmailPreview = ({ entry, widgetFor }) => (
  <EmailTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EmailPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EmailPreview
