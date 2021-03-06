const Router = require('@koa/router');
const router = new Router();
const articleController = require('../controller/article');
const loginController = require('../controller/login');
const upLoadUtil = require('../util/upload');

// 测试
// const { query } = require('../server/db.js');
/* router.get('/test', async ctx => {
  let result = await query('SELECT * FROM test');
  console.log(result);
  ctx.body = {
    text: result
  };
});

router.post('/testadd', async ctx => {
  let req = ctx.request.body;
  await query('INSERT INTO test SET ?', req);
  ctx.body = {
    code: 200,
    data: [],
    message: 'add success'
  };
}); */

// 文章类型
/* 查 */
router.get('/articletype', articleController.articletype);
/* 增 */
router.post('/articletype', articleController.articletypeinsert);
/* 改 */
router.put('/articletype/:id', articleController.articletypeupdate);
/* 删 */
router.delete('/articletype/:id', articleController.articletypedelete);

// 文章
/* 查 */
router.get('/article', articleController.article);
router.get('/article1', articleController.article1);
router.get('/article1/:id', articleController.articleDetail);
/* 增 */
router.post('/article', articleController.articleinsert);
/* 改 */
router.put('/article/:id', articleController.articleupdate);
/* 删 */
router.delete('/article/:id', articleController.articledelete);

// 登录
router.post('/login', loginController.login);
// 检测登录状态
router.get(
  '/checkLogin',
  loginController.keepLogin,
  loginController.checkLogin
);
// 登出
router.post('/exit', loginController.exit);

// 图片上传
router.post('/uploadImg', upLoadUtil.imgUpload, articleController.imgUpload);
module.exports = router;
