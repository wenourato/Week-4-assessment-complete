const db = require('./db.json')

// let motivationId = 4

const motivationList = [
    {
    id: 1,
    motivationString: "Keep on keepin on man"
    },
    {
    id: 2,
    motivationString: "Lifes a garden, Dig it!"
    },
    {
    id: 3,
    motivationString: "Roo doo, doo, doo, doo!"
}
]
    






module.exports = {
    getMotivation: (req, res) => {
        res.status(200).send(motivationList)
    },

    createMotivation: (req, res) => {
        const{motivationString} = req.body;
        let newMotivateString = {
            motivationString: motivationString,
            id: motivationList[motivationList.length - 1].id++
        }
        motivationList.push(newMotivateString)
        res.status(200).send(motivationList)

    },
    deleteMotivation: (req, res) => {
        const{id} = req.params
        const index = motivationList.findIndex(item => +item.id === +id)
        motivationList.splice(index, 1)
        res.status(200).send(motivationList)
    }
}

