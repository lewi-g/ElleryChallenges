import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Users extends MongoDataSource {
  constructor(collection) {
    super(collection)

    this.users.ensureIndex({
      firstName: 'text',
      lastName: 'text',
      username: 'text'
    })
  }

  create(user) {
    user.updatedAt = new Date()
    this.users.insertOne(user)
    return user
  }

  search(term) {
    return this.users.find({ $text: { $search: term } }).toArray()
  }
}
