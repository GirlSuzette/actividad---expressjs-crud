// definir funciones para http 


const users = require('../../../data')


const controllers = {
    index: (req, res) => {
        res
            .status(200)
            .json({
                data: users
            })
    },

    find: (req, res) => {

        const queryId = req.params.id
        const user = users.users.filter(user => user.id.toString() === queryId)
        res
            .json({
                data: user
            })
            .status(200)
    }


}


module.exports = controllers
