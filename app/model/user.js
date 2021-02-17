'use strict'
// 用户模型
module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },

  }, { timestamps: true })
  return mongoose.model('User', UserSchema)
}
