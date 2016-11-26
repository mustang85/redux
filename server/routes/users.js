import express from 'express';
import validateInput from '../shared/validations/signup';
// import bcrypt from 'bcrypt';

import User from '../models/users';

let router = express.Router();


router.post('/', (req, res) => {
	setTimeout(() => {
		const { errors, isValid } = validateInput(req.body);
		console.log('req.body', req.body)
		if (isValid) {
			const { username, password, timezone, email } = req.body;
			const password_digest = parseInt(password, 10);

			User.forge({
				username, timezone, email, password_digest
			}, { hasTimestamps: true }).save()
				.then(user => res.json({ success: true }))
				.catch(err => res.status(500).json({ error: err }));

		} else {
			res.status(400).json(errors);
		}

		// if (!isValid) {
		// 	res.status(400).json(errors);
		// } 

		// res.sendStatus(200);
	}, 5000);

});

export default router;