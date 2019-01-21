import React from 'react'
import Helmet from 'react-helmet'

import './styles.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Xaolonist's dynamic email template</title>
    </Helmet>
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
