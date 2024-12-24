import express from 'express'
import { addBusinessType } from '../controllers/businessTypeController.js';

const router =express.Router();

router.post("/add",addBusinessType)

export default router