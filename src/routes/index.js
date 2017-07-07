import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'
import ticTacToeCtrl from '../controllers/ticTacToeCtrl'
import mrsa from '../controllers/mrsa'

const router = Router()

router.get('/', indexCtrl)
router.get('/tic-tac-toe', ticTacToeCtrl)
router.get('/mrsa/:id?', mrsa)
router.post('/routes', ctx => {
  ctx.body = {
    success: true,
    data: ['/home', '/readme', '/todos']
  }
})

export default router
