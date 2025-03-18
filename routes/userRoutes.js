const express = require('express')

//import controller
const  {getAllUser,getUserById} = require('../controller/readUser')
const postUser = require('../controller/createUser')
const updateUser = require('../controller/updateUser')
const deleteUser = require('../controller/deleteUser')

const router = express.Router()

//post route
router.post('/post',postUser)
//get route
router.get('/get',getAllUser)
//get user by id
router.get('/get/:id',getUserById)
//update route
router.put('/put/:id',updateUser)
//delete routes
router.delete('/delete/:id',deleteUser)

module.exports = router

