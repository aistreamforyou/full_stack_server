'use strict'

const svgCaptcha = require('svg-captcha')
const Controller = require('egg').Controller

class UtilsController extends Controller {
  async captcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 20,
      width: 100,
      height: 40,
      noise: 3,
    })
    console.log('验证码', captcha.text)
    this.ctx.session.captcha = captcha.text
    this.ctx.response.type = 'image/svg+xml'
    this.ctx.body = captcha.data
  }
}

module.exports = UtilsController
