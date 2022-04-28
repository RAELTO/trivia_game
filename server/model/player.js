
const { Schema, model} = require('mongoose');

const PlayerSchema = Schema({
    name: {
        type: String,
        required: [true, 'a name is required']
    },
    score: {
        type: Number,
        required: true
    }
});

//metodos para editar o personalizar el Schema
PlayerSchema.methods.toJSON = function(){
    const { _id, ...player} = this.toObject();

    player.uid = _id;

    return player;
}

module.exports = model( 'Player', PlayerSchema );