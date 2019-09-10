import { ApolloError } from 'apollo-server'

export class InternalServerError extends ApolloError {
  constructor() {
    super(
      `We're sorry—an error occurred. We've been notified and will look into it.`,
      'INTERNAL_SERVER_ERROR'
    )

    Object.defineProperty(this, 'name', { value: 'InternalServerError' })
  }
}
