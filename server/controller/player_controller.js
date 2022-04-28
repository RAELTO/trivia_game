const Playerdb = require('../model/player');

//first API new request - create and save a new player
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    //new player
    const player = new Playerdb({
        name: req.body.name,
        score: req.body.score
    })

    //save player in the database
    player
    .save(player)
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while creating a create operation"
        })
    })

}

//retrieve and return all players / retrieve and return a single player
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Playerdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({ message: `Not found player with id ${id}` })
                }else{
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: `Error retrieving player with id ${id}`})
            })

    }else{
        Playerdb.find()
            .then(player => {
                res.send(player)
            })
            .catch(err => {
                res.status(500).send({message:err.message || "An ERROR occurred while retrieving player information"})
            })
    }
}

//Update a new identified player by player id
exports.update = (req, res) => {
    if (!req.body) {
        return res
        .status(400)
        .send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Playerdb.findByIdAndUpdate(id, req.body)
    .then(data => {
        if (!data) {
            res.status(404).send({message: `Cannot update player with ${id}. Maybe player not found!`})
        }else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error Updating player information"})
    })

}

//Delete a player with specified player id
exports.delete = (req, res) => {
    const id = req.params.id;
    Playerdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: `Cannot delete with id ${id}. Maybe id is wrong!`})
            }else{
                res.send({message: "Player was deleted successfully!"})
            }
        })
        .catch(err => {
            res.status(500).send({message: `Could not delete player with id = ${id}`});
        });
}