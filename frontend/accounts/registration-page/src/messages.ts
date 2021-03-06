import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  title: {
    id: `${name}.title`,
    defaultMessage: 'Challenge',
  },

  description: {
    id: `${name}.description`,
    defaultMessage: 'Мы собрали лучших мастеров в одном месте',
  },
})
