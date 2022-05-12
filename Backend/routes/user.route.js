import express from 'express';

import {  createUser,getuserBYEmail,getusers} from '../controllers/user.js';

const router = express.Router();

router.post('/', createUser);
router.get('/',getusers);

//   localhost:3001/api/users/login

router.post('/login', getuserBYEmail);

export default router;
