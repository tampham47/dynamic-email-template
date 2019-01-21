import CMS from 'netlify-cms'

import EmailPreview from './preview-templates/EmailPreview'

CMS.registerPreviewTemplate('email', EmailPreview)
