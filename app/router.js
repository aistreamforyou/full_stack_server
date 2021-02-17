'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  // 验证码
  router.get('/captcha', controller.utils.captcha)
  router.group({ name: 'user', prefix: '' }, router => {
    console.log('post请求')
    const { info, login, register, verify } = controller.user
    router.post('/info', info)
    router.post('/login', login)
    router.post('/register', register)
    router.post('/verify', verify)
  })
}
