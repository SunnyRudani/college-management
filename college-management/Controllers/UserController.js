const mongoose = require('mongoose')
const {
  badRequestResponse,
  successResponse,
  errorResponse
} = require('../middleware/response')
const USER = mongoose.model('users')
exports.user = {

  add: async function (req, res) {
    try {
      const user = {

        email: req.body.email,
        password: req.body.password
      }


        const isCreated = await USER.create(user)
        if (isCreated) {
          return successResponse(res, {
            message: 'User created successfully',
          })
        } else {
          return badRequestResponse(res, {
            message: 'Failed to create user',
          })
        }

    } catch (error) {
      return errorResponse(error, req, res)
    }
  },

  get: async function (req, res) {
    try {
      let users = await USER.find({})
      // users.map((x) => {
      //   if (x.image) {
      //     x.image = `${getHost(req)}/uploads/${x.image}`
      //   }
      // })
      return successResponse(res, {
        data: users,
      })
    } catch (error) {
      return errorResponse(error, req, res)
    }
  },
  delete: async function (req, res) {
    try {
      const userInfo = await USER.findOne({
        _id: req.query.id,
      })
      if (!userInfo) {
        return badRequestResponse(res, {
          message: 'User not found',
        })
      }
      await USER.findByIdAndRemove({
        _id: userInfo._id,
      })
      return successResponse(res, {
        message: 'User deleted successfully',
      })
    } catch (error) {
      return errorResponse(error, req, res)
    }
  },
  getById: async function (req, res) {
    try {
      let userInfo = await USER.findOne({
        _id: req.query.id,
      })
      if (!userInfo) {
        return badRequestResponse(res, {
          message: 'User not found',
        })
      }
      userInfo.image = `${getHost(req)}/uploads/${userInfo.image}`
      return successResponse(res, {
        data: userInfo,
      })
    } catch (error) {
      return errorResponse(error, req, res)
    }
  }
}
