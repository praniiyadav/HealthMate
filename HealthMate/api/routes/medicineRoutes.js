import express from 'express';
import { getAllMedicines, getMedicineById } from '../controllers/medicineController.js';

const router = express.Router();

// Route to get all medicines
router.get('/', getAllMedicines);

// Route to get a single medicine by ID
router.get('/:id', getMedicineById);

export default router;
