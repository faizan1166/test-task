const userRouter = require('express').Router()
const user = require('../controllers/user')
userRouter.post('/saveuser', user.saveuser)
userRouter.get('/getuser', user.getuser)
userRouter.get('/getallusers', user.getallusers)




module.exports = userRouter;