const mongoose = require('mongoose');

// Map global process
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
	.connect(
		'mongodb://root:Rddrl101@ds113122.mlab.com:13122/pusherpoll',
		{ useNewUrlParser: true }
	)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));
