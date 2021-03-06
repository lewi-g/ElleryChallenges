import { ApolloServer } from 'apollo-server'
import { ObjectId } from 'mongodb'
import { execute } from 'apollo-link'
import HttpLink from 'apollo-link-http'
import fetch from 'node-fetch'

import { Reviews, Users } from '../src/data-sources/'
import {
  server,
  typeDefs,
  resolvers,
  context as defaultContext,
  formatError
} from '../src/'

const updatedAt = new Date('2020-01-01')

export const mockUser = {
  _id: ObjectId('5d24f846d2f8635086e55ed3'),
  firstName: 'First',
  lastName: 'Last',
  username: 'mockA',
  authId: 'mockA|1',
  email: 'mockA@gmail.com',
  updatedAt
}

const mockUsers = [mockUser]

const reviewA = {
  _id: ObjectId('5ce6e47b5f97fe69e0d63479'),
  text: 'A+',
  stars: 5,
  updatedAt,
  authorId: mockUser._id
}

const reviewB = {
  _id: ObjectId('5cf8add4c872001f31880a97'),
  text: 'Passable',
  stars: 3,
  updatedAt,
  authorId: mockUser._id
}

const mockReviews = [reviewA, reviewB]

const insertOne = jest.fn(
  doc => (doc._id = new ObjectId('5cf8b6ff37568a1fa500ba4e'))
)

export const createTestServer = ({ context = defaultContext } = {}) => {
  const reviews = new Reviews({
    reviews: {
      find: jest.fn(() => ({
        toArray: jest.fn().mockResolvedValue(mockReviews)
      })),
      insertOne
    }
  })

  const users = new Users({
    users: {
      ensureIndex: jest.fn(),
      find: jest.fn(() => ({
        toArray: jest.fn().mockResolvedValue(mockUsers)
      })),
      insertOne
    }
  })

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ reviews, users }),
    context,
    formatError
  })

  return { server, dataSources: { reviews, users } }
}

export const startE2EServer = async () => {
  const httpServer = await server.listen({ port: 0 })

  const link = new HttpLink({
    uri: `http://localhost:${httpServer.port}`,
    fetch
  })

  return {
    link,
    stop: () => httpServer.server.close(),
    graphql: ({ query, variables = {} }) => execute(link, { query, variables })
  }
}

export { createTestClient } from 'apollo-server-testing'
export { default as gql } from 'graphql-tag'
