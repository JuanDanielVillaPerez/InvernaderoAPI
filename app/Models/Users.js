'use strict'

const BaseModel = use('MongooseModel')

const mongoose = use('Mongoose')

const {Schema} = mongoose

const UserSchema = new Schema(
  {
    id: String,
    username: String,
    email: String,
    password: String,
    date: {type: Date, default:Date.now}
  }
) 

/**
 * @class Users
 */
class Users extends BaseModel {
  /**
   * Users's schema
   */
  static get schema () {
    return {

    }
  }
}

UserSchema.loadClass(Users)

module.exports = mongoose.model('Users',UserSchema)
