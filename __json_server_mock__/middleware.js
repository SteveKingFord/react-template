/*
 * @Author: kingford
 * @Date: 2021-04-03 15:50:41
 * @LastEditTime: 2021-04-03 16:03:47
 */
module.exports = (req, res, next) => {
  debugger
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.username === 'kingford' && req.body.password === '123456') {
      return res.status(200).json({
        user: {
          token: '1234556',
        },
      });
    }
    return res.status(400).json({
      message: '用户名或密码错误',
    });
  }
  next();
};
