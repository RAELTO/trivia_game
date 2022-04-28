const axios = require('axios');//import axios - allow us to make requests

exports.playerList = (req, res) => {
    //Make a get request to /api/players
    axios.get('http://localhost:8080/api/players')
        .then(function(response) {
            console.log(response.data);
            res.render('scoreTable', {players: response.data});
        })
        .catch(e => {
            res.send(e);
        })
}

exports.index = (req, res) => {
    res.render('index');
}
