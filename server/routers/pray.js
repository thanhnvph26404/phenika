import express from 'express';
import { sentPray, getPray } from '../controllers/pray.js   ';
const router = express.Router()

router.post('/prays', sentPray)
router.get('/prays', getPray)

export default router