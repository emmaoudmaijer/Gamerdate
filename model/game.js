const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
	_id: Number,
	title: String,
	img: String
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game;
