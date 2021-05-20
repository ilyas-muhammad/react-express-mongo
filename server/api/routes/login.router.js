import Express from 'express'
import * as loginHandler from "../handlers/login.handler";

const router = Express.Router();

router.post('/login', loginHandler.login);

module.exports = router;