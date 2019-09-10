import Users from './Users'
import { db } from '../db'

export default () => ({
  users: new Users({ users: db.collection('users') })
})

export { Users }
