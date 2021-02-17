// eslint-disable-next-line strict
const BaseController = require('./base')
const createRule = {
  username: { type: 'string' },
  email: { type: 'email' },
}
// eslint-disable-next-line no-unused-vars
class UserController extends BaseController {
  async login() {
    //
  }
  async register() {
    const { ctx } = this
    try {
      // 校验字段
      ctx.validate(createRule)
      // eslint-disable-next-line no-empty
    } catch (e) {
      this.error('参数校验失败', -1, e.errors)
    }
    // 打印入参
    const { username, password, captcha, email } = ctx.request.body
    console.log({ username, password, captcha, email })
    if (captcha.toUpperCase() === ctx.session.captcha.toUpperCase()) {
      //
    } else {
      this.error('验证码错误')
    }
    this.success({ name: 'weibelhub' })
  }
  async info() {
    //
  }
  async verify() {
    //
  }
}

module.exports = UserController
