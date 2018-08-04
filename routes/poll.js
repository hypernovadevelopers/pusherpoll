const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vote = require('../models/vote');
const Pusher = require('pusher');

let pusher = new Pusher({
	appId: '571676',
	key: 'f1bf09828879ccc6a38e',
	secret: '4a1a556da3b14fc55413',
	cluster: 'us2',
	encrypted: true
});

router.get('/', (req, res) => {
	Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post('/', (req, res) => {
	const newVote = {
		os: req.body.os,
		points: 1
	};

	new Vote(newVote).save().then(vote => {
		pusher.trigger('os-poll', 'os-vote', {
			points: parseInt(vote.points),
			os: vote.os
		});

		return res.json({ sucess: true, message: 'Thank you for voting' });
	});
});

// Built in module
module.exports = router;
