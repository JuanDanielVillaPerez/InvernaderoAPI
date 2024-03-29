'use strict'
const User = use('App/Models/Users')
class UserController {
    async store ({request, response}){
        const userData = request.only(['username', 'email','password'])
        const user = await User.create(userData)

        return response.created({
            status: true,
            data: user
        })
    }
}

module.exports = UserController
