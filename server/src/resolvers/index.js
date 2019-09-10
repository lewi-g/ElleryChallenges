import { merge } from 'lodash'

const resolvers = {
  Query: {
    hello: () => '🌍🌏🌎'
  }
}

import Date from './Date'

const resolversByType = [Date]

resolversByType.forEach(type => merge(resolvers, type))

export default resolvers
