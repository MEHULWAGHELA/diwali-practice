const express = require("express");
const { userGet ,userPost,getSingleUser,userDelete,userUpdate} = require("../controller/userController");
const router = express.Router();
router.get('/getdata', userGet)
router.post('/adddata', userPost)
router.get('/getdata/:id', getSingleUser)
router.delete('/deletedata/:id',userDelete)
router.put('/updatedata/:id', userUpdate)

module.exports = router;